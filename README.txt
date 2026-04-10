HireSight Full-Stack (Minimal)

Backend: Node.js + Express  
Frontend: HTML + CSS + JavaScript  


1) Backend Setup

Step 1: Install Node.js  
1. Go to https://nodejs.org  
2. Download and install Node.js  
3. Verify installation:
   node -v  
   npm -v  


Step 2: Install Dependencies  

Option 1: From root folder  
npm install  

Option 2: From backend folder  
cd backend  
npm install express cors  


Step 3: Start Backend Server  

From backend folder:  
cd backend  
node server.js  

Server runs at:  
http://localhost:5000  


2) Frontend Setup

Step 1: Open Frontend  
1. Go to project folder  
2. Open index.html in browser  

OR  
Right click → Open with Live Server (VS Code)


Step 2: Backend Connection  

Make sure this line exists in your HTML:  

const BASE_URL = "http://localhost:5000";
(This is for local testing.)

##This is the URL for the deployed backend on Render and frontend on Website:

Backend API (Render):
https://your-backend-name.onrender.com
(https://hiresight-w729.onrender.com/)

Live Demo (Frontend):
https://your-username.github.io/HireSight-Job-Scam-Detection/
(https://varshithadaraboina.github.io/HireSight-Job-Scam-Detection/)


3) API Endpoints

POST /analyze  
- Input: jobText  
- Output: risk score, level, reasons  

GET /company/:name  
- Input: company name  
- Output: company status (Verified / Scam / Unknown)  

POST /report  
- Input: jobTitle, companyName, description, evidence  
- Output: success message  


4) Test Flow

1. Open frontend (index.html)  
2. Enter job description → click Analyze Job  
3. Enter company name → click Check Company  
4. Fill report form → click Submit Report  


5) Features

- Job Scam Detection  
- Company Verification  
- Scam Reporting System  
- Risk Score Generation  


6) Notes

- This project uses rule-based logic for scam detection  
- No database is used (data is temporary)  
- Backend runs locally on port 5000  


7) Future Enhancements

- MongoDB database integration  
- Machine Learning model for detection  
- User authentication system  
- Deployment as live web app  


8) AI Tools Used

- ChatGPT (for prompt generation and debugging)
