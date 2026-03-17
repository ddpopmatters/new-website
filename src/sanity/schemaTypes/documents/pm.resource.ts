import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscRepo } from 'react-icons/vsc'

const resourceTypeOptions = [
	{ title: 'Report', value: 'report' },
	{ title: 'Magazine', value: 'magazine' },
	{ title: 'Briefing', value: 'briefing' },
	{ title: 'Policy submission', value: 'policySubmission' },
	{ title: 'Annual report', value: 'annualReport' },
	{ title: 'Other', value: 'other' },
]

export default defineType({
	name: 'pm.resource',
	title: 'Resource',
	type: 'document',
	icon: VscRepo,
	groups: [
		{ name: 'content', default: true },
		{ name: 'options' },
		{ name: 'metadata' },
	],
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
			name: 'resourceType',
			type: 'string',
			group: 'content',
			options: {
				list: resourceTypeOptions,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'year',
			type: 'number',
			group: 'content',
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 3,
			group: 'content',
		}),
		defineField({
			name: 'coverImage',
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
			name: 'file',
			type: 'file',
			group: 'content',
		}),
		defineField({
			name: 'externalUrl',
			type: 'url',
			group: 'content',
		}),
		defineField({
			name: 'relatedTopics',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'pm.issuePage' }],
				}),
			],
			group: 'options',
		}),
	],
	preview: {
		select: {
			title: 'title',
			resourceType: 'resourceType',
			year: 'year',
			media: 'coverImage',
		},
		prepare: ({ title, resourceType, year, media }) => ({
			title: title || 'Untitled resource',
			subtitle: [resourceType, year].filter(Boolean).join(' • '),
			media,
		}),
	},
	orderings: [
		{
			title: 'Year',
			name: 'yearDesc',
			by: [{ field: 'year', direction: 'desc' }],
		},
		{
			title: 'Title',
			name: 'titleAsc',
			by: [{ field: 'title', direction: 'asc' }],
		},
	],
})
