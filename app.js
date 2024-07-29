import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// API credentials
const app_id = "7a1417f2";
const app_key = "7c4e66a0e2515974780ef9d9000e0b21";

// Temporary array to store posted jobs
let postedJobs = [];

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Function to fetch jobs from Adzuna API
const fetchJobs = async (params) => {
    try {
        const response = await axios.get("https://api.adzuna.com/v1/api/jobs/de/search/1", { params });
        return response.data.results || [];
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Unable to fetch job listings. Please try again later.");
    }
};

// Function to merge API jobs with posted jobs
const mergeJobs = (apiJobs) => {
    return apiJobs.concat(postedJobs.map(job => ({ ...job, isPosted: true })));
};

// Route for the homepage
app.get("/", (req, res) => {
    res.render("index");
});

// Route to display all jobs
app.get("/jobs", async (req, res) => {
    try {
        const jobs = mergeJobs(await fetchJobs({ app_id, app_key }));
        res.render("job_list", { jobs, error: null });
    } catch (error) {
        res.render("job_list", { jobs: postedJobs, error: error.message });
    }
});

// Route to search for jobs
app.post("/jobs", async (req, res) => {
    const query = req.body.query || "";
    const location = req.body.location || "Germany";
    const params = { app_id, app_key, what: query, where: location };

    try {
        const apiJobs = await fetchJobs(params);
        const jobs = mergeJobs(apiJobs);
        res.render("job_list", { jobs, error: null });
    } catch (error) {
        res.render("job_list", { jobs: postedJobs, error: error.message });
    }
});

// Route for displaying the job posting form
app.get("/post-job", (req, res) => {
    res.render("post_job");
});

// Route for posting a job
app.post("/post-job", (req, res) => {
    const { title, description, company, location } = req.body;

    if (!title || !description || !company || !location) {
        return res.redirect("/post-job");
    }

    const newJob = {
        id: Date.now(),
        title,
        description,
        company: { display_name: company },
        location: { display_name: location },
        redirect_url: "#",
        isPosted: true
    };

    postedJobs.push(newJob);
    res.redirect("/jobs");
});

// Route to edit a job
app.get("/edit-job/:id", (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    const job = postedJobs.find(j => j.id === jobId);
    if (job) {
        res.render("edit_job", { job });
    } else {
        res.redirect("/jobs");
    }
});

// Route for updating an edited job
app.post("/edit-job/:id", (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    const { title, description, company, location } = req.body;

    postedJobs = postedJobs.map(job =>
        job.id === jobId ? { ...job, title, description, company: { display_name: company }, location: { display_name: location } } : job
    );

    res.redirect("/jobs");
});

// Route to delete a job
app.post("/delete-job/:id", (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    postedJobs = postedJobs.filter(job => job.id !== jobId);
    res.redirect("/jobs");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});