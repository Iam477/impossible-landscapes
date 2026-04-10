# Part One Foundry staging bundle

## Chapter name
Part One: The Night Floors

## What is included
- `README.md`
- `build-checklist.md`
- `content-index.csv`
- `npcs.csv`
- `locations.csv`
- `clues.csv`
- `handouts.csv`
- `scenes.csv`
- `assets-manifest.csv`
- `foundry-import-notes.md`
- `journals/` markdown staging files for approved Journal entries used by this chapter bundle

The bundle preserves the locked project standards, naming pattern, foldering, tags, and classifications already approved in this chat.

## Assumptions
- This bundle is a **staging bundle**, not a Foundry compendium export.
- Where full prose for a Journal was never finalized in this chat, the Journal markdown preserves the approved template structure and uses only approved summary text or placeholders from the approved template list.
- Shared/Common entries that Part One depends on are included where later approved outputs still referenced them directly.
- Actor, Item, and Scene rows are included in CSV indexes when they were approved as part of the chapter build, but only Journal entries receive markdown files in `journals/`.

## Unresolved issues
- Earlier approved planning listed `SHARED - NPC - Hildred Castaigne [GM]` as a recurring/shared figure, but the later **definitive Part One NPC index** explicitly corrected Part One usage to **Henri de Calvados Castaigne** and excluded Hildred from the Part One NPC list. This bundle follows the later definitive Part One NPC index and notes the conflict here.
- Earlier approved planning listed `SHARED - Entity - Clockwork Child [GM]` among shared/common-first build elements, but no later definitive Part One NPC/location/journal dossier or asset filename was approved for inclusion in this chapter bundle. Omitted.
- Earlier approved planning listed `SHARED - Artifact - The Reputation Book [GM]` and some optional OP1 item docs in broad architecture outputs, but those items were not carried through the later chapter build checklist, definitive NPC/location exports, or Journal dossier pass. Omitted from staged files.
- Handout asset filenames and scene image filenames were never finalized in this chat. `handouts.csv` leaves `asset_filename` blank and `assets-manifest.csv` only includes approved NPC/entity token-art filenames.

## Missing from approved scope
- Full prose body text for non-NPC Journals beyond the approved template structure.
- Finalized handout image filenames.
- Finalized scene image filenames.
- A definitive handout index with asset naming.
- A definitive item export set for optional OP1 items such as `Night Floors Draft`, `English-Tartessian Dictionary`, and `A History of the Russo-Germanic Hegemony, 1911-1921`.
- A finalized chapter-specific inclusion decision for `Clockwork Child`.

## How to use the bundle in Foundry
1. Use `build-checklist.md` as the import/build sequence.
2. Create Shared/Common masters first, then OP1 framing docs, then tenant/location/clue docs, then Night Floors docs.
3. Use the CSV files as spreadsheet-friendly staging references while entering records into compendiums.
4. Import only what you need into the live world. Keep mutable discoveries, reveal state, and session logs out of packaged canon.
5. Treat the markdown files in `journals/` as source text for Journal entries, not as player-visible exports by default.
