/*
 * Pineal Biomineralization Research — Zotero core-library organizer
 *
 * Run inside Zotero Desktop:
 * Tools → Developer → Run JavaScript
 * Check "Run as async function", paste this file, then Run (Ctrl+R).
 *
 * Safe to re-run: existing collections are reused and tags/collection membership
 * are added only when needed.
 */

const libraryID = Zotero.Libraries.userLibraryID;
const rootName = 'Pineal Biomineralization';

const subcollections = [
	'01 Human Morphology',
	'02 Mineral Chemistry',
	'03 Sympathetic Denervation',
	'04 Calcification Formation',
	'05 Calcification Regression',
	'06 Extracellular Matrix',
	'07 IMPG2 - SPACRCAN',
	'08 RS1 - Retinoschisin',
	'09 Microglia',
	'10 Calcium-Phosphate Transport',
	'11 Historical Literature',
	'12 Reviews',
	'13 Methods'
];

const papers = [
	{
		id: 'P0001',
		doi: '10.1002/aja.1001460405',
		titleContains: 'Age-related changes in the intact and sympathetically denervated gerbil pineal gland',
		collections: ['03 Sympathetic Denervation', '04 Calcification Formation'],
		tags: ['P0001', 'primary-source', 'gerbil', 'SCGx', 'formation', 'acervuli']
	},
	{
		id: 'P0002',
		doi: '10.1002/ar.1092110414',
		titleContains: 'Superior cervical ganglionectomy results in the loss of pineal concretions',
		collections: ['03 Sympathetic Denervation', '05 Calcification Regression'],
		tags: ['P0002', 'primary-source', 'gerbil', 'SCGx', 'adult', 'regression', 'acervuli', 'under-replicated', 'high-value']
	},
	{
		id: 'P0003',
		doi: '10.3181/00379727-182-42354',
		titleContains: 'Daily propranolol administration reduces pineal concretion formation',
		collections: ['03 Sympathetic Denervation', '04 Calcification Formation'],
		tags: ['P0003', 'primary-source', 'gerbil', 'propranolol', 'adrenergic', 'formation', 'acervuli']
	},
	{
		id: 'P0004',
		doi: '10.1074/jbc.275.10.6945',
		titleContains: 'SPACRCAN',
		collections: ['06 Extracellular Matrix', '07 IMPG2 - SPACRCAN'],
		tags: ['P0004', 'primary-source', 'IMPG2', 'SPACRCAN', 'extracellular-matrix', 'pinealocyte']
	},
	{
		id: 'P0005',
		doi: '10.1371/journal.pone.0137548',
		titleContains: 'Neurotranscriptomics',
		collections: ['03 Sympathetic Denervation', '06 Extracellular Matrix', '13 Methods'],
		tags: ['P0005', 'primary-source', 'rat', 'SCGx', 'transcriptomics', 'GSE63309', 'norepinephrine', 'cAMP']
	},
	{
		id: 'P0006',
		doi: '10.1002/cne.24505',
		titleContains: 'Differential Response of Pineal Microglia to Surgical versus Pharmacological Stimuli',
		collections: ['03 Sympathetic Denervation', '09 Microglia'],
		tags: ['P0006', 'primary-source', 'rat', 'SCGx', 'microglia', 'Wallerian-degeneration']
	},
	{
		id: 'P0007',
		doi: '10.1126/sciadv.abc4898',
		titleContains: 'Microglia control small vessel calcification via TREM2',
		collections: ['09 Microglia', '10 Calcium-Phosphate Transport'],
		tags: ['P0007', 'primary-source', 'imported-mechanism', 'microglia', 'TREM2', 'calcification', 'hydroxyapatite']
	},
	{
		id: 'P0008',
		doi: '10.1002/mp.16080',
		titleContains: 'Micromorphology of pineal gland calcification',
		collections: ['01 Human Morphology', '05 Calcification Regression'],
		tags: ['P0008', 'primary-source', 'human', 'acervuli', 'regression', 'micro-CT', 'XPCT', 'high-value']
	},
	{
		id: 'P0009',
		doi: '10.1016/j.labinv.2024.102086',
		titleContains: 'Retinoschisin Is Required for Pineal Gland Calcification',
		collections: ['04 Calcification Formation', '08 RS1 - Retinoschisin'],
		tags: ['P0009', 'primary-source', 'mouse', 'rat', 'RS1', 'retinoschisin', 'mineral-architecture', 'high-value']
	}
];

function normalizeDOI(value) {
	return (value || '')
		.trim()
		.toLowerCase()
		.replace(/^https?:\/\/(dx\.)?doi\.org\//, '')
		.replace(/^doi:\s*/, '');
}

function allCollections() {
	return Zotero.Collections.getByLibrary(libraryID, true);
}

async function ensureCollection(name, parentID = null) {
	let existing = allCollections().find(c =>
		c.name === name && (c.parentID || null) === (parentID || null)
	);
	if (existing) return existing;

	let collection = new Zotero.Collection();
	collection.libraryID = libraryID;
	collection.name = name;
	if (parentID) collection.parentID = parentID;
	let id = await collection.saveTx();
	return Zotero.Collections.get(id);
}

async function findPaper(spec) {
	let search = new Zotero.Search();
	search.libraryID = libraryID;
	search.addCondition('itemType', 'isNot', 'attachment');
	search.addCondition('itemType', 'isNot', 'note');
	let ids = await search.search();
	let items = await Zotero.Items.getAsync(ids);

	let wantedDOI = normalizeDOI(spec.doi);
	for (let item of items) {
		if (!item || !item.isRegularItem()) continue;

		let itemDOI = '';
		try {
			itemDOI = normalizeDOI(item.getField('DOI'));
		}
		catch (e) {}
		if (wantedDOI && itemDOI === wantedDOI) return item;

		let title = '';
		try {
			title = item.getField('title') || '';
		}
		catch (e) {}
		if (spec.titleContains && title.toLowerCase().includes(spec.titleContains.toLowerCase())) {
			return item;
		}
	}
	return null;
}

let root = await ensureCollection(rootName);
let collectionMap = {};
for (let name of subcollections) {
	collectionMap[name] = await ensureCollection(name, root.id);
}

let found = [];
let missing = [];

for (let spec of papers) {
	let item = await findPaper(spec);
	if (!item) {
		missing.push(`${spec.id} (${spec.doi})`);
		continue;
	}

	for (let collectionName of spec.collections) {
		let collection = collectionMap[collectionName];
		if (collection && !item.inCollection(collection.id)) {
			item.addToCollection(collection.id);
		}
	}

	for (let tag of spec.tags) {
		item.addTag(tag, 0);
	}

	await item.saveTx();
	found.push(`${spec.id}: ${item.getField('title')}`);
}

return [
	`Zotero organization complete.`,
	`Created/reused root collection: ${rootName}`,
	`Subcollections ready: ${subcollections.length}`,
	`Core papers classified: ${found.length}/${papers.length}`,
	found.length ? `\nClassified:\n- ${found.join('\n- ')}` : '',
	missing.length ? `\nNot yet in Zotero (add by DOI/Connector, then rerun):\n- ${missing.join('\n- ')}` : '',
	!missing.length ? `\nAll current core papers are present and classified.` : ''
].filter(Boolean).join('\n');
