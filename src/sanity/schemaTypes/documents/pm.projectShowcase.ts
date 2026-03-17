import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscGlobe } from 'react-icons/vsc'
import { imageBlock } from '../fragments'

export default defineType({
	name: 'pm.projectShowcase',
	title: 'Project showcase',
	type: 'document',
	icon: VscGlobe,
	groups: [{ name: 'content', default: true }, { name: 'metadata' }],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			group: 'content',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'metadata',
		}),
		defineField({
			name: 'partnerOrganisation',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'country',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'region',
			type: 'string',
			group: 'content',
			options: {
				list: [
					'Sub-Saharan Africa',
					'South Asia',
					'Latin America',
					'Middle East & North Africa',
					'Global',
				],
			},
		}),
		defineField({
			name: 'years',
			type: 'string',
			description: 'e.g. 2022–2024',
			group: 'content',
		}),
		defineField({
			name: 'summary',
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
			name: 'stats',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					name: 'projectStat',
					fields: [
						defineField({
							name: 'value',
							type: 'string',
						}),
						defineField({
							name: 'label',
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
			name: 'featuredImage',
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
	],
	preview: {
		select: {
			title: 'title',
			country: 'country',
			years: 'years',
			media: 'featuredImage',
		},
		prepare: ({ title, country, years, media }) => ({
			title: title || 'Untitled project showcase',
			subtitle: [country, years].filter(Boolean).join(' • '),
			media,
		}),
	},
})
