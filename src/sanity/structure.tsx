import { structureTool } from 'sanity/structure'
import { singleton, group } from './lib/builders'
import { VscFiles, VscServerProcess } from 'react-icons/vsc'

export const structure = structureTool({
	structure: (S) =>
		S.list()
			.title('Population Matters')
			.items([
				singleton(S, 'site', 'Site settings').icon(VscServerProcess),
				S.divider(),

				// ── News & Articles ────────────────────────────────────
				group(S, 'News & Articles', [
					S.documentTypeListItem('pm.article').title('Articles'),
					S.documentTypeListItem('pm.newsCategory').title('Categories'),
				]),

				// ── Content ────────────────────────────────────────────
				group(S, 'Content', [
					S.documentTypeListItem('pm.issuePage').title('Why Population Matters'),
					S.documentTypeListItem('pm.campaignPage').title('Campaigns'),
					S.documentTypeListItem('pm.resource').title('Resources'),
					S.documentTypeListItem('pm.projectShowcase').title('Projects'),
					S.documentTypeListItem('pm.landingPage').title('Landing pages'),
				]),
				S.divider(),

				// ── People ─────────────────────────────────────────────
				group(S, 'People', [
					S.documentTypeListItem('pm.teamMember').title('Team'),
					S.documentTypeListItem('pm.boardMember').title('Board'),
					S.documentTypeListItem('pm.patron').title('Patrons & Ambassadors'),
				]),
				S.divider(),

				// ── Pages & Layout ─────────────────────────────────────
				S.documentTypeListItem('page').title('Pages').icon(VscFiles),
				S.documentTypeListItem('global-module').title('Global modules'),
				S.divider(),

				// ── Site config ────────────────────────────────────────
				S.documentTypeListItem('navigation'),
				S.documentTypeListItem('redirect').title('Redirects'),
				S.documentTypeListItem('announcement').title('Announcements'),
			]),
})
