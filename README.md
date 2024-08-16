
# Coursework Evaluation Landing Page

## Project Overview

This project is a web application built for evaluating coursework. It provides an intuitive and visually appealing interface where users can upload their coursework and receive an instant evaluation. The application is developed using **Next.js 14**, **TailwindCSS**, **Zustand** for state management, and **Shadcn UI components**. The design and functionality closely resemble the "ZuAi" interface, aiming to offer a seamless user experience with features such as file upload, smooth animations, and user gratification elements.

## Features

1. **Coursework Submission and Evaluation**:
   - Users can select their course type, subject, and enter the essay title in the form.
   - Upon submission, a score is generated based on the evaluation of the form.
   - A congratulatory message is displayed if the user's score falls between 500 and 1000.

2. **File Upload**:
   - Users can upload their coursework via a drag-and-drop interface or manually from their system.
   - Uploaded files are stored locally, ensuring persistence across page reloads.

3. **Coursework List**:
   - A list of all coursework is displayed on the landing page.
   - Coursework can be filtered based on course type.

4. **Explore Coursework**:
   - An "Explore Coursework" section allows users to filter coursework based on course type.
   - Smooth transitions and animations enhance the user experience.

5. **State Management**:
   - Zustand is used for state management to handle form submissions and display the coursework list dynamically.
   - The state re-renders the screen and displays all coursework cards once the form is filled.

6. **User Interface and Experience**:
   - The application features smooth transitions between states and animations for user gratification.
   - Accessibility features include proper use of ARIA attributes and support for keyboard navigation.
   - Responsive design ensures usability across different devices and platforms.

7. **Data Management**:
   - Files and their metadata are saved locally, with options to clear local storage or individual files.
   - Data compression techniques are implemented for efficient storage and retrieval.

8. **Mock API Integration**:
   - The application integrates with a mock API to simulate server-side data persistence.

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/yourusername/zuai-coursework-landing.git

2. Navigate to the project directory:
   cd zuai-coursework-landing

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Design Decisions & Assumptions

- **Next.js 14** was chosen for its server-side rendering capabilities and flexibility in building dynamic web applications.
- **TailwindCSS** was used for styling due to its utility-first approach, enabling rapid UI development.
- **Zustand** was selected for state management because of its minimalistic API and ease of integration with React.
- **Shadcn UI components** were integrated to maintain consistency with the UI design and to leverage pre-built, customizable components.

## Challenges Faced

### 1. State Management with Zustand:
   - **Challenge**: Re-rendering the screen after form submission to display all coursework cards.
   - **Solution**: Implemented a global state using Zustand that triggers a re-render when the form is submitted, ensuring the UI reflects the latest data.

### 2. Responsive Design:
   - **Challenge**: Ensuring the interface remains responsive and visually appealing across different devices and screen sizes.
   - **Solution**: Used TailwindCSS's responsive utilities and media queries to create a fluid design that adapts to various screen dimensions.

### 3. UI/UX Consistency:
   - **Challenge**: Matching the interface design closely with the provided ZuAi mockup.
   - **Solution**: Leveraged Shadcn UI components and custom CSS to replicate the design accurately, ensuring a consistent user experience.

## Implemented Features & Bonus Points

- **Core Features**:
   - Coursework submission and evaluation form.
   - File upload (drag-and-drop and manual) with local storage.
   - Coursework listing with filtering capabilities.

- **Bonus Features**:
   - Smooth animations and user gratification elements.
   - Accessibility enhancements with ARIA attributes and keyboard navigation.
   - Mock API integration for simulating server-side persistence.
   - Data compression for efficient storage and retrieval.
