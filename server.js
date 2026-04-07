//Generate a Node.js backend using Express and CORS that runs on port 5000. 
// It should include: a GET ‘/’ route returning ‘HireSight Backend is Running 🚀’, 
// a POST ‘/analyze’ route that takes jobText and uses rule-based logic to calculate scam risk score 
// based on keywords like pay, fee, registration, earn per week, no experience, and gmail/yahoo emails, returning riskScore, riskLevel (Low/Medium/High), 
// and reasons; a GET ‘/company/:name’ route that checks company status from a predefined list (TCS as Verified, Infosys as Verified, FakeJobs Pvt Ltd as Reported as Scam, otherwise Unknown); 
// and a POST ‘/report’ route that validates jobTitle, companyName, description and returns a success message with report details. Use express.json() middleware and proper error handling.

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;  

app.use(cors());
app.use(express.json());

// GET '/' route
app.get('/', (req, res) => {
    res.send('HireSight Backend is Running 🚀');
});
// POST '/analyze' route  
app.post('/analyze', (req, res) => {
    const { jobText } = req.body; 
    if (!jobText) {
        return res.status(400).json({ error: 'jobText is required' });
    } 
    let riskScore = 0;
    const reasons = [];
    const keywords = ['pay', 'fee', 'registration', 'earn per week', 'no experience', 'gmail', 'yahoo'];  
    keywords.forEach(keyword => {
        if (jobText.toLowerCase().includes(keyword)) {
            riskScore += 20; 
            reasons.push(`Contains keyword: ${keyword}`);
        }
    });
    let riskLevel = 'Low';      
    if (riskScore >= 60) {
        riskLevel = 'High';
    } else if (riskScore >= 40) {
        riskLevel = 'Medium';
    } 
    res.json({ riskScore, riskLevel, reasons });
}
);    
// GET '/company/:name' route
app.get('/company/:name', (req, res) => {
    const companyName = req.params.name.toLowerCase();
    const companyStatus = {
        'tcs': 'Verified',
        'infosys': 'Verified',  
        'fakejobs pvt ltd': 'Reported as Scam'
    };
    const status = companyStatus[companyName] || 'Unknown';
    res.json({ companyName: req.params.name, status });
});
// POST '/report' route
app.post('/report', (req, res) => {
    const { jobTitle, companyName, description } = req.body;    
    if (!jobTitle || !companyName || !description) {
        return res.status(400).json({ error: 'jobTitle, companyName, and description are required' });
    }   
    const reportDetails = {
        jobTitle,
        companyName,    
        description,
        reportedAt: new Date()
    };
    res.json({ message: 'Report submitted successfully', reportDetails });
} );
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
}); 
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}           
);  



