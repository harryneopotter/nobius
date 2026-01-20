# Guide: Creating a High-End Promotional Video for Nobius Audio S1-2

## Introduction

This document provides a detailed, step-by-step walkthrough for creating a sophisticated 30-45 second promotional video for the Nobius S1-2 speakers. This guide is designed for users who may be new to AI content creation tools and assumes you have access to Google's experimental suite, including **Google Whisk** (for image generation) and **Google Flow** (for AI filmmaking), as well as the **Nano Banana** toolkit.

**Our Goal:** To produce a classy, minimalist video that tells a story of craftsmanship and refined sound, appealing directly to a high-end market.

**Our Assets:**
*   Product Images: `@S1-2-pair.png`, `@S1-2-single.png`
*   Logo: `@nobius logo.png`
*   Product Details: `@Nobius-s1-2.md`

---

## Phase 1: Pre-Production & Concept

Before we touch any tools, we need a solid plan.

### 1.1 The Storyboard

This is the blueprint for our video. We'll follow this structure precisely.

| Scene # | Scene Name          | Duration | Visuals                                                                  | On-Screen Text (Font: Clean, Sans-serif)      |
| :------ | :------------------ | :------- | :----------------------------------------------------------------------- | :-------------------------------------------- |
| 1       | The Craft           | 5 sec    | Artistic cross-fade of macro/abstract shots (wood grain, circuits).      | "Honest Sound. Refined Performance."          |
| 2       | The Form            | 7 sec    | Slow orbital shot of a single speaker, followed by the pair sliding in.  | "Sealed Cabinet Architecture."                |
| 3       | The Environment     | 4 sec    | Speakers shown in a beautiful, minimalist desktop setting.               | "Designed for the Nearfield."                 |
| 4       | The Sound (Abstract)| 6 sec    | Montage of elegant animations representing key audio features.           | "Phase-Coherent Crossover."                   |
| 5       | The Brand           | 5 sec    | Logo fades in on a clean black background, followed by the tagline.      | "Nobius Audio" (from logo) + tagline below    |

### 1.2 Music Selection

Music choice is critical. It sets the entire mood. We need something that is sophisticated, minimalist, and well-recorded.

1.  **Action:** Navigate to a royalty-free music website (e.g., Bensound, Artlist, Uppbeat).
2.  **Search:** Use search terms like `"minimalist instrumental"`, `"sophisticated chill-hop"`, or `"ambient electronic"`.
3.  **Listen & Select:** Choose a track that feels calm and detailed, not distracting. It should complement the visuals, not overpower them.
4.  **Download:** Download the high-quality WAV or MP3 file and save it in your project folder. We'll refer to it as `music.mp3`.

---

## Phase 2: Generating Your Visual Assets

Here, we create the raw visual ingredients for our video.

### 2.1 The Craft Visuals (Google Whisk)

**Goal:** Create artistic shots that evoke craftsmanship.

1.  Navigate to the **Google Whisk** website/application.
2.  Click **"New Project"**. You should see a main canvas and a prompt area.
3.  In the "Visual Reference" or "Image Prompt" panel, click **"Upload"** and select `S1-2-single.png`. This tells Whisk what your subject is.
4.  **Generate Image 1:** In the main text prompt field, type:
    ```
    Generate a macro shot of soft light tracing the fine wood grain texture of the speaker cabinet, with an extremely shallow depth of field.
    ```
5.  Click the **"Generate"** button. Once finished, save the result as `craft_woodgrain.png`.
6.  **Generate Image 2:** Clear the prompt and type:
    ```
    Create an image of a pristine craftsman's workbench with precision calipers and electronic components, with the speaker softly out of focus in the background. Moody, atmospheric lighting.
    ```
7.  Click **"Generate"** and save the result as `craft_workbench.png`.
8.  **Generate Image 3:** Clear the prompt and type:
    ```
    An artistic shot of a clean, glowing sound wave made of light, reflecting off the surface of the black speaker cone.
    ```
9.  Click **"Generate"** and save the result as `craft_soundwave.png`.

### 2.2 The Form Animations (Google Flow)

**Goal:** Turn our static product shots into dynamic video clips.

1.  Open the **Google Flow** application.
2.  Click **"New Project"**. This will likely open a new workspace with an asset library and a timeline.
3.  In the **"Asset Library"** or **"Media Bin"** panel, click **"Import"** and select `S1-2-single.png` and `S1-2-pair.png`.
4.  **Generate Clip 1 (Orbital Shot):**
    *   In Flow's main prompt bar, type:
        ```
        Using the image @S1-2-single.png, create a slow, 3-second cinematic orbital shot around the speaker on a clean, dark grey studio background.
        ```
    *   Click **"Generate"**. Flow will process this and add `orbital_shot.mp4` to your Asset Library.
5.  **Generate Clip 2 (Pair Slide-in):**
    *   Clear the prompt and type:
        ```
        From the image @S1-2-pair.png, generate a 4-second video where the two speakers slide smoothly into the frame from opposite sides, coming to a gentle stop in their final position. Use motion blur for a professional feel.
        ```
    *   Click **"Generate"**. This will add `pair_slide_in.mp4` to your Asset Library.

### 2.3 The Environment Shot (Google Whisk)

1.  Go back to **Google Whisk**.
2.  Upload `S1-2-pair.png` as the new visual reference.
3.  In the main prompt field, type:
    ```
    Create a photorealistic image of a minimalist, beautifully lit home office desk made of walnut wood. The speakers from the reference image are placed perfectly on either side of a sleek, modern laptop. The mood is calm and focused.
    ```
4.  Click **"Generate"** and save the stunning result as `env_desktop.png`.

### 2.4 The Sound Visuals (Nano Banana & Google Flow)

1.  **(Optional) Technical Diagram (Nano Banana):**
    *   Open the **Nano Banana** toolkit from your command line or application menu.
    *   Use the `/diagram` command:
        ```
        /diagram prompt:"A minimalist and clean technical diagram comparing a 'sealed acoustic suspension' speaker design with a 'bass-reflex ported' design. Use simple lines and labels." type:architecture style:technical
        ```
    *   Save the output as `diagram_sealed.png`.
2.  **Abstract Animations (Google Flow):**
    *   Go back to your **Google Flow** project.
    *   Import `diagram_sealed.png` into your Asset Library if you created it.
    *   Use the prompt bar to generate the following clips, which will be added to your library:
        *   `"Generate a beautiful, flowing animation of two perfect, intertwined sine waves made of white light moving across a black screen. This should visually represent a 'Phase-Coherent Crossover'."` -> `anim_phase.mp4`
        *   `"Create an abstract visualizer with a soft, warm, amber-colored glow that subtly pulses around the 80-120 Hz frequency area of a spectrum analyzer, representing the gentle warmth contour."` -> `anim_warmth.mp4`

### 2.5 The Brand Animation (Google Flow)

1.  In your **Google Flow** project, import `nobius logo.png` into your Asset Library.
2.  In the prompt bar, type:
    ```
    Using the image @nobius logo.png, create a 4-second animation where the logo gently and smoothly fades into view on a black background.
    ```
3.  Click **"Generate"**. This adds `logo_fade_in.mp4` to your Asset Library.

---

## Phase 3: Assembling the Video in Google Flow

This is where we bring everything together on the timeline.

1.  **Open Your Google Flow Project.** Your Asset Library should now contain all the `.png` and `.mp4` files we just created.
2.  **Drag assets to the timeline** in the following order. The timeline is typically at the bottom of the screen, with video and audio tracks.

    *   **Scene 1: The Craft**
        1.  Drag `craft_woodgrain.png`, `craft_workbench.png`, and `craft_soundwave.png` onto Video Track 1.
        2.  Adjust the duration of each image clip to be ~1.7 seconds.
        3.  In the "Transitions" tab, drag a **"Cross Dissolve"** transition between each clip.
        4.  Click the **"Add Text"** or **"T"** icon. A text layer will appear above your video track.
        5.  Position the text layer to span this 5-second scene. In the "Text Inspector" panel, type: `Honest Sound. Refined Performance.` Choose a simple, elegant font.

    *   **Scene 2: The Form**
        1.  Drag `orbital_shot.mp4` and then `pair_slide_in.mp4` onto the timeline after Scene 1.
        2.  Add a new Text Layer over the `orbital_shot.mp4` clip. In the inspector, type: `Sealed Cabinet Architecture.`

    *   **Scene 3: The Environment**
        1.  Drag `env_desktop.png` onto the timeline. Adjust its duration to 4 seconds.
        2.  Add a Text Layer. Type: `Designed for the Nearfield.`

    *   **Scene 4: The Sound**
        1.  Drag `anim_phase.mp4` and `anim_warmth.mp4` onto the timeline. Adjust them to be 3 seconds each.
        2.  Add a Text Layer over `anim_phase.mp4`. Type: `Phase-Coherent Crossover.`

    *   **Scene 5: The Brand**
        1.  Drag `logo_fade_in.mp4` to the end of the timeline.
        2.  Add a final Text Layer below the logo. Type the tagline: `Honest sound for honest listeners.`

---

## Phase 4: Audio & Final Polish

1.  **Import and Add Music:**
    1.  In the **Asset Library**, click **"Import"** and select the `music.mp3` file you downloaded.
    2.  Drag `music.mp3` from the library onto the **"Audio 1"** track in your timeline.
    3.  Align the start of the audio clip with the start of the video.
    4.  Drag the end of the audio clip to match the end of the video. In the "Audio Inspector" panel, enable a **"Fade Out"** effect for the last 2 seconds.

2.  **Final Review and Render:**
    1.  Click the **"Play"** button to watch your entire video from the beginning. Check the pacing, ensure text is readable, and that transitions are smooth.
    2.  When you are satisfied, locate the **"Export"** or **"Render"** button, usually in the top-right corner of the application.
    3.  Choose the following settings:
        *   **Resolution:** 4K UHD (3840x2160)
        *   **Quality/Bitrate:** High
        *   **Format:** MP4
    4.  Click **"Start Render"**.

You have now successfully created a professional, high-end promotional video for the Nobius S1-2 speakers using a suite of advanced AI tools.
