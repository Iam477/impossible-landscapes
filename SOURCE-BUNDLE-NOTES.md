# Part One source bundle notes

This bundle converts the approved Part One staging output into Foundry source JSONs under `src/packs/...` so the included `build.sh` can compile them.

## Included buildable source packs
- `src/packs/actors`
- `src/packs/npc-journals`
- `src/packs/locations`
- `src/packs/handouts`
- `src/packs/handler-guide`

## What was not generated as buildable source JSON
- **Items** were not generated because the current `module.json` and `build.sh` do not define an Item pack. The approved staging bundle references shared tome items in `content-index.csv`, but there were no corresponding approved item source texts in the chapter bundle.
- **Scenes** were not generated as Scene source JSON because the current `module.json` and `build.sh` do not define a Scene pack. The approved `scenes.csv` remains included as reference.

## Actor source note
Approved chat outputs for Part One did not include mechanical stat blocks. To keep this bundle immediately usable with your current Delta Green module shell, actor source JSONs here reuse the uploaded actor files as mechanical scaffolding, while the **document names, summaries, folder-path metadata, and source-page references** were normalized to the approved Part One outputs from this chat.

## Reference material preserved
The original chapter staging markdown and CSV files are preserved in this bundle for verification and future edits.
