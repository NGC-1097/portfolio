---
title: Melodoodle
subtitle: A physical–digital musical game where players draw chalk patterns on the ground and step on colors to create music, combining movement, creativity, and sound.
year: 2024
role: Electronics Designer & Firmware Developer
team: 5
technologies: [ESP32-S3, C/C++, Arduino, Bluetooth, VEML6040, VCNL4040, PCB Design, KiCad]
cover: /projects/melodoodle/cbl1-thumbnail.jpeg
gallery:
  - /projects/melodoodle/final.jpg
  - /projects/melodoodle/1.jpeg
  - /projects/melodoodle/ideation.jpeg
  - /projects/melodoodle/gallery-1.jpeg
  - /projects/melodoodle/gallery-2.jpeg
  - /projects/melodoodle/gallery-3.jpeg
  - /projects/melodoodle/gallery-4.jpeg
  - /projects/melodoodle/gallery-5.jpeg
  - /projects/melodoodle/gallery-6.jpeg
status: complete
featured: true
order: 1
---

## Overview

Melodoodle is a physical–digital educational game designed for children, developed as part of the DPB110 Challenge-Based Learning program at Eindhoven University of Technology (2024–2025, Semester A). The design brief was to create a physical–digital hybrid educational game; our team identified a gap in the market for music education that is engaging, active, and social rather than screen-bound and passive.

The concept draws on the childhood game of hopscotch. Players use colored chalk to draw their own patterns on any flat surface, where each color maps to a musical note. A wearable device strapped to the foot reads the chalk color underfoot using a color sensor and plays the corresponding note in real time, while a companion phone app handles song selection, scoring, and multiplayer coordination. The result is a game where drawing, jumping, and music-making are inseparable.

The project ran from September 2024 to February 2025 with a team of five: Ballaj Shah, Francesca Lasic, Leen Fathelrahman, Robert Braun, and Robert Lazar.

## My Role

I was responsible for the full electronics stack, from component selection through to firmware running on the final PCB. This included:

- Selecting and integrating the **VEML6040** (ambient color) and **VCNL4040** (proximity) sensors as a consolidated solution in place of separate RGB and proximity modules considered earlier
- Designing a custom two-layer PCB around the **ESP32-S3** module, with filtered sensor input, optimized antenna placement, onboard LiPo charging with thermal management, USB-C protection circuitry, and EMI reduction via ferrite beads
- Choosing a compact **1.28" round GC9A01 LCD** over a larger display to keep the form factor wearable and reduce power draw
- Writing the C/C++ firmware for sensor reading, BLE data transmission, LED feedback, and audio output
- Coordinating the hardware–software interface with the team's interaction designer and app developer

I also built the early breadboard demonstrator used in the Best Idea Bananza showcase, which was the first working proof of the color-sensing audio concept and won that activity.

## Research & Ideation

### Design process

The team followed a Double Diamond process, drawing on Human-Centered Design principles from Tim Brown's *Change by Design* and the *Interaction Design* textbook by Rogers, Sharp & Preece.

We generated around 51 initial concepts in open divergent sessions before converging on a shortlist of 20. Rejected concepts included **ArtiQuest** (QR codes on public artworks, too screen-focused and solitary) and **Senso Chess** (sensor-embedded chess pieces, too static and not physically energetic enough). The hopscotch-inspired music game resonated most strongly, both for its physical engagement and for preserving the freeform "doodling" spirit we wanted.

### User research

We conducted structured interviews with potential users, using simple and focused questions based on best practices from Rogers, Sharp & Preece. Key questions covered gaming habits, attitudes toward movement-based play, the value of co-located multiplayer, and comfort with a wearable sensor. Findings confirmed that:

- Mixing physical movement with music creation was broadly appealing, aligning with Jensen (2000) on body-based learning and Moreno et al. (2011) on early music exposure.
- Cooperative play was preferred over competitive; participants felt group modes produced better learning outcomes (Johnson & Johnson, 1989).
- The device needed to be lightweight, secure, and require no lengthy setup.

We also consulted research on gamification in music education (Reinhardt, 2019) and digital game-based music learning (Tobias, 2012), which gave confidence that marrying movement, music, and digital feedback was an established pedagogical approach, not merely a novelty.

### Personas

Three personas shaped design decisions throughout:

- **Daniel (28, elementary school teacher):** needed easy setup, curriculum alignment, durability, and a feedback system students could follow independently.
- **Angela (32, parent):** wanted a safe outdoor-friendly product with no long instructions, physical activity, and social play.
- **Damin (8, student):** wanted creative freedom, instant rewards, and a game easy enough to jump into without feeling left out.

## Technical Design & Realization

### Game concept and modes

Rather than using pressure-sensitive pads (which would have constrained creative layouts), we chose a wearable foot device with a color sensor, letting players draw any shape in any size as long as it has color. This preserved the open-ended "doodling" aspect central to the concept.

The final game supports four modes:

- **Single Player:** practice solo, improving accuracy and timing against a chosen song.
- **Same Setting Co-Op:** players in the same physical space team up to perform a song together.
- **Different Setting Challenge:** players in separate locations compete on a shared leaderboard.
- **Composer:** create, edit, and save original songs for future play.

### Electronics

Three hardware iterations:

- **Breadboard prototype:** validated the color sensor and BLE pipeline; exposed noise issues under ambient light that were addressed in hardware rather than software.
- **Perfboard + 3D printed enclosure:** tested form factor with real users; identified that grip diameter, button placement, and foot attachment method were critical.
- **Custom PCB (final):** two-layer board integrating the ESP32-S3, VEML6040, VCNL4040, GC9A01 LCD, audio amplifier with EMI filtering, and onboard LiPo charging. The elastic band attachment from iteration two was replaced with a shoelace mount for a more secure fit, and the underside was molded to match shoe geometry.

### Phone App

The companion app was built using **bolt.new**, an AI-assisted web app builder, allowing the team to produce a high-fidelity working interface without deep web development expertise. The app handles instrument selection, song library browsing, real-time score feedback, and multiplayer session management. The UI reflects the colorful aesthetic of the game and was designed to be immediately legible to children.

### Box Design

The game packaging takes the shape of a grand piano, reinforcing the musical theme and designed to excite children before they even open it. An initial card-and-hot-glue prototype proved the concept; a refined second iteration used higher-quality materials with dedicated compartments for the wearable device, chalk, the game manual, and a game modes booklet.

## Outcome

The final prototype was presented at the TU/e Design United showcase. Both players understood how to interact with it immediately. No explanation needed. The team received commendation for hardware quality and responsiveness.

### Key learnings

- Fixing sensor noise at the hardware level (filtered inputs, component placement) is far cheaper than compensating in firmware
- Rapid 3D-printed enclosure iteration saved significant time over machined alternatives and produced direct user feedback on ergonomics
- Writing firmware in modular, testable functions made integrating teammates' code straightforward
- Combining color sensor and proximity detection in a single consolidated component (VEML6040 + VCNL4040) simplified the PCB layout and improved reliability over separate modules
