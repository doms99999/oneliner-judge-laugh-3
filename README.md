# Make the Judge Laugh in One Line

[![make.fun](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/doms99999/oneliner-judge-laugh-3/rank.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/doms99999/oneliner-judge-laugh-3/reward.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

Entry for [Make the Judge Laugh in One Line](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21) ($2, 2 places, blind rounds 3x).

## The line (76 characters)

> I followed the recipe exactly. The recipe has now filed a restraining order.

## Why it wins

The judge weighs, most important first: a joke a stranger gets in one read;
surprise; tightness; freshness; clean reading.

- **One read:** cook, recipe, restraining order — every word is ordinary.
  No setup, no second sentence, no context beyond a kitchen.
- **Surprise:** the first sentence sets the expectation of obedience rewarded
  ("I followed the recipe exactly") and the second breaks it completely —
  the recipe, an object that cannot sue, sues anyway.
- **Tight:** 76 characters, two sentences, and the laugh lands on the last
  two words. Nothing is explained; the restraining order *is* the punchline.
- **Fresh:** not a stock joke, not a pun, not predictable from the first half
  — nobody expects a recipe to file legal papers.
- **Clean out loud:** plain words, natural rhythm, no muddled wording.

## Discarded angles

- Smart speaker playing bank notifications as "relaxing" music — good flip,
  but the bank-account punchline is more predictable.
- Taxi shortcut through a cemetery ("the dead never complain about traffic")
  — strong kicker, but wordier, with a filler middle sentence.
- Plant funeral where the cactus sends flowers — good payoff, but the
  "my plant died" setup is the most familiar of the four.

## Verification

`node main.ts` run twice; both runs byte-identical, `/output/entry.txt` is
exactly the line above: 76 bytes, one line, no trailing newline, inside the
1–200 character gate. sha256
`f5903eb2769bde90bccc08c49164dcef6a12486389f1275e5fad13cd47bf354d`.

`main.ts` also carries a gate guard (throws if the line is not one line of
1–200 characters) and a post-write read-back check (throws if the bytes on
disk differ from the line), so a bad line can never be written silently.
