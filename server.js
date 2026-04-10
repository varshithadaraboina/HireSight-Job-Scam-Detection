//Generate a Node.js backend using Express and CORS that runs on port 5000. 
// It should include: a GET ‘/’ route returning ‘HireSight Backend is Running 🚀’, 
// a POST ‘/analyze’ route that takes jobText and uses rule-based logic to calculate scam risk score 
// based on keywords like pay, fee, registration, earn per week, no experience, and gmail/yahoo emails, returning riskScore, riskLevel (Low/Medium/High), 
// and reasons; a GET ‘/company/:name’ route that checks company status from a predefined list (TCS as Verified, Infosys as Verified, FakeJobs Pvt Ltd as Reported as Scam, otherwise Unknown); 
// and a POST ‘/report’ route that validates jobTitle, companyName, description and returns a success message with report details. Use express.json() middleware and proper error handling.

const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Allow all requests (fixes connection issues)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HireSight Backend is Running 🚀");
});

// 🔍 Analyze Job
app.post("/analyze", (req, res) => {
  const { jobText } = req.body;

  if (!jobText) {
    return res.status(400).json({ error: "Job text is required" });
  }

  let score = 0;
  let reasons = [];
  const text = jobText.toLowerCase();

  if (text.includes("pay") || text.includes("fee") || text.includes("registration")) {
    score += 30;
    reasons.push("Asking for payment");
  }

  if (text.includes("earn") && text.includes("week")) {
    score += 25;
    reasons.push("Unrealistic salary offer");
  }

  if (text.includes("no experience")) {
    score += 15;
    reasons.push("No experience required");
  }

  if (text.includes("gmail") || text.includes("yahoo")) {
    score += 20;
    reasons.push("Unprofessional email domain");
  }

  let level = "Low";
  if (score > 60) level = "High";
  else if (score > 30) level = "Medium";

  res.json({
    riskScore: score,
    riskLevel: level,
    reasons: reasons.length ? reasons : ["No major issues detected"]
  });
});

// 🏢 Company Check
app.get("/company/:name", (req, res) => {
  const companyName = req.params.name.toLowerCase();

  const companies = [
    { name: "TCS", status: "Verified" },
    { name: "Infosys", status: "Verified" },
    { name: "FakeJobs Pvt Ltd", status: "Reported as Scam" }
  ];

  const company = companies.find(
    (c) => c.name.toLowerCase() === companyName
  );

  if (company) {
    res.json(company);
  } else {
    res.json({ name: req.params.name, status: "Unknown" });
  }
});

// 📩 Report Scam
app.post("/report", (req, res) => {
  const { jobTitle, companyName, description, evidence } = req.body;

  if (!jobTitle || !companyName || !description) {
    return res.status(400).json({ error: "All required fields must be filled" });
  }

  res.json({
    message: "Scam report submitted successfully",
    report: {
      id: 1,
      jobTitle,
      companyName,
      description,
      evidence
    }
  });
});

// 🚀 Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});