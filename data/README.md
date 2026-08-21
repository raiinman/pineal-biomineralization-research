# Data

**Repository role:** Reproducible storage rules for quantitative datasets and analysis outputs.

## Structure

- `raw/` — immutable source files or retrieval manifests
- `processed/` — data produced from raw inputs by documented code
- `derived/` — final tables, statistics, plots, and compact outputs used in interpretation

## Rules

1. Never hand-edit raw data.
2. Large public datasets should normally remain at their authoritative host; store accession numbers, retrieval instructions, dates and checksums here.
3. Every processed or derived result must identify the script and source input used to create it.
4. Record software/package versions for analyses where version changes could affect results.
5. Do not mix manual literature tables with machine-generated analysis outputs without clearly marking provenance.

## First planned dataset

**GSE63309** — Hartley et al. 2015 rat pineal transcriptomics (`P0005`, `RQ003`).
