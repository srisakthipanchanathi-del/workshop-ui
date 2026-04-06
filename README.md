# FOSSEE Workshop Booking - React UI

Hi, I'm Sri Sakthi P, a first year student from VIT Chennai.
This is my submission for the FOSSEE Python screening task.
I redesigned the workshop booking portal frontend using React.

Honestly this was my first real project. I struggled a lot but
my interest in tech kept me going. I didn't even know what
BrowserRouter was when I started. By the end I understood how
routing works, why CSS class names need to match exactly, and
how to think in components.

## Setup Instructions

1. Clone this repo
   git clone https://github.com/srisakthipanchanathi-del/workshop-ui.git

2. Go into the project folder
   cd workshop-ui

3. Install packages
   npm install

4. Run the app
   npm start

5. Open http://localhost:3000 in your browser

## What I Built

- Navbar with hamburger menu that works on mobile
- Home page with hero section, stats, how it works, workshop cards
- Login page with form validation and error messages
- Register page with role selection for coordinator or instructor
- Footer component
- Fully responsive layout for mobile screens

## Design Principles

Since the task said students mostly use this on mobile, I made
mobile the priority. I kept each page focused on one thing - the
home page tells you what FOSSEE does, the register page signs you
up, the login page gets you in. No unnecessary elements.

I used green throughout because it matches FOSSEE's identity and
feels trustworthy. Kept font sizes readable on small screens and
made buttons large enough to tap easily.

## How I Handled Responsiveness

I used CSS media queries with a 768px breakpoint. The navbar
collapses into a hamburger menu on mobile - I controlled the
open/close state using useState in React. Stats go from one row
to a 2x2 grid on small screens. Workshop cards stack vertically.

I tested every page using Chrome DevTools device mode by switching
to different phone screen sizes.

## Trade-offs I Made

I used plain CSS instead of Tailwind or Bootstrap. It was slower
but I actually understood what every style was doing. Using a
library would have been faster but I wouldn't have learned as much.
For a first project I think understanding beats speed.

## The Hardest Part

The hamburger menu gave me a lot of trouble. The menu wasn't
disappearing on desktop even though I wrote display:none in CSS.
After a lot of debugging I found the problem - in Navbar.js I had
written className="hamburger" but in Navbar.css the selector was
.hamburger-btn. One word difference and nothing worked.

That bug taught me more about React and CSS than anything else.
Now I always double check that class names match exactly.

## What I Learned

- How React component structure works
- useState for handling menu toggle
- React Router for navigating between pages
- CSS media queries for responsive design
- How to debug by reading error messages carefully
- Git commits - making small commits for each feature
^O
## Why I Applied

I'm in my first year at VIT Chennai and I really want to build
real things, not just study theory. FOSSEE works on actual
technical projects that help people. I want to be part of that
and keep learning by doing.

I know I'm a fresher and there's a lot I don't know yet. But I'm
genuinely interested and I'll put in the work.

## Screenshots

### Before
The original site was built with Django HTML templates - 
basic styling, not mobile friendly, no component structure.
Original repo: https://github.com/FOSSEE/workshop_booking

### After - My React Redesign

## Screenshots
### Desktop - Home Page
![desktop home](screenshots/desktop-home.png)

### Desktop - Login Page
![desktop login](screenshots/desktop-login.png)

### Desktop - Register Page
![desktop register](screenshots/desktop-register.png)

### Mobile - Home Page
![mobile home](screenshots/mobile-home.png)

### Mobile - Home Page (Alt View)
![mobile home 2](screenshots/mobile-home2.png)

### Mobile - Register Page
![mobile register](screenshots/mobile-register.png)

