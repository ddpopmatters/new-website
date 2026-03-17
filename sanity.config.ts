'use client'

import pkg from './package.json'
import { defineConfig } from 'sanity'
import { projectId, dataset, apiVersion } from '@/sanity/lib/env'
import { structure } from './src/sanity/structure'
import { presentation } from './src/sanity/presentation'
import { icon } from '@/sanity/ui/Icon'
import { InfoWidget } from '@/sanity/ui/InfoWidget'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { supportedLanguages } from '@/lib/i18n'
import { documentInternationalization } from '@sanity/document-internationalization'
import { schemaTypes } from './src/sanity/schemaTypes'
import resolveUrl from '@/lib/resolveUrl'

const singletonTypes = ['site']

export default defineConfig({
	title: 'Population Matters',
	icon,
	projectId,
	dataset,
	basePath: '/admin',

	plugins: [
		structure,
		presentation,
		dashboardTool({
			name: 'deployment',
			title: 'Deployment',
			widgets: [vercelWidget()],
		}),
		dashboardTool({
			name: 'info',
			title: 'Info',
			widgets: [
				projectInfoWidget(),
				projectUsersWidget(),
				InfoWidget({ version: pkg.version }),
			],
		}),
		visionTool({ defaultApiVersion: apiVersion }),
		codeInput(),
		documentInternationalization({
			supportedLanguages,
			schemaTypes: ['page'],
		}),
	],

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},
	document: {
		productionUrl: async (prev, { document }) => {
			const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
			const slug = (document as any)?.metadata?.slug?.current
			if (document?._type === 'page') {
				return resolveUrl(document as Sanity.PageBase, { base: true })
			}
			if (document?._type === 'pm.article' && slug) return `${base}/news/${slug}`
			if (document?._type === 'pm.issuePage' && slug) return `${base}/why-population-matters/${slug}`
			if (document?._type === 'pm.campaignPage' && slug) return `${base}/campaigns/${slug}`
			if (document?._type === 'pm.resource' && slug) return `${base}/resources/${slug}`
			if (document?._type === 'pm.projectShowcase' && slug) return `${base}/projects/${slug}`
			if (document?._type === 'pm.landingPage' && slug) return `${base}/${slug}`
			return prev
		},

		actions: (input, { schemaType }) => {
			if (singletonTypes.includes(schemaType)) {
				return input.filter(
					({ action }) =>
						action && ['publish', 'discardChanges', 'restore'].includes(action),
				)
			}

			return input
		},
	},
})
