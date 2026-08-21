# Research Agent Operating Guidelines

> **Repository role:** Mandatory operating manual for any AI agent, research assistant, script, or collaborator contributing to this project.

## 1. Mission

This repository investigates pineal biomineralization scientifically and historically, with special attention to:

- the mineral and organic composition of pineal acervuli;
- formation and maturation of calcium-phosphate deposits;
- sympathetic/adrenergic regulation;
- intracellular Ca/P precursor handling;
- extracellular-matrix organization, including RS1 and IMPG2/SPACRCAN;
- structural destruction, fragmentation, clearance, and possible regression of established deposits;
- the distinction between materials chemistry and living-tissue biology.

The agent's job is **not to defend a preferred theory**. The job is to reconstruct the evidence chain, find neglected experiments, distinguish observation from inference, and keep the scientific record auditable.

---

# 2. Mandatory startup sequence

Before doing substantive research, read the following in order:

1. `README.md`
2. `AGENTS.md`
3. `WORKFLOW.md`
4. `RESEARCH_IDS.md`
5. `MASTER_MATRIX.md`
6. `CLAIM_LEDGER.md`
7. `OPEN_QUESTIONS.md`
8. the relevant open `RQ###` GitHub Issue
9. relevant files under `papers/`, `pathways/`, `hypotheses/`, `experiments/`, and `audits/`

If the task concerns the history of the project, also read:

- `PROJECT_HISTORY.md`
- `MODEL_EVOLUTION.md`
- `PROVENANCE.md`
- relevant files in `archive/`

Do not restart an investigation from memory when the repository already contains a durable record.

---

# 3. Source-of-truth architecture

Each layer has one job.

## Zotero — source library
Use Zotero for:
- bibliographic metadata;
- PDFs and attachments;
- PDF annotations;
- source-level notes;
- permanent `P####` tags.

Do **not** treat a Zotero note as the canonical claim ledger.

## GitHub repository — scientific record
Use the repository for:
- source registry;
- paper dossiers;
- claims;
- hypotheses;
- experiments;
- citation audits;
- synthesis;
- data/code;
- project history.

## GitHub Issues — active research queue
Issues carry `RQ###` IDs and represent unresolved work.

## Obsidian — optional interface
If used, open this repository itself as the vault. Do not maintain a second independent copy of the research.

---

# 4. Evidence hierarchy

Use these tiers consistently.

- **Tier 1 — Direct human primary evidence**
- **Tier 2 — Direct animal pineal evidence**
- **Tier 3 — General brain / biomineralization mechanism**
- **Tier 4 — Historical / textual / traditional evidence**
- **Tier 5 — Mechanistic inference**
- **Tier 6 — Search gap / not yet demonstrated**

The tier describes **what kind of evidence it is**, not whether the result is exciting.

Never silently promote Tier 3 biology into direct pineal evidence or Tier 2 animal evidence into human proof.

---

# 5. Primary-source rule

Whenever reasonably possible, follow a claim back to the primary paper.

Preferred acquisition order:

1. full primary article;
2. accepted manuscript or institutional repository copy;
3. authoritative abstract/database record;
4. review only as a map to the primary literature.

A search-result snippet is a lead, not integrated evidence.

When only an abstract is available, explicitly mark the dossier or claim as **ABSTRACT-ONLY** until the full paper is obtained.

When a review makes a claim, inspect the cited source before repeating the review's wording.

---

# 6. Atomic-claim discipline

Claims belong in `CLAIM_LEDGER.md` and use permanent `C###` IDs.

Each material claim should identify, when relevant:

- species;
- tissue/anatomical compartment;
- intervention/exposure;
- endpoint;
- time point;
- whether the observation is direct or inferred;
- primary source(s);
- replication status;
- known limitations or contradictions.

Avoid compound claims such as:

> “SCGx dissolves pineal hydroxyapatite through microglial clearance.”

That sentence contains several separate propositions, many of which remain unproven.

Prefer atomic forms such as:

- adult SCGx was followed by reduced concretion counts;
- SCGx activates pineal microglia during an early time window;
- brain microglia can phagocytose calcium-phosphate material outside the pineal;
- direct pineal mineral uptake after SCGx has not yet been demonstrated.

---

# 7. Formation and regression must never be conflated

This is a permanent project rule.

## Formation / prevention
Questions about:
- nucleation;
- crystal growth;
- precursor production;
- matrix organization;
- growth inhibitors;
- prevention of new deposits.

## Mature-deposit regression
Questions about:
- mineral loss from pre-existing deposits;
- dissolution;
- hollowing;
- cracking;
- fragmentation;
- clearance;
- disappearance of established concretions.

Evidence that prevents new mineral formation does **not** prove regression of mature deposits.

The Reiter 1976 / Champney 1985 distinction is the canonical example.

---

# 8. Materials chemistry and living biology are separate lanes

For every compound or intervention, classify its proposed job before interpreting it:

1. reduce an upstream formation driver;
2. block nucleation;
3. block crystal growth/maturation;
4. change mature-mineral thermodynamics;
5. expose/remodel the organic-mineral interface;
6. clear dissolved ions or mineral fragments;
7. delivery only.

Permanent cautions:

- **chelation ≠ pineal delivery**;
- **growth inhibition ≠ mature-mineral dissolution**;
- **gut binding ≠ removal from pineal tissue**;
- **fluoride accumulation ≠ fluoride causation**;
- **in-vitro mineral dissolution ≠ in-vivo human treatment**;
- **melatonin change ≠ mineral change**.

Update `COMPOUND_LEDGER.md` when a compound materially enters the research.

---

# 9. Hypothesis discipline

Hypotheses use permanent `H###` IDs.

A hypothesis file should contain:

- observation(s) motivating the hypothesis;
- proposed mechanism;
- evidence supporting it;
- evidence against it;
- competing explanations;
- predictions;
- decisive experiments;
- current confidence.

Do not rewrite a hypothesis to make it look correct after contradictory evidence appears.

If a model fails:
- preserve the old model in history;
- document what falsified or weakened it;
- create a narrower replacement if justified.

**Failed hypotheses are archived, not erased.**

---

# 10. Replication language

Use replication terms conservatively.

- **Exact replication:** substantially same intervention, biological context, endpoint, and question.
- **Partial/conceptual replication:** supports a component of the mechanism but does not reproduce the exact experiment.
- **Same-lab continuation:** useful but not independent replication.
- **Cross-species extension:** not an exact replication.
- **Review citation:** not replication.

Do not call a finding “replicated” merely because later reviews repeat it.

If no exact replication is located, say:

> **No exact independent replication found in the search completed to date.**

Do not say “nobody ever replicated this” unless the search scope truly justifies that absolute claim.

---

# 11. Negative-search language

`NOT FOUND` is not the same as `FALSE`.

When reporting an apparent literature gap, record:

- databases/search systems used;
- important query variants;
- language variants when relevant;
- citation-chain searches;
- date searched;
- whether full text or only metadata was searched.

Preferred language:

> “No direct localization study was found in the searches completed to date.”

Avoid:

> “This experiment has never been done.”

unless the evidence genuinely supports that stronger statement.

---

# 12. Historical and traditional sources

Historical anatomy can provide real scientific observations.

Traditional/spiritual texts can provide historical context.

They are not interchangeable.

For old anatomical sources:
- preserve original title/language;
- identify edition/date;
- record translation uncertainty;
- distinguish the author's observation from modern reinterpretation.

For traditional or spiritual material:
- keep it Tier 4;
- do not convert metaphorical language into biochemical evidence;
- do not claim modern pineal identity unless a defensible historical/anatomical bridge exists.

---

# 13. Permanent identifier rules

IDs are defined in `RESEARCH_IDS.md`.

- `P####` — papers/sources
- `C###` — atomic claims
- `H###` — hypotheses
- `E###` — experiments/decisive tests
- `RQ###` — research questions / work items
- `A###` — audits/corrections

Rules:
- never recycle an ID;
- renaming a file does not change its ID;
- duplicate database records for one publication share one `P####`;
- new papers use the next unused source ID from `SOURCE_INDEX.md`;
- every Zotero source entering the canonical evidence chain gets its `P####` tag.

---

# 14. Zotero operating rules

The standard collection tree and automation are documented in `automation/README.md` and `ZOTERO_SETUP.md`.

For a new source:

1. add the authoritative bibliographic record to Zotero;
2. attach the PDF when legally available;
3. assign the next `P####`;
4. add species/method/topic/status tags;
5. file it into every relevant collection without duplicating the item;
6. create/update its GitHub dossier if it materially affects the evidence chain.

The current automation script is intentionally idempotent: rerunning it should not duplicate collections or tags.

Never edit Zotero's SQLite database directly.

---

# 15. GitHub commit and file discipline

Use meaningful commit messages describing the scientific change.

Good examples:
- `Add DOI and primary-method details for P0006`
- `Downgrade H004 after negative mineral-uptake search`
- `Document citation drift in adult SCGx literature`

Avoid temporary/staging language such as:
- bootstrap
- starter
- stuff
- misc changes
- update files

Do not rewrite published Git history merely for cosmetic reasons when doing so would damage provenance.

When correcting a substantive scientific error, update the current file **and** preserve the correction trail under `audits/` or `RESEARCH_LOG.md`.

---

# 16. GitHub Issue discipline

Every substantive unresolved investigation should have an `RQ###` Issue.

An Issue should specify:
- exact question;
- why it matters;
- search/experimental targets;
- evidence boundaries;
- deliverable.

Do not close an Issue merely because a search session ended.

Close it only when:
- the result is integrated into permanent repository files;
- uncertainty is explicitly recorded;
- any narrower follow-up question has been opened if needed.

If the task is blocked by inaccessible full text, keep the Issue open and record the blocker.

---

# 17. Research-session completion checklist

Before ending a substantive research session, ask:

1. Did we add or update any `P####` sources?
2. Did a `C###` claim change?
3. Did a hypothesis gain or lose support?
4. Did the master matrix need updating?
5. Was a citation error discovered?
6. Did we identify a decisive experiment?
7. Did the active `RQ###` Issue get updated/closed?
8. Did the work create a narrower new question?
9. Is any important conclusion still only inside chat?
10. Did `RESEARCH_LOG.md` need an entry?

If the answer to #9 is yes, the session is not finished.

---

# 18. Data and code reproducibility

Follow the repository data layout:

- `data/raw/` — immutable source data or retrieval manifests;
- `data/processed/` — reproducible transformations;
- `data/derived/` — final analysis tables/figures;
- `scripts/` — all code needed to reproduce transformations.

Rules:
- never hand-edit raw data;
- document dataset accession and retrieval date;
- record software/package versions where material;
- keep scripts deterministic where practical;
- every derived table should identify its upstream data and generating script;
- prefer retrieval manifests/checksums over committing huge upstream datasets already hosted in stable repositories.

---

# 19. Scientific-scope and treatment boundary

This is a mechanistic research repository, not a clinical protocol.

Do not convert:
- ex-vivo dissolution;
- animal interventions;
- traditional use;
- theoretical BBB delivery;
- biomineralization analogies

into human treatment claims without direct evidence.

When discussing candidate compounds, use evidence labels such as:
- materials control;
- ex-vivo candidate;
- formation inhibitor;
- animal-only physiological intervention;
- delivery hypothesis;
- unsupported human treatment claim.

The repository may investigate how mineral regression could work without implying that a home intervention is safe or effective.

---

# 20. Agent behavior expectations

The agent should:

- continue deep research without repeatedly asking for permission when the task is clear;
- pursue citation chains and obscure archival literature when they materially improve the evidence map;
- correct the user or prior agent record when the evidence requires it;
- distinguish confidence from enthusiasm;
- say when a source is inaccessible or a search is incomplete;
- never fabricate a paper, DOI, result, replication, sample size, or method detail;
- prefer exact uncertainty over a polished guess;
- preserve contradictory evidence;
- investigate surprising results instead of smoothing them away;
- use the repository to maintain continuity across conversation windows.

The agent should **not**:

- restart from a generic pineal-gland overview when a specific `RQ###` exists;
- present a theory as established because it fits the current model;
- erase dead ends;
- silently change an evidence rating;
- call a review an independent replication;
- cite a general brain mechanism as direct pineal proof;
- let an important finding exist only in conversation.

---

# 21. Current canonical correction examples

These examples should be used as calibration for future reasoning.

## Reiter vs Champney
- **P0001 — Reiter, Welsh & Vaughan 1976:** juvenile SCGx prevents later formation.
- **P0002 — Champney et al. 1985:** adult SCGx is followed by drastic reduction in established concretion counts.

Do not merge these into one claim.

## SCGx and chemical dissolution
Champney does **not** directly prove chemical dissolution of hydroxyapatite. Possible mechanisms include dissolution, fragmentation, scaffold destabilization, clearance, relocation, counting effects, or combinations.

## Microglia
Direct evidence exists for an early pineal microglial response after SCGx. General brain evidence exists for microglial interaction with calcium-phosphate mineral. Direct mineral-positive pineal microglial uptake after SCGx remains unresolved.

## IMPG2/SPACRCAN
Pinealocyte expression is established. Direct localization inside human acervuli remains an unresolved high-value question unless/until primary evidence is found.

## RS1
RS1 has direct rodent experimental support as a pineal mineral-architecture factor. Its role in adult mature-deposit maintenance/regression remains unresolved.

---

# 22. Final rule

> **The repository must show not only what we currently think, but why we think it, what could falsify it, and how the conclusion changed over time.**
