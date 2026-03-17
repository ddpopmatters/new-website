import { defineField, defineType } from 'sanity'
import { VscOrganization } from 'react-icons/vsc'

export default defineType({
	name: 'pm.boardMember',
	title: 'Board member',
	type: 'document',
	icon: VscOrganization,
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'role',
			type: 'string',
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
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'role',
			media: 'photo',
		},
	},
})
