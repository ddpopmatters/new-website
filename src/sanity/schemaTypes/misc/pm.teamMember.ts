import { defineField, defineType } from 'sanity'
import { GoPerson } from 'react-icons/go'

export default defineType({
	name: 'pm.teamMember',
	title: 'Team member',
	type: 'document',
	icon: GoPerson,
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'role',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'directorate',
			type: 'string',
			options: {
				list: [
					'Advocacy & Influence',
					'Fundraising & Engagement',
					'Research & Learning',
					'Finance & Operations',
					'Leadership',
				],
			},
		}),
		defineField({
			name: 'bio',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'photo',
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
		}),
		defineField({
			name: 'order',
			type: 'number',
			description: 'Display order',
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'role',
			media: 'photo',
		},
	},
	orderings: [
		{
			title: 'Order',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
		{
			title: 'Name',
			name: 'nameAsc',
			by: [{ field: 'name', direction: 'asc' }],
		},
	],
})
