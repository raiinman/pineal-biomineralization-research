# Zotero Setup

> **Repository role:** Defines how the external paper/PDF library mirrors the GitHub evidence structure without turning the repository into a document dump.

Zotero is the **source library**. GitHub is the **scientific reasoning ledger**. The cloned GitHub repository can also be opened directly as the Obsidian vault.

## Collection

**Pineal Biomineralization**

Suggested subcollections:
1. Human Morphology
2. Mineral Chemistry
3. Sympathetic Denervation
4. Calcification Formation
5. Calcification Regression
6. Extracellular Matrix
7. IMPG2 / SPACRCAN
8. RS1 / Retinoschisin
9. Microglia
10. Calcium-Phosphate Transport
11. Historical Literature
12. Reviews
13. Methods

A paper may appear in multiple collections without creating duplicate records.

## Permanent paper IDs

Every paper integrated into the project receives a `P####` identifier from `RESEARCH_IDS.md`.

Example:

**Champney et al. 1985 = P0002**

At the top of the Zotero research note for that item, write:

`Research ID: P0002`

Do not invent a new ID independently in Zotero. GitHub's `RESEARCH_IDS.md` is canonical.

## Standard Zotero research note

For every source, the Zotero note should minimally contain:

- `Research ID: P####`
- why the paper entered the project
- important PDF annotations / quotations within copyright limits
- questions generated while reading
- any page numbers worth returning to

The full structured forensic reconstruction belongs in the corresponding GitHub `papers/` dossier using `templates/PAPER_NOTE_TEMPLATE.md`.

## Suggested tags

### Evidence role
`primary-source`, `review`, `dataset`, `historical-source`, `imported-mechanism`

### Species
`human`, `gerbil`, `rat`, `mouse`, `other-species`

### Mechanism
`SCGx`, `adrenergic`, `acervuli`, `hydroxyapatite`, `organic-matrix`, `RS1`, `IMPG2`, `microglia`, `phosphate`, `fluoride`

### Research state
`formation`, `maintenance`, `regression`, `replicated`, `unreplicated`, `needs-audit`, `high-value`

Tags help search. They never replace the permanent `P####` ID.

## Browser workflow

1. Open the primary paper or authoritative database record.
2. Save it with the Zotero browser connector.
3. Verify title, authors, journal, year, DOI and attached PDF.
4. Check `RESEARCH_IDS.md` and assign the next unused `P####` only when the paper is being integrated into the project.
5. Add `Research ID: P####` to the Zotero research note.
6. Create/update the matching GitHub paper dossier.

## Rule

**PDFs, bibliographic metadata and PDF annotations live in Zotero.**  
**Claims, interpretation boundaries, corrections, hypotheses and research decisions live in GitHub.**

Do not store a second independent copy of the scientific conclusions inside Zotero notes.
