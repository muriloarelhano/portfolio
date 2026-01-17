import { fail } from '@sveltejs/kit';
import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { sendContactEmail } from './resend';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const verifyTurnstile = async (token: string, request: Request) => {
    const params = new URLSearchParams();
    params.set('secret', TURNSTILE_SECRET_KEY);
    params.set('response', token);
    const ip = request.headers.get('cf-connecting-ip') ?? request.headers.get('x-forwarded-for');
    if (ip) {
        params.set('remoteip', ip.split(',')[0]?.trim() ?? ip);
    }

    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: params
        });
        const data = (await response.json()) as { success?: boolean };
        return Boolean(data.success);
    } catch {
        return false;
    }
};

export const createContactActions = () => ({
    sendContact: async ({ request }: { request: Request }) => {
        const form = await request.formData();
        const name = String(form.get('name') ?? '').trim();
        const email = String(form.get('email') ?? '').trim();
        const message = String(form.get('message') ?? '').trim();
        const reason = String(form.get('reason') ?? 'general').trim();
        const budget = String(form.get('budget') ?? '').trim();
        const source = String(form.get('source') ?? 'contact').trim();
        const turnstileToken = String(form.get('cf-turnstile-response') ?? '').trim();

        const values = { name, email, message, reason, budget };

        if (!TURNSTILE_SECRET_KEY) {
            return fail(500, { error: 'contact.form.errors.turnstileMissing', values });
        }

        if (!name || !email || !message) {
            return fail(400, { error: 'contact.form.errors.required', values });
        }

        if (!emailRegex.test(email)) {
            return fail(400, { error: 'contact.form.errors.email', values });
        }

        if (!turnstileToken) {
            return fail(400, { error: 'contact.form.errors.turnstile', values });
        }

        const turnstileOk = await verifyTurnstile(turnstileToken, request);
        if (!turnstileOk) {
            return fail(400, { error: 'contact.form.errors.turnstile', values });
        }

        const result = await sendContactEmail({ name, email, message, source, reason, budget });
        if (!result.ok) {
            return fail(500, { error: result.error, values });
        }

        return { success: true };
    }
});
