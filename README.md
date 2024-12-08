# job-search-api
**Job Search Website**

Web Live here : https://jobandjoin.onrender.com

**Overview**
This project is a web application built using Express/Node.js that integrates with the Adzuna API to provide job listings. Users can search for jobs based on location and filters, view job advertisements, and manage their own job postings locally. The application uses Axios for handling API requests and EJS for rendering dynamic, user-friendly content.

**Objectives**
This project aims to strengthen key technical skills, including:

- API Integration: Learn to work with the Adzuna API to retrieve and display job listings.
- Server-Side Programming: Gain hands-on experience with Express/Node.js for back-end development.
- Client-Server Communication: Understand how to handle API requests and responses using Axios.
- Data Handling: Demonstrate the ability to fetch, manipulate, and display job listing data.

**Project Features**
- Job Listings: Retrieve and display job ads from the Adzuna API based on location and other filters.
- Search Functionality: While users cannot search by job title (as Adzuna does not support title-based searches), users can search for jobs by location and filter them accordingly.
- Job Posting: Users can create their own job postings within the app, which are stored locally. These postings are fully searchable by title, unlike Adzuna's API data.
- Edit/Delete Jobs: Users can edit or delete their locally stored job postings as needed.
- User-Friendly Interface: Uses HTML, CSS, and EJS to ensure a clean, intuitive, and responsive user experience.

**API Integration**
The project integrates with the Adzuna API to provide job listings and employment data. Key aspects of the integration include:

- Job Listings: Retrieve job advertisements based on location and available filters.
- Employment Data: Access valuable insights, such as trends in salaries and job vacancies, for user reference.

**Note:** Due to the Adzuna API's limitations, users cannot search for jobs by job title. However, users can still search by location and filter by other available criteria. Locally created job postings, however, are fully searchable, including by title.

**How to Use**
1. Setup
   Clone the repository to your local machine.
   Run the following command to install dependencies:
   npm install

2. Configuration
   Replace the placeholder API credentials in app.js with your own Adzuna API credentials (app_id and app_key).

3. Run
   Start the server with:
   npm start

4. Access
   Open your browser and navigate to:
   http://localhost:3000

**Code Overview**
Project Structure

- app.js: The main server file where Express is configured, routes are defined, and API interactions occur.
- views/: Contains EJS templates used to render HTML pages for dynamic content.
- public/: Houses static files such as CSS, JavaScript, and images.

**Example Usage**
Here’s a guide on how users can interact with the application:

1. Homepage
URL: /
Displays a welcome page with navigation options.

2. Job Listings
URL: /jobs
Lists job ads fetched from the Adzuna API based on location and filters (title search is not supported for Adzuna API data).
Users can search for jobs by location and view job ads accordingly.

3. Post a Job
URL: /post-job
Provides a form for users to post their own job listings, which are stored locally.

4. Edit a Job
URL: /edit-job/:id
Allows users to edit an existing local job posting by updating its details.

5. Delete a Job
URL: /delete-job/:id
Enables users to delete a locally stored job posting.

**Error Handling**
The application ensures robust error handling to deliver clear feedback to users.

- API Errors: If an error occurs while communicating with the Adzuna API, users are notified of the issue (e.g., network issues, invalid API key).
- Application Errors: Errors caused by user input (e.g., missing required fields) are displayed with clear and actionable error messages.

**Documentation**
The code is well-documented with in-line comments to explain key logic, API requests, and core functions.
For more detailed information on API endpoints and response formats, refer to the official Adzuna API documentation.

<img width="926" alt="Screenshot 2024-07-29 161916" src="https://github.com/user-attachments/assets/1990524e-4cd5-41d4-8d15-3fd1b54679fd">

<img width="932" alt="Screenshot 2024-07-29 161944" src="https://github.com/user-attachments/assets/f6e4f77d-d1f4-482a-9e3c-9d580535b98a">

<img width="931" alt="Screenshot 2024-07-29 162021" src="https://github.com/user-attachments/assets/aaa52784-cae5-4cc6-b21a-3091706c02b5">


