import { Resend } from 'resend';
import { API_KEY_RESEND } from '$env/static/private';
import { socialInfo } from '../../data/social-info';

interface ContactPayload {
	name: string;
	email: string;
	message: string;
	source: string;
	reason: string;
	budget?: string;
}

const resend = new Resend(API_KEY_RESEND);

function getTemplateId(reason: string): string {
	switch (reason) {
		case 'freelance':
			return 'freelancer-project';
		case 'general':
		default:
			return 'common';
	}
}
export const sendContactEmail = async ({
	name,
	email,
	message,
	source,
	reason,
	budget
}: ContactPayload) => {
	if (!API_KEY_RESEND) {
		return { ok: false, error: 'contact.form.errors.missingKey' } as const;
	}

	try {
		await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: socialInfo.email,
			subject: `Portfólio - Contato de ${name} - ${reason.toUpperCase()}`,
			replyTo: email,
			template: {
				id: getTemplateId(reason),
				variables: {
					name,
					email,
					message,
					source,
					reason,
					budget: budget ?? 'N/A'
				}
			}
		});
		return { ok: true } as const;
	} catch {
		return { ok: false, error: 'contact.form.errors.generic' } as const;
	}
};
