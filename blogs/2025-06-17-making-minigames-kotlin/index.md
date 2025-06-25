---
title: "HorizonEvents: From Datapacks to Coroutines — Building a Kotlin-Powered Minigame Plugin"
date: "2025-06-17"
excerpt: "Four years of experimentation turned a simple datapack project into a Kotlin plugin powering HorizonEvents."

tags: ["kotlin", "minecraft", "minigames", "datapacks"]
slug: "making-minigames-kotlin"
draft: false
---

# HorizonEvents: From Datapacks to Coroutines — Building a Kotlin-Powered Minigame Plugin

*2025-06-17 • ~6 min read*

Four years ago I (ddan) kicked off the **HorizonEvents** minigame project with nothing more than command blocks and datapacks. That solo, scrappy approach let me publish fast, gather feedback, and avoid the rabbit-hole of plugin APIs. Back then the minigames were hosted on a small Apex Minecraft Hosting server and were bridged into the **Hallowed Survival** lobby so friends could hop in without switching servers. The code still lives on rented hardware at Apex—soon migrating to Pebble Hosting and maybe one day a VPS—but today that instance is federated with the **Horizon Ventures** network—same autonomy, far bigger audience. As the project expanded I pulled in an awesome team of builders to sculpt maps and aesthetics, while I stayed laser-focused on the code. But once our ideas—and the player counts—grew, those lovingly hacked-together datapacks began to creak. In late 2024 we hit the ceiling and decided to rewrite everything as a **Kotlin plugin for Paper**. The result is **HorizonEvents**, a data-driven, hot-reloadable framework that powers Freeze Tag, Endless Maze, Capture the Flag, Spleef, and every new idea we throw at it.
That first release—version 1.0—was very much a learning experiment. It works but only supports a single server and lobby, so a big influx of players would bottleneck things. I'm rewriting it now as version 2.0 with multi-server support to eliminate those lag issues and add every feature I've dreamed of.

---

## Why We Started with Datapacks

* **Zero install friction.** Players join vanilla 1.21 and everything just works.
* **Ridiculously fast iteration.** A one-liner in chat reloads the pack; testers are back in seconds.
* **Future-proof.** Datapacks ride along with every Mojang update.

**The trade-off?** Logic is limited to scoreboard math, summon/fill loops, and the mercy of `/execute`. Once a game needed timers, state machines, or network-wide events, the command spaghetti turned into a Hydra.

---

## When the Ceiling Hit

By mid-2024 we were juggling 20+ game modes. Each new feature required:

1. Copy-pasting scoreboard templates.
2. Adding yet another `tick.mcfunction` check.
3. Hoping nothing clashed with the `counter` entity IDs.

Performance dipped, and debugging via `tellraw` felt medieval. **Fun fact:** one freeze-tag bug went unnoticed for two weeks because its scoreboard name was one character off.

---

## Meet HorizonEvents — *The* Events Minigame Plugin

Migrating to **Kotlin + Paper** wasn’t just a port; it was a redesign around three principles:

1. **Data first.** Every map ships with a `MapConfig.json`. An extension function converts it to a runtime `GameMap` object, so designers tweak JSON—no recompiles.
2. **Explicit lifecycles.** `GameManagerImpl` owns a clean `start → play → end → cleanup` flow. Each game extends an abstract `Game` base, overriding only what’s unique.
3. **Hot-reload everything.** `/reloadhorizonevents` tears down async tasks, closes inventories, flushes caches, and spins the world back up—all without kicking players.

### What Kotlin Unlocks

| Datapack World                  | HorizonEvents World                       |
| ------------------------------- | ----------------------------------------- |
| Scoreboard counters & chat spam | Strongly-typed events + Adventure API UI  |
| One long `tick` function        | Coroutine-driven schedulers               |
| `raycasting` via armor stands   | Real hit detection through Paper events   |
| Manual world resets             | Snapshot -> copy -> delete via `MapManager` |

**Concrete wins:**

* **Coroutines** run timers without blocking the main thread.
* **Adventure components** give us hover-text NPC nameplates and RGB hex chat.
* **Kotlin DSLs** shrink boilerplate for items, commands, and listeners.
* **SQLite + async profiles** enable persistent cosmetics without TPS drops.

---

## Case Study — Freeze Tag Reborn

Old datapack version:

* ~600 lines of functions.
* Freeze/unfreeze via armor-stand tags.
* World reset required a manual `/fill` of the arena.

HorizonEvents version:

* 120 lines of Kotlin.
* Real player metadata + MythicMobs power-ups (grow/shrink mushrooms!).
* `MapManager.cloneWorld()` ensures a fresh arena every round.

Result: **38% less CPU time** and zero ghost-tag bugs.

---

## Lessons We Learned (So You Don’t Have To)

1. **Prototype in datapacks,** but plan escape hatches early—namespacing, modular resets, etc.
2. **Treat configs as content,** not code. JSON beats recompiles.
3. **Own your reload path.** A live server demands clean teardown logic.
4. **Leverage Kotlin’s strengths**—null-safety, coroutines, and DSLs tame Bukkit’s rough edges.

---

## Ready to Level Up?

If you’re hacking together your first minigame, start with a datapack—shipping fast trumps elegance. But when players start asking for leaderboards, cosmetics, or 100 concurrent zombies, consider the jump. **HorizonEvents** proves that a Kotlin-powered plugin can keep the spirit of rapid iteration *and* deliver the muscle for serious scale.


