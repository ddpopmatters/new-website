import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscMegaphone } from 'react-icons/vsc'
import { imageBlock } from '../fragments'

export default defineType({
	name: 'pm.campaignPage',
	title: 'Campaign page',
	type: 'document',
	icon: VscMegaphone,
	groups: [
		{ name: 'content', default: true },
		{ name: 'options' },
		{ name: 'metadata' },
	],
	fields: [
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'metadata',
		}),
		defineField({
			name: 'status',
			type: 'string',
			group: 'options',
			initialValue: 'active',
			options: {
				list: [
					{ title: 'Active', value: 'active' },
					{ title: 'Completed', value: 'completed' },
					{ title: 'Archived', value: 'archived' },
				],
			},
		}),
		defineField({
			name: 'intro',
			type: 'text',
			rows: 3,
			group: 'content',
		}),
		defineField({
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }, imageBlock, { type: 'custom-html' }],
			group: 'content',
		}),
		defineField({
			name: 'heroImage',
			type: 'image',
			options: {
				hotspot: true,
				metadata: ['lqip'],
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
			],
			group: 'content',
		}),
		defineField({
			name: 'ctaPrimary',
			type: 'cta',
			group: 'options',
		}),
		defineField({
			name: 'ctaSecondary',
			type: 'cta',
			group: 'options',
		}),
		defineField({
			name: 'relatedResources',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'pm.resource' }],
				}),
			],
			group: 'options',
			validation: (Rule) => Rule.max(4),
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
			subtitle: 'status',
			media: 'heroImage',
		},
		prepare: ({ title, subtitle, media }) => ({
			title: title || 'Untitled campaign page',
			subtitle,
			media,
		}),
	},
})
