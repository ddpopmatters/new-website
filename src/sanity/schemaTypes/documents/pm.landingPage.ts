import { defineField, defineType } from 'sanity'
import { VscBrowser } from 'react-icons/vsc'
import { imageBlock } from '../fragments'

export default defineType({
	name: 'pm.landingPage',
	title: 'Landing page',
	type: 'document',
	icon: VscBrowser,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
		defineField({
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }, imageBlock, { type: 'custom-html' }],
		}),
		defineField({
			name: 'ctaPrimary',
			type: 'cta',
		}),
		defineField({
			name: 'expiresAt',
			type: 'datetime',
			description: 'Optional — leave blank for evergreen pages',
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
		},
		prepare: ({ title }) => ({
			title: title || 'Untitled landing page',
		}),
	},
})
