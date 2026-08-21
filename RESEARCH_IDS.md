# Research Identifier Registry

**Repository role:** Canonical registry for stable IDs used across GitHub, Zotero, Obsidian, and future analyses.

IDs are never recycled. If a title changes, the ID stays the same.

## Source / paper IDs (`P####`)

| ID | Source | Canonical dossier |
|---|---|---|
| P0001 | Reiter, Welsh & Vaughan — 1976 | `papers/1976-reiter-welsh-vaughan.md` |
| P0002 | Champney et al. — 1985 | `papers/1985-champney.md` |
| P0003 | Vaughan, Joshi & Reiter — 1986 | `papers/1986-vaughan-propranolol.md` |
| P0004 | Acharya et al. — 2000 — SPACRCAN / IMPG2 | `papers/2000-acharya-spacrcan.md` |
| P0005 | Hartley et al. — 2015 — GSE63309 | `papers/2015-hartley-neurotranscriptomics.md` |
| P0006 | Ibañez Rodriguez et al. — 2018 | `papers/2018-ibanez-microglia-scgx.md` |
| P0007 | Zarb et al. — 2021 | `papers/2021-zarb-trem2.md` |
| P0008 | Bukreeva et al. — 2023 | `papers/2023-bukreeva.md` |
| P0009 | Liu et al. — 2024 — RS1 / Retinoschisin | `papers/2024-liu-rs1.md` |

Next source ID: **P0010**

## Claim IDs (`C###`)

Existing claim IDs are defined in `CLAIM_LEDGER.md`.

- C001–C014 are currently assigned.
- Next claim ID: **C015**.

## Hypothesis IDs (`H###`)

| ID | Hypothesis | File |
|---|---|---|
| H001 | Adult SCGx regression of established concretions | `hypotheses/H001-scgx-regression.md` |
| H002 | RS1 mineral organization / maintenance | `hypotheses/H002-rs1-scaffold.md` |
| H003 | IMPG2/SPACRCAN human acervulus scaffold | `hypotheses/H003-impg2-scaffold.md` |
| H004 | Microglial clearance of mineral fragments | `hypotheses/H004-microglial-clearance.md` |

Next hypothesis ID: **H005**.

## Experiment IDs (`E###`)

| ID | Experiment | File |
|---|---|---|
| E001 | Modern longitudinal Champney replication | `experiments/E001-modern-champney-replication.md` |
| E002 | Human IMPG2/SPACRCAN acervulus localization | `experiments/E002-impg2-acervuli-localization.md` |
| E003 | RS1 response after adult SCGx | `experiments/E003-rs1-after-scgx.md` |

Next experiment ID: **E004**.

## Audit IDs (`A###`)

Existing citation corrections in `audits/citation-corrections.md`:

- A001 — adult SCGx regression attribution
- A002 — SCGx does not by itself prove chemical dissolution
- A003 — whole-acervulus microglial engulfment is not demonstrated

Next audit ID: **A004**.

## Research-question IDs (`RQ###`)

| ID | GitHub issue | Question |
|---|---:|---|
| RQ001 | #1 | Reconstruct days 0–14 after adult SCGx |
| RQ002 | #2 | Does SCG/NE signaling regulate RS1? |
| RQ003 | #3 | Reanalyze GSE63309 for calcification/ECM candidates |
| RQ004 | #4 | Find direct IMPG2/SPACRCAN localization in human acervuli |
| RQ005 | #5 | Complete Champney forward-citation and replication ledger |
| RQ006 | #6 | Find pineal microglia containing Ca/P or HAp material |
| RQ007 | #7 | Obtain and fully reconstruct Champney 1985 |
| RQ008 | #8 | Design a modern longitudinal Champney replication |
| RQ009 | #10 | Backfill and audit the pre-Champney bibliography |
| RQ010 | #11 | Set up Zotero and Obsidian around canonical IDs |
| RQ011 | #12 | Create GitHub Project research board |
| RQ012 | #13 | Adopt stable IDs across the stack |
| RQ013 | #14 | Build the Obsidian knowledge graph in-repo |
| RQ014 | #15 | Standardize Zotero/GitHub paper notes |
| RQ015 | #16 | Establish raw/processed/derived data rules |
| RQ016 | #17 | Define the canonical research workflow |
| RQ017 | #18 | Link paper IDs into existing paper dossiers |
| RQ018 | #19 | Create a Champney end-to-end worked example |
| RQ019 | #20 | Define Obsidian linking conventions |

Next research-question ID: **RQ020**.

## Cross-platform use

### Zotero
Put the paper ID at the top of the item's main research note, for example:

`Research ID: P0002`

Use tags for species, intervention, evidence role, and replication status—not as a replacement for the ID.

### Obsidian
The cloned repository can be opened directly as a vault. Concept notes should reference canonical IDs and repository files.

### GitHub
GitHub is the authoritative ID registry. Renaming an issue or document never changes its ID.
