---
title: "Making Minecraft Minigames in Kotlin"
date: "2025-06-17"
excerpt: "A four-year journey from simple datapacks to a Kotlin plugin powering the BEDR minigames experience."
tags: ["kotlin", "minecraft", "minigames", "datapacks"]
slug: "making-minigames-kotlin"
draft: false
---

Developing the **BEDR** Minecraft minigames experience has been a four year adventure. When we started in 2021, datapacks were our only option. Their limitations forced us to keep each idea very small, but that simplicity let the project grow without collapsing under its own weight. Every mechanic was a command block contraption or a complicated function chain. Bugs often went unnoticed because the scope was so constrained.

## Growing beyond datapacks

By 2025 datapacks remain a great way to prototype. They are easy to share and don't require players to install anything. However, they are still limited by Minecraft's built‑in commands. Complex logic becomes hard to maintain and performance suffers once you start pushing the boundaries.

**Pros of datapacks in 2025**

- No external plugins or mod loaders needed
- Perfect for quick iterations and sharing
- Supported directly by Mojang so they stay relatively future‑proof

**Cons of datapacks in 2025**

- Limited access to advanced game events and networking
- Debugging is painful with only log messages and chat output
- Large projects quickly become a mess of functions and scoreboard hacks

## Switching to Kotlin plugins

In late 2024 we decided to port the project to a Kotlin plugin running on Paper. The split between Paper and the old Bukkit/Spigot ecosystem was dramatic, but Paper's modern features were too good to ignore. Kotlin, with its concise syntax and strong null‑safety, made the codebase far more maintainable than Java.

**Pros of Kotlin plugin development on Paper**

- Full access to the server API and events
- Easier to organize code with classes and packages
- Kotlin coroutines simplify asynchronous tasks

**Cons**

- Requires players to install the server jar, so it is less portable than a datapack
- Breaking API changes can occur whenever Paper diverges from Bukkit
- Community drama around the fork sometimes makes it tricky to find help

## Lessons learned

Starting with datapacks taught us to ship small features and ignore minor issues. When we moved to a full plugin those little quirks turned into obvious bugs. The upside is that Kotlin's tooling made it much easier to track down and fix them. Overall the project is now more refined, though every release requires thorough testing because the plugin touches so many parts of the server.

After four years we finally have a stable system that players love. If you're considering building your own minigames, try starting with a datapack to prove out the concept. Once the idea sticks, a Kotlin plugin on Paper gives you the power to polish and scale.
