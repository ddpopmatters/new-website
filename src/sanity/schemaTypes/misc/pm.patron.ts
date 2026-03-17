import { defineField, defineType } from 'sanity'
import { VscStarFull } from 'react-icons/vsc'

export default defineType({
	name: 'pm.patron',
	title: 'Patron',
	type: 'document',
	icon: VscStarFull,
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'patronType',
			type: 'string',
			options: {
				list: [
					{ title: 'Patron', value: 'patron' },
					{ title: 'Choice Ambassador', value: 'choiceAmbassador' },
				],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 2,
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
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'patronType',
			media: 'photo',
		},
	},
})
