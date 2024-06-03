# Personal Portfolio

Welcome to my Personal Portfolio project! This web application showcases my skills, projects, and experience. It is built using React and deployed on Netlify.

## Project Deployed in: 
check this website on netlify: [Personal Portfolio](https://shahriaralviportfolio.netlify.app/).

## Features

### Introduction Section
- **Functionality**: Displays a brief introduction including name, professional title, and a welcome message.
- **Components**: `Intro.js`
- **Purpose**: Provides a quick overview to visitors about who you are.

### About Section
- **Functionality**: Contains detailed information about your background, skills, and interests.
- **Components**: `About.js`
- **Purpose**: Allows visitors to learn more about your professional journey and expertise.

### Projects Section
- **Functionality**: Showcases various projects with descriptions, technologies used, and links to live demos or repositories.
- **Components**: `Projects.js`
- **Purpose**: Demonstrates your work and technical skills through real projects.

### Contact Section
- **Functionality**: Includes a contact form where visitors can send you messages.
- **Components**: `Contact.js`
- **Purpose**: Provides a way for potential employers or collaborators to get in touch with you.
- **Backend**: `server.js` (Handles form submissions)

### Navigation
- **Functionality**: Provides smooth navigation between different sections of the site.
- **Components**: `Header.js`
- **Purpose**: Enhances user experience with easy access to all parts of the portfolio.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js (for handling form submissions and serving the React app)
- **Deployment**: Netlify

## Project Structure

```
Personal-Portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Intro.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── serviceWorker.js
├── server.js
├── package.json
└── README.md
```

- **public/**: Contains static files like `index.html`, images, and icons.
- **src/**: Contains all the source code for the React application.
  - **components/**: Houses all React components used in the app.
    - **Header.js**: Contains the navigation bar.
    - **Intro.js**: Manages the introduction section.
    - **About.js**: Contains the about section details.
    - **Projects.js**: Displays the projects section.
    - **Contact.js**: Manages the contact form.
  - **App.js**: The main React component that aggregates all other components.
  - **index.js**: The entry point of the React application.
  - **serviceWorker.js**: For enabling offline support and faster load times.
- **server.js**: Handles backend operations, such as serving the React app and form submissions.
- **package.json**: Lists the project dependencies and scripts for building and running the project.

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ShahriarAlvi/Personal-Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Personal-Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

Open `http://localhost:3000` in your browser to view the application. You can explore different sections like Introduction, About, Projects, and Contact.

## Deployment

This project is deployed on Netlify. Any changes pushed to the main branch are automatically deployed.
