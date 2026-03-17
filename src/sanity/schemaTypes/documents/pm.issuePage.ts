import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscGraph } from 'react-icons/vsc'
import { imageBlock } from '../fragments'

export default defineType({
	name: 'pm.issuePage',
	title: 'Issue page',
	type: 'document',
	icon: VscGraph,
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
			name: 'intro',
			type: 'text',
			rows: 4,
			group: 'content',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }, imageBlock, { type: 'custom-html' }],
			group: 'content',
		}),
		defineField({
			name: 'keyStats',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					name: 'keyStat',
					fields: [
						defineField({
							name: 'value',
							type: 'string',
						}),
						defineField({
							name: 'label',
							type: 'string',
						}),
						defineField({
							name: 'source',
							type: 'string',
						}),
					],
					preview: {
						select: {
							title: 'value',
							subtitle: 'label',
						},
					},
				}),
			],
			group: 'content',
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
			validation: (Rule) => Rule.max(6),
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
		},
		prepare: ({ title }) => ({
			title: title || 'Untitled issue page',
		}),
	},
})
