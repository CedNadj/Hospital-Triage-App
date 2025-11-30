# Hospital Triage App Design Document

# Team Information
**Team members Name**: Cedric Nadjibé and Lucas Muteta

## Design Overview
The Hospital Triage App will provide an intuitive interface for both patients and administrative staff to manage and navigate through the emergency room process. The design will focus on ease of use, accessibility, and efficiency.

## Fonts
- **Lato Bold**: Utilized for all headings, button labels, and high-visibility interface elements. Its smooth, semi-rounded letterforms provide a modern and approachable look, while maintaining excellent readability across mobile and desktop screens. This makes it ideal for patients and staff interacting with the Grey Sloan Memorial system under stress.
- **Lato Regular**: Employed for all body text, instructions, form descriptions, and patient questionnaire content. The balanced proportions and open counters of Lato create a comfortable reading experience, supporting clarity during data entry and triage operations.

## Colour Palette
- **User Interface**:
    - **Calming Light Blue (#4F8CF7)**: Used for primary buttons and highlighs to create a reassuring, friendly environment.
    - **Soft Grey (#F7F9B)**: Used to minimizes visual strain and keeps focus on the form elements.
    - **Dark (#111111)**: Used for high contrast to ensure readability for all ages and devices.
- **Admin Interface**:
    - **Clean Neutral White (#FFFFFF)**: Provides maximum clarity for table-heavy data screens.
    - **Table Heder Grey (#E6EEF8)**: Subtle separation for structure and scanning.
    - **Red (#FF4CAC)**: Used exclusively for critical triage levels.
    - **Green (#3CB371)**: Used to signal successful actions and stable patient status.
    - **Yellow (#FFD700)**: Used for communicates caution.

## App Components
- **Titles**: "Grey Sloan Memorial - User" for the patient interface and "Grey Sloan Memorial - Admin" for the administrative interface, prominently displayed in Arial.
- **Buttons**: Rectangular with rounded edges, colored according to the page-specific palette, and featuring a bold, legible font.
  : Buttons follow the page-specific color palette (e.g., calming tones for patients, strong constrating tones for admin).
  : All buttons use a clear, bold, highly legible font to ensure visibility in stressful environments.
  : Hover, active, and disabled states are defined to improve user's feedback and accessibility.
  - **Input Fields**: Clean, outlined fields wiht ample padding for comfort and ease of use.
  : Placeholder text provides clear examples (e.g., "Enter your full name").
  : Inputs adapt to mobile and desktop layouts, maintaining readability across different screen sizes.
  : Designed to feel simple, calm, and intuitive for a potentially stressed patient.
  - **Patient Questionnaire**: A structured, easy-to-complete form that collects: Patient Name; 3-Letter Short Code; Injury Type; Pain Level (1-10).
  : All elements are visually grouped with consistent spacing and aligned using a simple grid to reduce cognitive load.
  : The design prioritizes clarity, speed, and accessibility, ensuring the patient can submit their information quickly and confidently.
  - **Admin Summary**: A professionally arranged dashboard themed after Grey Sloan Memorial branding.
  : Displays the patient waitlist; severity levels; estimated wait times; selected patient details.
  : The layout emphasizes efficient traige management, quick decision-making, and high information visibility.
  : Interactive controls ("Increase Attention", "Decrease Attention", "Remove Patient") are styled with clear color logic for urgency.
  : The layout emphasizes efficient traige management, quick decision-making, and high information visibility.
  - **About**: Everything to know about the hospital's goals, missions, and achievements.

## Layout and Navigation
- The Grey Sloan Memorial traige system uses a reponsive, grid-based layout that adapts seamlessly to all devices, maintaining clarity and usability whether accessed on mobile, table, or desktop.
- The design follows a mobile-first approach, ensuring patients and staff can interact with the system quickly, even in fast-moving emergnecy situations.
- Navigation is kept simple and predictable:
    - On mobile, a fixed bottom action bar is used to keep essential actions within thumb reach.
    - On desktop and larger screens, a structured top navigation bar organizes key sections clearly, providing hospital-grade efficiency and reducing cognitive loads.

## Consistency
- A shared component library (buttons, cards, forms, alerts).
- The color palletes across all pages.
- Identical header/navigation layout across all pages.
- The buttons are spaced, aligned, and component structure.

## Component Integration
- All interface elements on the User Page - titles, descriptive text, input fields, and the patient quesionnaire - are intergrated within a clear and organized structure, designed to support quick patient entry and reduce confusion during stressful moments.
- On the Admin Page, the Grey Sloan Memorial dashboard combines:
    - Patient waitlist table
    - Severity indicators
    - Selected patient details
    - Priority-adjustment controls.

## Functionality
- The Grey Sloan Memorial triage app is designed to handle high-pressure emergency situations efficiently.
- It allwos patients to submit their information quickly, while staff can evaluate, prioritize, and update cases in real time.
- The overal design focuses on:
    - Clarity (no visual noise, easy scanning)
    - Speed (fast data input and quick access to actions)
    - Accurancy (clear color coding, strong visual hierarchy)