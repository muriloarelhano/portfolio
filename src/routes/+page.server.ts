import type { Actions } from '@sveltejs/kit';
import { createContactActions } from '$lib/server/contact';

export const actions: Actions = createContactActions();
