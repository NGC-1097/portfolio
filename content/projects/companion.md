---
title: Study Buddy
subtitle: A physical robot companion that helps students stay focused by removing phone distraction and replacing it with a calming, voice-activated study presence.
year: 2025
role: Electronics Designer, Firmware & Software Developer
team: 4
technologies: [Raspberry Pi 5, Arduino Uno, Python, Pygame, Whisper, Kokoro TTS, Ollama, DeepSeek, Porcupine, Flask, SG90 Servo, I2S Microphone, Laser Cutting, 3D Printing]
cover: /projects/companion/cover.jpeg
model: /models/cbl2/CBL2.gltf
gallery:
    - /projects/companion/1.jpeg 
    - /projects/companion/2.jpeg 
    - /projects/companion/3.jpeg 
    - /projects/companion/4.jpeg 
    - /projects/companion/5.jpeg 
    - /projects/companion/6.jpeg 
    - /projects/companion/7.jpeg 
    - /projects/companion/8.jpeg 
    - /projects/companion/9.jpeg 
    - /projects/companion/10.jpeg 
status: complete
featured: true
order: 2
---

## Overview

Study Buddy is a physical robot companion designed to help students stay focused during study sessions. The core interaction is intentionally simple: placing your phone in the back pocket of the robot removes it from sight, starts a Pomodoro timer, and hands focus back to the student. A lotus-inspired flower on top opens when it is time to study and closes when it is time to take a break.

The blue arm on the side acts as a lever. Pushing it down adds five minutes to the current session; pushing it up pauses and resumes the timer. If the phone is removed outside of a break, the robot responds with a sad expression and begins a five-minute countdown before shutting down, gently discouraging distraction rather than punishing it.

For study questions, saying "Hey Study Buddy" activates a voice-activated LLM that answers curriculum-related queries in real time without the student needing to pick up their phone or open a laptop.

The design is deliberately minimal: no bright notifications, no demanding interface. Facial expressions on the screen communicate the robot's state in a non-invasive way, and the colour palette is chosen to promote calm focus.

The project ran in Q3 and Q4 of the 2024-2025 academic year at TU/e as part of the DPB110 Challenge-Based Learning program, with teammates Isla McCarthy, Francesca Lasic, and Emilija Mantilė Vėgėlytė.

## My Role

I was responsible for the full technical stack, from component selection to final assembly. This included:

- Electronics selection, wiring, and component integration across the Raspberry Pi 5 and Arduino Uno
- Writing the Python agent code running on the Pi, including emotion display, LLM integration, and speech pipeline
- Robot body modelling and panelisation for laser cutting
- 3D printing the feet, arm iterations, and final arms
- Laser cutting and assembling the robot's body panels
- Soldering all components together for the final prototype

## Research and Design Process

### Process

The team followed the RTDP framework (Research, Test, Design, Prototype), mapping each phase with divergent and convergent thinking. We started from a mind-mapping exercise walking through a student's day to identify where a robot companion could genuinely add value, then narrowed to a shortlist of ideas based on passion and technical feasibility.

A user questionnaire with 28 respondents confirmed that phone distraction was the number one study concern, and that the Pomodoro technique was the most preferred time management method among participants. These two findings directly shaped the product.

Design decisions were iterated through two silent critique sessions, where peers and coaches voted on specific choices: flower petal opacity (we landed on outer transparent, inner opaque), arm interaction method (elastic lever won over a button), and body colour (white with blue frames, combining the top two votes).

### Key design decisions

After the midterm demo day we simplified significantly. The air quality sensor and its LED feedback strip were removed as the least critical environment metric for short study sessions. The handheld flower desk lamp was removed to avoid interfering with the light sensor. Wireless phone charging was dropped in favour of a light gate, which proved more reliable for detecting phone presence. A 3D-printed linear actuator was swapped for a laser-cut equivalent with smoother movement.

The lotus flower shape was chosen intentionally: it symbolises growth, clarity, and rising above challenges, a fitting metaphor for a study companion.

Adding a screen was a design tension we did not resolve well. The screen provides expressive eyes that build trust and emotional connection, but a coach correctly pointed out that we had designed something to reduce screen time and then added a screen. That critique was repeated at Demo Day. It is the most honest area for reflection in the project.

### Persona

Kayla Thompson, an 18-year-old first-year psychology student, served as our primary persona. She is ambitious but easily overwhelmed, frequently loses study time to TikTok, and experiences headaches from poor lighting and noise in her room. Study Buddy addresses the distraction and environment concerns without demanding behavioural change through willpower alone.

## Technical Design

### System overview

The system splits responsibility between two processors:

**Raspberry Pi 5** handles all high-level logic: running the main Python script, processing audio from the I2S microphone, rendering Pygame eye animations to the HDMI screen, running the Kokoro TTS engine, and communicating with a home PC server for Whisper transcription and LLM queries. The Pi 5 was chosen specifically for its native I2S audio support and its ability to run Pygame animations without latency.

**Arduino Uno** handles real-time hardware control: reading the light gate sensor to detect phone presence, driving the SG90 servo motor that opens and closes the flower, and reading the potentiometer in the arm joint to detect lever position. Offloading these tasks to the Arduino keeps the Pi's main loop clean and ensures the physical mechanisms remain responsive.

### Sensors and actuators

- **INMP441 I2S microphone:** Digital microphone connected directly to the Pi's GPIO via I2S, avoiding the need for an external ADC and improving signal fidelity. Frequency response 60-15,000Hz.
- **Light gate sensor:** Optical sensor providing a binary high/low output to the Arduino, used to detect whether the phone is in the backpack pocket. Chosen for simplicity and reliability over wireless charging detection.
- **SG90 servo motor:** PWM-controlled servo driving the lotus flower open and closed. 0-180 degree range, 5V operation, controlled via the Arduino.
- **Potentiometer in arm joint:** Analog angle sensor embedded in the arm, read by the Arduino to detect lever direction (push down to add time, push up to pause/resume).
- **7-inch 1024x600 HDMI screen:** Displays animated eye expressions via Pygame. Size chosen for visual presence without being cumbersome.
- **2x speakers with TPA3116D2 amplifier:** The Pi's native audio output is insufficient to drive speakers effectively, so the signal is routed through a Class D amplifier delivering up to 50W per channel. Clean audio was important for the TTS voice to feel natural and companionable.

### Software pipeline

The voice interaction pipeline went through two major iterations. The initial `SpeechToTextBasic` class using raw Whisper worked well in quiet environments but broke down in the noisy demo day booth. The final `SpeechToTextRobust` class added:

- Spectral gating using STFT to estimate and suppress the noise floor
- Dynamic range compression to even out volume differences
- Speech frequency enhancement boosting 300Hz-3400Hz, where human voice concentrates
- Whisper parameter tuning with lower detection thresholds and booth-specific prompts
- Post-processing to strip filler words and non-English artefacts

For speech output, the Kokoro-82M TTS engine runs locally on the Pi, producing natural-sounding audio without cloud dependency or latency. For LLM queries, the Pi offloads processing to a Flask server running on a home PC, which runs DeepSeek via Ollama locally with OpenAI as a cloud fallback. This architecture was chosen after testing showed the Pi 5 could not transcribe speech in real time while also running the rest of the application.

Wake word detection uses the Porcupine engine with a custom "Hey Study Buddy" keyword file, running continuously in a streaming audio loop without blocking the main thread.

The eye animation system was initially written in Turtle graphics but replaced with Pygame for the final version. Turtle caused asynchronous blinking where one eye closed before the other. Pygame allowed both eyes to update in a single frame, and also made it straightforward to integrate the `EmotionDisplay` class as part of the main application loop. Expressions implemented: neutral, happy, sad, angry, surprised, tired, asleep, love, and winky, each with automatic blinking at three-second intervals.

Arduino state messages are received over USB serial and mapped to emotional responses via a state machine in the `ArduinoMonitor` class. Phone detected triggers neutral (study mode). Phone removed triggers sad. Session complete triggers love eyes. Lever down triggers happy. Idle state after ten seconds without activity triggers asleep.

### Physical construction

The robot body was laser-cut from wood panels. The feet and arms were 3D printed through several iterations before reaching the final geometry. The flower petals were vacuum-formed plastic over foam molds, with outer petals left semi-transparent and inner petals opaque to add visual depth when the flower opens and closes. The speakers are down-firing, housed at the base of the body.

## Outcome

Study Buddy was presented at the TU/e Demo Day showcase. The interaction model was understood immediately by visitors: dock your phone, watch the flower, ask questions by voice. The team received positive feedback on hardware quality and the expressiveness of the eye system.

The main critique received, both from coaches during the process and from visitors at Demo Day, was the tension between the product's goal of reducing screen dependence and the addition of a large screen with human-like eyes. It is a valid critique we should have addressed more directly during development.

### Key learnings

- Offloading real-time hardware control to a dedicated microcontroller keeps the main application loop stable and responsive, particularly when the primary processor is handling audio and graphics simultaneously
- Audio problems are far easier to solve in the frequency domain: spectral gating, dynamic range compression, and bandpass filtering resolved recognition failures that no amount of Whisper parameter tuning could fix alone
- Vacuum-formed plastic petals were a better solution than 3D-printed or wire-based alternatives, discovered through a suggestion from another student in the workshop
- A screen that expresses emotion creates trust and engagement, but when the product goal is to reduce screen reliance, that design choice needs to be challenged explicitly rather than accepted as a given
- Joining a team of three late in a sprint causes real friction; the fourth member joining mid-project was the main reason the team felt behind on high-fidelity prototyping
