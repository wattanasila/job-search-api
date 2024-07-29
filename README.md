# job-search-api
Job Search Website

Web Live here : https://jobandjoin.onrender.com

Overview
This project is a web application developed using Express/Node.js that integrates with the Adzuna API to retrieve job listings. The application allows users to search for jobs based on location and other available filters, view job ads, and manage their own job postings within the application. Axios is used for making HTTP requests to the Adzuna API, and EJS is used for rendering dynamic content.

Objectives
API Integration: Learn how to work with the Adzuna API for retrieving job listings.
Server-Side Programming: Gain practical experience with Express/Node.js.
Client-Server Communication: Understand how to handle API requests and responses using Axios.
Data Handling: Demonstrate the ability to fetch, manipulate, and present data from the API.

Project Features
Job Listings: Retrieve and display job ads from the Adzuna API.
Search Functionality: Not allow users to search for jobs based on location and other available filters,but allow users to access for jobs based on location and other available filters, as Adzuna does not support searching by job title directly.
Job Posting: I created solution that users can post their own job ads, which are stored locally.
Edit/Delete Jobs: Provide functionality to edit and delete locally stored job postings.
User-Friendly Interface: Present data in an accessible and visually appealing manner using HTML, CSS, and EJS.
API Integration
The project integrates with the Adzuna API to fetch job listings. Key aspects include:

Job Listings: Retrieve job advertisements based on location and other available filters.
Employment Data: Access trends in salaries and vacancies for informational purposes.

How to Use
Setup: Clone the repository and install dependencies using npm install.
Configuration: Replace the placeholder API credentials in app.js with your own Adzuna API credentials.
Run: Start the server with npm start.
Access: Navigate to http://localhost:3000 in your browser to use the application.
Code Overview
app.js: Main server file where Express is configured, routes are defined, and API interactions occur.
views/: Contains EJS templates for rendering HTML pages.
public/: Static files such as CSS and JavaScript.

Example Usage
Homepage: Displays a welcome page.
Job Listings: /jobs - Lists job ads fetched from the Adzuna API based on location and other filters. Allows users to direct by location and other criteria (but not by job title).
Post Job: /post-job - Form to post a new job which is stored locally.
Edit Job: /edit-job/:id - Edit an existing locally stored job posting.
Delete Job: /delete-job/:id - Remove a locally stored job posting.

Error Handling
Errors are managed both for the application and API requests, ensuring users receive meaningful error messages when issues arise.

Documentation
The code includes comments explaining key functionality and logic. For more details on API endpoints and data formats, refer to the Adzuna API documentation.
<img width="931" alt="Screenshot 2024-07-29 162021" src="https://github.com/user-attachments/assets/aaa52784-cae5-4cc6-b21a-3091706c02b5">

<img width="932" alt="Screenshot 2024-07-29 161944" src="https://github.com/user-attachments/assets/f6e4f77d-d1f4-482a-9e3c-9d580535b98a">

<img width="926" alt="Screenshot 2024-07-29 161916" src="https://github.com/user-attachments/assets/1990524e-4cd5-41d4-8d15-3fd1b54679fd">


