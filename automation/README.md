# Zotero Automation

> **Repository role:** Defines the repeatable Zotero-side organization used to keep the source library aligned with the repository evidence system.

## Current organizer

`zotero-organize-core-library.js`

### What it does

- creates/reuses the `Pineal Biomineralization` collection;
- creates/reuses all 13 standard subcollections;
- scans the local Zotero library for the current core papers;
- recognizes papers by DOI, with title fallback;
- applies permanent `P####` research-ID tags;
- applies topic/species/status tags;
- files each recognized paper into the correct research collections;
- is safe to rerun after new papers are added.

The organizer is **idempotent by design**: rerunning it should reuse existing collections and membership rather than creating duplicates.

## Validated setup state — 2026-08-21

The organizer was run successfully in Zotero Desktop and confirmed:

- root collection created/reused: `Pineal Biomineralization`;
- standard subcollections ready: **13**;
- core papers classified during the first validated run: **8/9**;
- the missing record was `P0006` — Ibañez Rodriguez et al. 2018.

The missing-record identifier was then corrected in the repository to the verified DOI:

**P0006 — DOI `10.1002/cne.24505`**  
PMID `30246867`  
PMCID `PMC6196128`

Once that paper is added to Zotero and the organizer is rerun, the expected result is **9/9 core papers classified**.

## Bulk import of the current core library

Use Zotero's **Add Item by Identifier** tool and paste the identifiers from:

`core-identifiers.txt`

The list now uses the DOI for P0006 rather than relying on the PMID lookup.

## How to run the organizer

1. Open Zotero Desktop.
2. Go to **Tools → Developer → Run JavaScript**.
3. Check **Run as async function**.
4. Open `automation/zotero-organize-core-library.js` and copy the **actual JavaScript contents**.
5. Paste the code into Zotero's JavaScript runner.
6. Click **Run** or press **Ctrl+R**.
7. Read the result pane.

The result reports:
- collection readiness;
- number of core papers classified;
- exact `P####` records that were found;
- exact missing records and their DOI identifiers.

### Important

Do **not** type a repository path such as:

`automation/zotero-organize-core-library.js`

into the JavaScript runner. The runner executes JavaScript code; it does not resolve repository filenames.

## Adding missing or future papers

For an authoritative new record:

1. add the publication through Zotero's identifier lookup or browser Connector;
2. verify title/authors/year/DOI;
3. assign the next unused `P####` from `SOURCE_INDEX.md`;
4. classify it according to `AGENTS.md` and `ZOTERO_SETUP.md`;
5. rerun or extend the organizer when appropriate;
6. create/update the GitHub paper dossier if it materially enters the evidence chain.

## Why this design

The organizer does **not** fabricate bibliographic records from incomplete project notes. Zotero remains responsible for retrieving authoritative metadata through its identifier lookup/Connector workflow. The automation handles repetitive research-specific organization only.

Scientific interpretation remains deliberate. Automation may organize metadata; it must not decide that a paper proves a mechanism merely because its title or tags resemble a hypothesis.

## Future automation

The next automation layer may:

- inspect newly added Zotero items;
- propose the next unused `P####` ID;
- write/update a machine-readable source manifest;
- flag papers that need forensic reconstruction;
- export/sync bibliography metadata to the repository;
- compare Zotero records with `SOURCE_INDEX.md` for drift.

These operations should use Zotero's supported local API or a small plugin/helper. Never modify Zotero's SQLite database directly.
