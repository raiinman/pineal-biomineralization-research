# Zotero Source-Library Setup

> **Repository role:** Defines how the paper/PDF library mirrors the GitHub evidence structure without turning the repository into a document dump.

Zotero is the **source library**. GitHub is the **scientific reasoning ledger**. Obsidian may later be used as an interface over the repository itself, but it is not required for Zotero automation.

## Current state

Zotero Desktop is installed and the project organizer has been run successfully.

Validated on 2026-08-21:
- root collection: `Pineal Biomineralization`;
- 13 standard subcollections created/reused;
- 8/9 current core papers classified on the first run;
- `P0006` was the only missing source and its verified DOI is now recorded as `10.1002/cne.24505`.

See `automation/README.md` for the exact organizer workflow.

## Canonical collection tree

**Pineal Biomineralization**

1. `01 Human Morphology`
2. `02 Mineral Chemistry`
3. `03 Sympathetic Denervation`
4. `04 Calcification Formation`
5. `05 Calcification Regression`
6. `06 Extracellular Matrix`
7. `07 IMPG2 - SPACRCAN`
8. `08 RS1 - Retinoschisin`
9. `09 Microglia`
10. `10 Calcium-Phosphate Transport`
11. `11 Historical Literature`
12. `12 Reviews`
13. `13 Methods`

A paper may appear in multiple collections without creating duplicate records.

## Permanent paper IDs

Every paper integrated into the canonical evidence chain receives a `P####` identifier from `SOURCE_INDEX.md` / `RESEARCH_IDS.md`.

Example:

**Champney et al. 1985 = P0002**

The `P####` ID should be present as a Zotero tag. A short Zotero note may also begin with:

`Research ID: P0002`

Do not invent a new ID independently in Zotero. GitHub is canonical.

## Standard Zotero research note

For every source, a Zotero note may contain:

- `Research ID: P####`;
- why the paper entered the project;
- important PDF annotations / page numbers;
- questions generated while reading;
- reminders about methods/figures worth revisiting.

The full structured forensic reconstruction belongs in the matching GitHub `papers/` dossier using `templates/PAPER_NOTE_TEMPLATE.md`.

## Standard tags

### Evidence role
`primary-source`, `review`, `dataset`, `historical-source`, `imported-mechanism`

### Species
`human`, `gerbil`, `rat`, `mouse`, `other-species`

### Mechanism
`SCGx`, `adrenergic`, `acervuli`, `hydroxyapatite`, `organic-matrix`, `RS1`, `IMPG2`, `microglia`, `phosphate`, `fluoride`

### Research state
`formation`, `maintenance`, `regression`, `replicated`, `unreplicated`, `under-replicated`, `needs-audit`, `high-value`

Tags help search. They never replace the permanent `P####` ID.

## Current automation

`automation/zotero-organize-core-library.js`

The organizer:
- creates/reuses the collection tree;
- recognizes the current core papers by DOI/title;
- applies `P####` tags;
- applies species/mechanism/status tags;
- files papers into relevant collections;
- is safe to rerun.

The bulk import identifiers are stored in:

`automation/core-identifiers.txt`

## Manual import workflow

1. Open Zotero's **Add Item by Identifier** tool or use the browser Connector.
2. Add the authoritative source record.
3. Verify title, authors, journal, year, DOI and attached PDF.
4. Check `SOURCE_INDEX.md` and assign the next unused `P####` only when the paper is being integrated into the project.
5. Run or extend the organizer as appropriate.
6. Create/update the matching GitHub paper dossier.

## Automation boundary

Automation may safely handle:
- bibliographic identifiers;
- collection membership;
- research IDs;
- descriptive tags;
- missing-record reporting.

Automation must **not** decide by itself that a publication proves a scientific mechanism. Evidence interpretation follows `AGENTS.md` and must distinguish direct observations from inference.

## Rule

**PDFs, bibliographic metadata and PDF annotations live in Zotero.**  
**Claims, interpretation boundaries, corrections, hypotheses and research decisions live in GitHub.**

Do not store a second independent canonical version of the scientific conclusions inside Zotero notes.
