import { type SchemaTypeDefinition } from 'sanity'

// documents
import site from './documents/site'
import page from './documents/page'
import globalModule from './documents/global-module'
import navigation from './documents/navigation'
import pmArticle from './documents/pm.article'
import pmCampaignPage from './documents/pm.campaignPage'
import pmIssuePage from './documents/pm.issuePage'
import pmLandingPage from './documents/pm.landingPage'
import pmNewsCategory from './documents/pm.newsCategory'
import pmProjectShowcase from './documents/pm.projectShowcase'
import pmResource from './documents/pm.resource'
import redirect from './documents/redirect'

// miscellaneous
import announcement from './misc/announcement'
import logo from './misc/logo'
import pmBoardMember from './misc/pm.boardMember'
import pmPatron from './misc/pm.patron'
import pmTeamMember from './misc/pm.teamMember'

// objects
import cta from './objects/cta'
import icon from './objects/icon'
import img from './objects/img'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'
import moduleOptions from './objects/module-options'

// modules
import accordionList from './modules/accordion-list'
import blogFrontpage from './modules/blog-frontpage'
import blogList from './modules/blog-list'
import blogPostContent from './modules/blog-post-content'
import breadcrumbs from './modules/breadcrumbs'
import callout from './modules/callout'
import cardList from './modules/card-list'
import creativeModule from './modules/creative'
import customHtml from './modules/custom-html'
import flagList from './modules/flag-list'
import hero from './modules/hero'
import heroSaas from './modules/hero.saas'
import heroSplit from './modules/hero.split'
import logoList from './modules/logo-list'
import personList from './modules/person-list'
import pricingList from './modules/pricing-list'
import richtextModule from './modules/richtext-module'
import scheduleModule from './modules/schedule-module'
import searchModule from './modules/search-module'
import statList from './modules/stat-list'
import stepList from './modules/step-list'
import tabbedContent from './modules/tabbed-content'
import testimonialFeatured from './modules/testimonial.featured'
import testimonialList from './modules/testimonial-list'

export const schemaTypes: SchemaTypeDefinition[] = [
	// documents
	site,
	page,
	globalModule,
	navigation,
	pmArticle,
	pmCampaignPage,
	pmIssuePage,
	pmLandingPage,
	pmNewsCategory,
	pmProjectShowcase,
	pmResource,

	// miscellaneous
	announcement,
	redirect,
	logo,
	pmBoardMember,
	pmPatron,
	pmTeamMember,

	// objects
	cta,
	icon,
	img,
	link,
	linkList,
	metadata,
	moduleOptions,

	// modules
	accordionList,
	blogFrontpage,
	blogList,
	blogPostContent,
	breadcrumbs,
	callout,
	cardList,
	creativeModule,
	customHtml,
	flagList,
	hero,
	heroSaas,
	heroSplit,
	logoList,
	personList,
	pricingList,
	richtextModule,
	scheduleModule,
	searchModule,
	statList,
	stepList,
	tabbedContent,
	testimonialFeatured,
	testimonialList,
]
