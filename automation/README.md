# Zotero Automation

This folder contains automation for keeping the Zotero source library aligned with the GitHub research ledger.

## Current script

`zotero-bootstrap.js`

### What it does

- creates/reuses the `Pineal Biomineralization` collection
- creates/reuses all 13 standard subcollections
- scans the local Zotero library for the current core papers
- recognizes papers by DOI or title fallback
- applies permanent `P####` research-ID tags
- applies topic/species/status tags
- files each recognized paper into the correct research collections
- is safe to rerun after new papers are added

### How to run it

1. Open Zotero Desktop.
2. Go to **Tools → Developer → Run JavaScript**.
3. Open `automation/zotero-bootstrap.js` from this repository and copy the code into Zotero's JavaScript runner.
4. Click **Run** or press **Ctrl+R**.
5. Read the result pane. It reports which core papers were classified and which are still missing from the Zotero library.

### Adding missing papers

Use Zotero's **Add Item by Identifier** tool or the Zotero browser Connector. After adding papers, rerun `zotero-bootstrap.js`; the script will classify and tag them automatically.

## Why this design

The script does not fabricate bibliographic records from incomplete project notes. Zotero remains responsible for retrieving authoritative metadata through its identifier lookup/Connector workflow. The automation then handles the repetitive research-specific organization.

## Future automation

Planned next layer:

- monitor newly added Zotero items
- assign the next unused `P####` ID
- write/update a machine-readable source manifest
- flag papers that need forensic reconstruction
- export/sync bibliography metadata to the repository

Those later steps should use Zotero's local API or a small Zotero plugin rather than modifying Zotero's SQLite database directly.
