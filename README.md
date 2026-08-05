# A3: Final Game
**Group 1B**



## Game Description
Illuminate is a 2D maze adventure that explores the experience of social anxiety disorder through a fantasy-styled gameplay. Players must help Faith overcome challenges she faces without her social battery bar dropping to zero, representing mental and emotional energy required when handling overwhelming social situations. 

Players control Faith through the maze using the WASD keys while collecting items, from fireflies, potion ingredients to food, scattered across the map to achieve a badge. Along the journey, players must carefully navigate the environment, ensuring that her social battery doesn’t deplete as she encounters situations that increase her anxiety. The game combines exploration, resource management, and storytelling to create an engaging game experience, showcasing the challenges faced by individuals with social anxiety disorder. 

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



## Iteration Notes

### **Post-Playtest**
**Laser Camera Mechanic:**
After receiving feedback in A2 playtesting, our group replaced the moving black balls with a series of stationary laser cameras that release a stream of beaming red light. Once players make contact with the laser, such as walking through them, their social battery bar decreases. We conducted this change to reduce the difficulty of the tutorial/first level, where users are first grasping Illuminate’s core game mechanics and objective. Rather than fixating on evading the moving black balls, players can take their time to explore different pathways in the maze to arrive at school and confront expanding walls as their social battery diminishes. The laser camera also serves as a metaphor that represents the sense of being monitored and judged by others as players navigate through, reflecting the integration of social anxiety disorder in the gameplay where individuals fear being monitored and experiencing intense scrutiny in social situations [3].

**Shrinking Walls to Battery Depletion:**
In the initial game, the expanding walls solely served as a visual effect that moved and followed the player as they progressed through the maze. Players’ social battery could only be damaged by making contact with the moving black balls. However, our group’s observations from our A2 playtesting led us to reinforce the connection between the maze walls’ expansion and the player’s social battery bar. As the player’s social battery decreases when they collide with the laser camera, the walls gradually expand with every occurrence of which the laser beam hits the player. Once the player’s social battery is fully depleted, the walls expand fully and lock the player in place, preventing them from further moving through the maze. Locked in a stagnant position, players are then presented with a restart screen and must begin from the starting point again. As the walls expand, the path becomes more narrow, increasing the difficulty of smoothly moving through each desired route. By manipulating the maze environment, this mechanic conveys a sense of constriction as anxiety intensifies in one’s body, physically freezing them in place once they have burnt out.

**Firefly Collectibles:**
Prior to A2 playtesting, players simply progressed through the maze’s pathways to reach the final end point, represented through a school. To strengthen the game’s overall engagement, our group implemented flying fireflies as a collectible scattered throughout the map that players must collect. After collecting all 11 fireflies, players receive a special badge stored in their inventory (on the top right side of the screen) of which our group intends to place on the player’s backpack (in the character sprite). The fireflies are not mandatory to complete the level, but serve as an additional incentive that encourages players to actively explore different routes throughout the map. As glowing fireflies in the dark forest, these collectibles reflect a sense of light and comfort as insects that the character, Faith, has befriended and enjoys collecting in her jar as a daily routine. For her, the fireflies are predictable and familiar insects she encounters on her pathway to school and other locations in this game world. 

## Assets

|               File                |                                             Source                                         |
|-----------------------------------|--------------------------------------------------------------------------------------------|
| `assets/sounds/walking.mp3`[1]    | Abdalrahman_bm, 8-bit gravel footsteps 1 - Pixabay.com                                     |
| `assets/sounds/collect.mp3`[5]    | floraphonic, 90s Game UI 6 - Pixabay.com                                                   |
| `assets/sounds/win.mp3`[6]        | Latent-Rick, Retro Arcade Level Up - Pixabay.com                                           |
| `assets/sounds/fail.mp3`[7]       | Make_More_Sound, 8 Bit Video Game Lose Sound - Version 1 - Pixabay.com                     |
| `assets/sounds/bgmusic.mp3`[9]    | Montogoronto, A night full of stars - Peaceful electronic 8-bit/piano track - Pixabay.com  |
| `assets/sounds/hit.mp3`[10]        | Make_More_Sound, 8 Bit Video Game Lose Sound - Version 1 - Pixabay.com                     |
|                                   |                                                                                            |
| `assets/images/character.png`     | Gemini 3.5 Flash and ChatGPT                                                                         |
| `assets/images/dirt.png`          | Gemini 3.5 Flash                                                                           |
| `assets/images/firefly.png`       | Gemini 3.5 Flash                                                                           |
| `assets/images/fireflybadge.png`  | Gemini 3.5 Flash                                                                           |        
| `assets/images/forest.png`        | Gemini 3.5 Flash                                                                           |
| `assets/images/homescreen.png`    | Gemini 3.5 Flash and ChatGPT                                                               |
| `assets/images/house.png`         | Gemini 3.5 Flash                                                                           |
| `assets/images/HUD.png`           | Gemini 3.5 Flash                                                                           |
| `assets/images/laserOff.png`      | Gemini 3.5 Flash                                                                           |
| `assets/images/laserOn.png`       | Gemini 3.5 Flash                                                                           |
| `assets/images/level1complete.png`| Gemini 3.5 Flash and ChatGPT                                                               |
| `assets/images/restartscreen.png` | Gemini 3.5 Flash and ChatGPT                                                               |
| `assets/images/school.png`        | Gemini 3.5 Flash                                                                           |
| `assets/images/trees.png`         | Gemini 3.5 Flash                                                                           |

## References

[1] Abdalrahman_bm. 2025. 8-bit gravel footsteps 1. Pixabay.com. Retrieved July 9, 2026 from https://pixabay.com/sound-effects/film-special-effects-8-bit-gravel-footsteps-1-408582/

[2] Cardona-Rivera, R. E., and Young, R. M. 2013. A Cognitivist Theory of Affordances for Games. Proceedings of DiGRA 2013 Conference: DeFragging Game Studies. Digital Games Research Association (DiGRA), Atlanta, GA, USA.

[3] Cleveland Clinic. 2026. Social Anxiety Disorder. Cleveland Clinic. Retrieved July 8, 2026 from https://my.clevelandclinic.org/health/diseases/22709-social-anxiety

[4] Karen Cochrane. 2026. Week 3 Code Examples. Retrieved July 8, 2026 from https://learn.uwaterloo.ca/d2l/le/content/1265815/viewContent/6544450/View

[5] floraphonic. 2024. 90s Game UI 6. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/film-special-effects-90s-game-ui-6-185099/

[6] Latent-Rick. 2026. Retro Arcade Level Up. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/musical-retro-arcade-level-up-552982/

[7] Make_More_Sound. 2023. 8 Bit Video Game Lose Sound - Version 1. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/film-special-effects-8-bit-video-game-lose-sound-version-1-145828/

[8] Mayo Clinic . 2021. Social anxiety disorder (social phobia). Mayo Clinic. Retrieved July 8, 2026 from https://www.mayoclinic.org/diseases-conditions/social-anxiety-disorder/symptoms-causes/syc-20353561

[9] Montogoronto. 2025. A night full of stars - Peaceful electronic 8-bit/piano track. Pixabay.com. Retrieved July 9, 2026 from https://pixabay.com/music/ambient-a-night-full-of-stars-peaceful-electronic-8-bitpiano-track-321551/

[10] Pixabay. 2026. Retro Hurt Sound 01. Pixabay.com. Retrieved June 22, 2026 from https://pixabay.com/sound-effects/retro-hurt-sound-01-474779/

[11] Sweetser, P. and Wyeth, P. 2005. GameFlow: A Model for Evaluating Player Enjoyment in Games. Computers in Entertainment 3, 3 (2005), 3:1–3:24. DOI:https://doi.org/10.1145/1077246.1077253