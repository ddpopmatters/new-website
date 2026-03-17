import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscEdit } from 'react-icons/vsc'
import { imageBlock } from '../fragments'

export default defineType({
	name: 'pm.article',
	title: 'News article',
	type: 'document',
	icon: VscEdit,
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
			name: 'publishDate',
			type: 'date',
			group: 'content',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'author',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'categories',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'pm.newsCategory' }],
				}),
			],
			group: 'content',
		}),
		defineField({
			name: 'tags',
			type: 'array',
			of: [defineArrayMember({ type: 'string' })],
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
		defineField({
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }, imageBlock, { type: 'custom-html' }],
			group: 'content',
		}),
		defineField({
			name: 'relatedArticles',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'pm.article' }],
				}),
			],
			group: 'options',
			validation: (Rule) => Rule.max(3),
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
			subtitle: 'publishDate',
			media: 'featuredImage',
		},
		prepare: ({ title, subtitle, media }) => ({
			title: title || 'Untitled article',
			subtitle,
			media,
		}),
	},
	orderings: [
		{
			title: 'Publish date',
			name: 'publishDateDesc',
			by: [{ field: 'publishDate', direction: 'desc' }],
		},
	],
})
