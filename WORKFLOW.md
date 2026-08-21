# Canonical Research Workflow

**Repository role:** Defines how evidence moves from discovery into the durable scientific record.

## One source of truth per layer

- **Zotero:** source file, bibliographic metadata, PDF annotations
- **Repository / Obsidian vault:** synthesis, claims, hypotheses, experiments, audits, data/code
- **GitHub Issues:** active questions and work queue
- **GitHub Project:** visual status view over Issues only

Do not maintain independent copies of the same scientific record in multiple apps.

## Workflow

### 1. Discover a source

A search result, review citation, archive catalog entry, dataset, or recommendation identifies a potentially relevant source.

At this stage it is **not yet evidence integrated into the project**.

### 2. Acquire the best available primary record

Prefer, in order:
1. full primary paper
2. accepted manuscript / repository copy
3. authoritative abstract/index record when full text cannot be obtained
4. review only as a map to primary literature

A claim should not be promoted from a search-result snippet when the primary paper can reasonably be obtained.

### 3. Save the source in Zotero

Capture:
- title
- authors
- journal
- year
- DOI / PMID / stable identifier
- PDF when legally available
- annotations

Assign the next permanent `P####` ID from `RESEARCH_IDS.md`.

### 4. Create or update the GitHub paper dossier

Use `templates/PAPER_NOTE_TEMPLATE.md`.

Required distinction:
- what was directly measured
- what the authors inferred
- what this project infers
- what the paper does **not** establish
- replication status

### 5. Link the source into synthesis notes

Use `knowledge/` for concept-level synthesis.

Synthesis notes may be exploratory, but factual statements promoted into the scientific record should resolve to:
- a `C###` claim
- one or more `P####` sources

### 6. Update atomic claims

If the paper materially changes a factual proposition, update `CLAIM_LEDGER.md`.

A claim record should state:
- evidence status
- species/tissue boundary
- best primary evidence
- replication status
- direct observation vs inference

### 7. Update hypotheses

A source may:
- strengthen a hypothesis
- weaken it
- falsify a component
- create a competing mechanism

Update the corresponding `H###` file rather than silently changing the narrative.

### 8. Update decisive experiments

If uncertainty can be resolved experimentally, link or create an `E###` design.

The experiment should state what result would:
- support the hypothesis
- weaken it
- distinguish competing mechanisms

### 9. Update the active question

GitHub Issues carry `RQ###` IDs.

When an investigation is complete:
- integrate the result into the permanent files
- record remaining uncertainty
- close the Issue or replace it with a narrower next question

### 10. Preserve corrections

Citation drift, misattribution, and overstatement go into `audits/` with `A###` IDs.

Do not erase an earlier error from history without documenting the correction.

---

# Worked example — P0002 Champney 1985

## Source
`P0002` — Champney et al. 1985.

## Paper dossier
`papers/1985-champney.md`

## Atomic claim
`C003` — adult bilateral SCGx is followed by drastic loss of established gerbil pineal concretions after 12 weeks.

## Important non-claim
The paper does **not** directly prove chemical hydroxyapatite dissolution.

That boundary is recorded under `C005` and audit `A002`.

## Hypothesis
`H001` — adult SCGx pushes an established acervulus population into net regression through one or more unresolved mechanisms.

## Decisive experiment
`E001` — modern longitudinal Champney replication.

## Active questions
- `RQ001` — reconstruct days 0–14 after adult SCGx
- `RQ005` — complete citation/replication ledger
- `RQ007` — acquire and fully reconstruct the four-page primary paper
- `RQ008` — design longitudinal replication

This chain is the model for future evidence integration:

**PAPER → CLAIM → HYPOTHESIS → EXPERIMENT → NEXT QUESTION**

---

# Data and code rules

For future transcriptomic and quantitative work:

- `data/raw/` — immutable upstream files or retrieval manifests
- `data/processed/` — reproducibly transformed data
- `data/derived/` — final tables / outputs
- `scripts/` — code that produces processed or derived results

Never manually overwrite raw data.

When upstream datasets are large and stably hosted elsewhere, store accession numbers, retrieval instructions, checksums, and scripts rather than duplicating huge files in Git.
