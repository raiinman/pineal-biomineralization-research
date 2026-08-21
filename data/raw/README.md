# Raw Data

Raw inputs are immutable.

For large public datasets, store a retrieval manifest here instead of duplicating the full upstream archive whenever possible.

A manifest should include:
- dataset/accession ID
- authoritative source
- retrieval date
- exact file names
- checksums when available
- any unavoidable preprocessing performed by the source provider

**Never overwrite a raw input with a cleaned version.**
