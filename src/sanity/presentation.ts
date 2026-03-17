'use client'

import { defineLocations, presentationTool } from 'sanity/presentation'
import { groq } from 'next-sanity'

export const presentation = presentationTool({
	name: 'editor',
	title: 'Editor',
	previewUrl: {
		previewMode: {
			enable: '/api/draft-mode/enable',
		},
	},
	resolve: {
		mainDocuments: [
			{
				route: '/',
				filter: groq`_type == 'page' && metadata.slug.current == 'index'`,
			},
			{
				route: '/:slug',
				filter: groq`_type == 'page' && metadata.slug.current == $slug`,
			},
			{
				route: '/news/:slug',
				filter: groq`_type == 'pm.article' && metadata.slug.current == $slug`,
			},
			{
				route: '/why-population-matters/:slug',
				filter: groq`_type == 'pm.issuePage' && metadata.slug.current == $slug`,
			},
			{
				route: '/campaigns/:slug',
				filter: groq`_type == 'pm.campaignPage' && metadata.slug.current == $slug`,
			},
			{
				route: '/resources/:slug',
				filter: groq`_type == 'pm.resource' && metadata.slug.current == $slug`,
			},
			{
				route: '/projects/:slug',
				filter: groq`_type == 'pm.projectShowcase' && metadata.slug.current == $slug`,
			},
		],
		locations: {
			site: defineLocations({
				message: 'This document is used on all pages',
				locations: [{ title: 'Home', href: '/' }],
			}),
			page: defineLocations({
				select: {
					title: 'title',
					metaTitle: 'metadata.title',
					slug: 'metadata.slug.current',
				},
				resolve: (doc) => ({
					locations: [
						{
							title: doc?.title || doc?.metaTitle || 'Untitled',
							href: doc?.slug
								? doc.slug === 'index'
									? '/'
									: `/${doc.slug}`
								: '/',
						},
					],
				}),
			}),
			'pm.article': defineLocations({
				select: {
					title: 'title',
					slug: 'metadata.slug.current',
				},
				resolve: (doc) => ({
					locations: [
						{
							title: doc?.title || 'Untitled',
							href: doc?.slug ? `/news/${doc.slug}` : '/news',
						},
					],
				}),
			}),
			'pm.issuePage': defineLocations({
				select: {
					title: 'title',
					slug: 'metadata.slug.current',
				},
				resolve: (doc) => ({
					locations: [
						{
							title: doc?.title || 'Untitled',
							href: doc?.slug
								? `/why-population-matters/${doc.slug}`
								: '/why-population-matters',
						},
					],
				}),
			}),
			'pm.campaignPage': defineLocations({
				select: {
					title: 'title',
					slug: 'metadata.slug.current',
				},
				resolve: (doc) => ({
					locations: [
						{
							title: doc?.title || 'Untitled',
							href: doc?.slug ? `/campaigns/${doc.slug}` : '/campaigns',
						},
					],
				}),
			}),
			'pm.resource': defineLocations({
				select: {
					title: 'title',
					slug: 'metadata.slug.current',
				},
				resolve: (doc) => ({
					locations: [
						{
							title: doc?.title || 'Untitled',
							href: doc?.slug ? `/resources/${doc.slug}` : '/resources',
						},
					],
				}),
			}),
			'pm.projectShowcase': defineLocations({
				select: {
					title: 'title',
					slug: 'metadata.slug.current',
				},
				resolve: (doc) => ({
					locations: [
						{
							title: doc?.title || 'Untitled',
							href: doc?.slug ? `/projects/${doc.slug}` : '/projects',
						},
					],
				}),
			}),
			'pm.landingPage': defineLocations({
				select: {
					title: 'title',
					slug: 'metadata.slug.current',
				},
				resolve: (doc) => ({
					locations: [
						{
							title: doc?.title || 'Untitled',
							href: doc?.slug ? `/${doc.slug}` : '/',
						},
					],
				}),
			}),
			'pm.teamMember': defineLocations({
				message: 'Team members appear on the About › Team page',
				locations: [{ title: 'About: Team', href: '/about/team' }],
			}),
			'pm.boardMember': defineLocations({
				message: 'Board members appear on the About › Governance page',
				locations: [{ title: 'About: Governance', href: '/about/governance' }],
			}),
			'pm.patron': defineLocations({
				message: 'Patrons appear on the About › Patrons page',
				locations: [{ title: 'About: Patrons', href: '/about/patrons' }],
			}),
		},
	},
})
