# A3: Final Game
**Group 1B**



## Game Description
Illuminate is a 2D maze adventure that explores the experience of social anxiety disorder through a fantasy-styled gameplay. Players must help Faith overcome challenges she faces without her social battery bar dropping to zero, representing mental and emotional energy required when handling overwhelming social situations. 

Players control Faith through the maze using the WASD keys while collecting items scattered throughout three levels. In Level 1, players collect fireflies while avoiding laser-firing goblins and navigating increasingly restrictive maze walls that expand as Faith’s Social battery decreases. In Level 2, players explore a classroom-themed maze, collecting randomized potion ingredients while avoiding swinging beakers and lasers. In Level 3, players collect food items throughout a cafeteria maze, deliver them to the cafeteria bar before progressing, complete a goblin-themed Whack-a-Mole minigame, and then locate the final exit

Throughout the game, collecting items helps restore Faith's Social Battery while contributing toward earning a badge for completing each collection. Players are guided through the maze using dialogue, visual indicators, and level objectives while overcoming obstacles that challenge their Social Battery management. The game combines exploration, resource management, and storytelling to create an engaging game experience, showcasing the challenges faced by individuals with social anxiety disorder.


## Setup and Interaction Instructions
To run the sketch locally, open `index.html` in Google Chrome using Live Server. To play via GitHub Pages, visit the link provided on the submission page.

**Controls:** 
WASD to move.

- W move/walk forward
- A move/walk to the left
- S move/walk backwards
- D move/walk to the right
- Spacebar to start game, progress through introduction dialogue
- Mouse1 to click through the menu, access the ? (controls), progress through introduction dialogue
- R restart the game after full social battery depletion
- N progress to next level

Debug Panel
- D/d: Toggle debug panel on screen
- 1: Jump to Level 1
- 2: Jump to Level 2
- 3: Jump to Level 3
- Q/q: Jump to Start Screen
- R/r: Jump to Finish/End Screen


## Iteration Notes

### **Post-Playtest**
**Level 3 Game Mechanic:**
Prior to playtesting, level 3’s mechanic involved a separate pop-up “mini-game” that mirrored whack-a-mole, of which players were presented with a screen where they must click on the goblins to prevent them from stealing their food. Failing to whack away the goblins on time automatically ends the level, forcing players to restart level 3. Based on Karen and Jueun’s feedback, we re-vamped the mechanic to be integrated within Illuminate’s existing mechanics and maze environment for a more seamless transition. Once users have collected all the food items, this will activate a “goblin chase” of which all goblins will chase after the player in the maze. The player must run through the cafeteria’s pathways and avoid making contact with the goblins to maintain their social battery health and identify the blackhole exit to successfully complete the entire game. This revised feature also reinforces how individuals with social anxiety disorder feel surrounded, monitored and/or trapped when faced with social interactions and crowds [3]. 

**Level 3 Blackhole Appearance:**
For level 3, players must collect all food items scattered across the cafeteria map to exit through the blackhole, representing the maze’s final endpoint. However, during A3 playtesting, participants discovered the black hole while exploring the map and attempted to exit the level without retrieving all seven food collectibles. This action left participants confused given the lack of feedback and visual instructions explicitly stating the requirement that all food items must be collected to successfully exit. Given this observation, our group re-tweaked the “if” statements within Level 3’s code to ensure that the blackhole exit would solely appear once players have gathered all seven food items in their inventory. This post-playtest change sets the exit tile initially as a regular wooden cafeteria floor tile that users can walk across without an awareness of its functionality. Once all food items have been collected, this tile then transforms into a black hole that will redirect them to a winning screen for completing the game.  

**Tip Pop-up:**
After conducting playtesting for our final game, we implemented a “tip” pop-up that appears underneath the HUD in level 1, 2 and 3 to guide players on the game mechanics and interactions they can perform in the gameplay. During A3 playtesting, we observed players overlooking or feeling confused on new interactions and mechanics they encountered in the maze. Rather than presenting a lengthy tutorial in the beginning or expecting them to figure out the intended action through trial and error, our group incorporated the “tip” pop-ups to subtly inform them of relevant actions or obstacles they may encounter in the level. To illustrate, Level 1 notifies players that they can receive a social battery boost by collecting items scattered in the maze. This becomes handy when players find themselves taking substantial battery damage by the lasers. Level 2 advises players to dodge the descending beakers as they can diminish their health and Level 3’s tip pop-up surfaces during the goblin chase, prompting them to click on the goblins to defend themselves. Centered on the screen, the tip pop-up is visible and does not obstruct the player’s perspective, while remaining concise textually in conveying what players can perform to progress and how they can appropriately respond to threats to complete the current level. 

## Assets

|                  File                   |                                          Source                                            |
|-----------------------------------------|--------------------------------------------------------------------------------------------|
| `assets/sounds/walking.mp3`[1]          | Abdalrahman_bm, 8-bit gravel footsteps 1 - Pixabay.com                                     |
| `assets/sounds/collect.mp3`[3]          | floraphonic, 90s Game UI 6 - Pixabay.com                                                   |
| `assets/sounds/lvl2Music.mp3`[4]        | kaazoom, The Happy Whistler (30 sec edit) - Pixabay.com                                    |
| `assets/sounds/win.mp3`[6]              | Latent-Rick, Retro Arcade Level Up - Pixabay.com                                           |
| `assets/sounds/fail.mp3`[7]             | Make_More_Sound, 8 Bit Video Game Lose Sound - Version 1 - Pixabay.com                     |
| `assets/sounds/bgmusic.mp3`[9]          | Montogoronto, A night full of stars - Peaceful electronic 8-bit/piano track - Pixabay.com  |
| `assets/sounds/lvl3Music.mp3`[10]       | nakaradaalexander, Winning Loop - Pixabay.com                                              |
| `assets/sounds/hit.mp3`[11]             | Pixabay, Retro Hurt Sound 01 - Pixabay.com                                                 |
| `assets/sounds/pop.mp3`[12]             | SoundReality, Pop Sound - Pixabay.com                                                      |
| `assets/sounds/punch.mp3`[13]           | soraatwood, Punch - Pixabay.com                                                            |
| `assets/sounds/miniGameWin.mp3`[14]     | Vadim_Makes_Sound, Fantasy Healing Spell Cast #1 - Pixabaycom                              |
|                                         |                                                                                            |
| `assets/images/apple.png`               | Gemini 3.6 Flash                                                                           |
| `assets/images/blackhole.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/bone.png`                | Gemini 3.6 Flash                                                                           |
| `assets/images/burger.png`              | Gemini 3.6 Flash                                                                           |
| `assets/images/cafedoor.png`            | Gemini 3.6 Flash                                                                           |
| `assets/images/cafeentrance.png`        | Gemini 3.6 Flash                                                                           |
| `assets/images/cafeTable.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/cafeteria.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/character.png`           | Gemini 3.6 Flash and ChatGPT                                                               |
| `assets/images/characterlvl2.png`       | Gemini 3.6 Flash                                                                           |
| `assets/images/characterlvl3.png`       | Gemini 3.6 Flash                                                                           |
| `assets/images/classroomdoor.png`       | Gemini 3.6 Flash                                                                           |
| `assets/images/cobblestone.png`         | Gemini 3.6 Flash and ChatGPT                                                               |
| `assets/images/completelvl1.png`        | Gemini 3.6 Flash and ChatGPT                                                               |
| `assets/images/completelvl2.png`        | Gemini 3.6 Flash and ChatGPT                                                               |
| `assets/images/completelvl3.png`        | Gemini 3.6 Flash and ChatGPT                                                               |
| `assets/images/cookie.png`              | Gemini 3.6 Flash                                                                           |
| `assets/images/corn.png`                | Gemini 3.6 Flash                                                                           |
| `assets/images/crackedStone.png`        | Gemini 3.6 Flash                                                                           |
| `assets/images/desk.png`                | Gemini 3.6 Flash                                                                           |
| `assets/images/desksMaterials.png`      | Gemini 3.6 Flash                                                                           |
| `assets/images/desksMaterials2.png`     | Gemini 3.6 Flash                                                                           |
| `assets/images/dirt.png`                | Gemini 3.6 Flash                                                                           |
| `assets/images/dragonBlood.png`         | Gemini 3.6 Flash                                                                           |
| `assets/images/drumstick.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/emptyCafeTable.png`      | Gemini 3.6 Flash                                                                           |
| `assets/images/eyeballs.png`            | Gemini 3.6 Flash                                                                           |
| `assets/images/faillvl2.png`            | Gemini 3.6 Flash                                                                           |
| `assets/images/faillvl3.png`            | Gemini 3.6 Flash                                                                           |
| `assets/images/feather.png`             | Gemini 3.6 Flash                                                                           |
| `assets/images/firefly.png`             | Gemini 3.6 Flash                                                                           |
| `assets/images/fireflybadge.png`        | Gemini 3.6 Flash                                                                           | 
| `assets/images/flask.png`               | Gemini 3.6 Flash                                                                           |
| `assets/images/floorlvl3.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/foodBadge.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/foodcounter1.png`        | Gemini 3.6 Flash                                                                           |
| `assets/images/foodcounter2.png`        | Gemini 3.6 Flash                                                                           |
| `assets/images/foodcounter3.png`        | Gemini 3.6 Flash                                                                           |
| `assets/images/forest.png`              | Gemini 3.6 Flash                                                                           |
| `assets/images/fork.png`                | Gemini 3.6 Flash                                                                           |
| `assets/images/garbage.png`             | Gemini 3.6 Flash                                                                           |
| `assets/images/goblin.png`              | Gemini 3.6 Flash                                                                           |
| `assets/images/goblins.png`             | Gemini 3.6 Flash                                                                           |
| `assets/images/goblinslvl2.png`         | Gemini 3.6 Flash                                                                           |
| `assets/images/goblinslvl3-running.png` | Gemini 3.6 Flash                                                                           |
| `assets/images/goblinslvl3.png`         | Gemini 3.6 Flash                                                                           |
| `assets/images/homescreen.png`          | Gemini 3.6 Flash and ChatGPT                                                               |
| `assets/images/house.png`               | Gemini 3.6 Flash                                                                           |
| `assets/images/HUD.png`                 | Gemini 3.6 Flash                                                                           |
| `assets/images/krakenInk.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/library.png`             | Gemini 3.6 Flash                                                                           |
| `assets/images/mossStone.png`           | Gemini 3.6 Flash                                                                           |
| `assets/images/paperStone.png`          | Gemini 3.6 Flash                                                                           |
| `assets/images/paperStone2.png`         | Gemini 3.6 Flash                                                                           |
| `assets/images/pbjsandwich.png`         | Gemini 3.6 Flash                                                                           |
| `assets/images/potionbadge.png`         | Gemini 3.6 Flash                                                                           |
| `assets/images/restartScreen.png`       | Gemini 3.6 Flash and ChatGPT                                                               |
| `assets/images/school.png`              | Gemini 3.6 Flash                                                                           |
| `assets/images/stardust.png`            | Gemini 3.6 Flash                                                                           |
| `assets/images/trees.png`               | Gemini 3.6 Flash                                                                           |
| `assets/images/watermelon.png`          | Gemini 3.6 Flash                                                                           |

## References

[1] Abdalrahman_bm. 2025. 8-bit gravel footsteps 1. Pixabay.com. Retrieved July 9, 2026 from https://pixabay.com/sound-effects/film-special-effects-8-bit-gravel-footsteps-1-408582/

[2] Cleveland Clinic. 2026. Social Anxiety Disorder. Cleveland Clinic. Retrieved July 8, 2026 from https://my.clevelandclinic.org/health/diseases/22709-social-anxiety

[3] floraphonic. 2024. 90s Game UI 6. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/film-special-effects-90s-game-ui-6-185099/

[4] kaazoom. 2026. The Happy Whistler (30 sec edit). Pixabay.com. Retrieved August 5, 2026 from https://pixabay.com/sound-effects/musical-the-happy-whistler-30-sec-edit-532434/

[5] Karen Cochrane. 2026. Week 3 Code Examples. Retrieved July 8, 2026 from https://learn.uwaterloo.ca/d2l/le/content/1265815/viewContent/6544450/View

[6] Latent-Rick. 2026. Retro Arcade Level Up. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/musical-retro-arcade-level-up-552982/

[7] Make_More_Sound. 2023. 8 Bit Video Game Lose Sound - Version 1. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/film-special-effects-8-bit-video-game-lose-sound-version-1-145828/

[8] Mayo Clinic. 2021. Social anxiety disorder (social phobia). Mayo Clinic. Retrieved July 8, 2026 from https://www.mayoclinic.org/diseases-conditions/social-anxiety-disorder/symptoms-causes/syc-20353561

[9] Montogoronto. 2025. A night full of stars - Peaceful electronic 8-bit/piano track. Pixabay.com. Retrieved July 9, 2026 from https://pixabay.com/music/ambient-a-night-full-of-stars-peaceful-electronic-8-bitpiano-track-321551/

[10] nakaradaalexander. 2024. Winning Loop. Retrieved August 5, 2026 from https://pixabay.com/sound-effects/musical-winning-loop-228639/

[11] Pixabay. 2026. Retro Hurt Sound 01. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/retro-hurt-sound-01-474779/

[12] SoundReality. 2025. Pop Sound. Pixabay.com. Retrieved August 5, 2026 from https://pixabay.com/sound-effects/film-special-effects-pop-sound-423716/

[13] soraatwod. 2025. Punch. Retrieved August 5, 2026 from https://pixabay.com/sound-effects/punch-416719/

[14] Vadim_Makes_Sound. 2026. Fantasy Healing Spell Cast #1. Retrieved August 5, 2026 from https://pixabay.com/sound-effects/film-special-effects-fantasy-healing-spell-cast-1-547831/