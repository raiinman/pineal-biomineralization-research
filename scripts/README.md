# Analysis Scripts

**Repository role:** Version-controlled code used to transform datasets and generate derived scientific results.

## Rules

- Scripts should be deterministic where practical.
- Record dependencies and versions.
- Do not embed large raw datasets in code.
- Every script that generates a result should state its expected inputs and outputs.
- Prefer scripted transformations over manual spreadsheet editing.

## First planned analysis

Reanalysis of **GSE63309 / P0005** for `RQ003`, including candidate genes and pathway-level signals related to ECM, mineral handling, RS1/IMPG2, and lysosomal/phagocytic biology.
