
# 🚀 PROJECT SETUP & TROUBLESHOOTING GUIDE


✅ STEP-BY-STEP SETUP (5 minutes)

Step 1: Install Dependencies

Open terminal and go to backend folder:

cd backend
npm install


Step 2: Start the Server

Run:

node server.js


Step 3: Wait for Success Message

You should see:

Server running on port 5000



Step 4: Open in Browser

Open your web browser and go to:

http://localhost:5000/

You should see:

HireSight Backend is Running 🚀



🌐 Access Your Application

Open your frontend file (index.html)

Then use:

Job Scam Checker → Analyze job description  
Company Verification → Check company  
Report Scam → Submit report  



🔗 API ENDPOINTS

GET /
Server running status

POST /analyze
Analyze job description

GET /company/:name
Verify company

POST /report
Submit scam report


⚠️ COMMON ERRORS & SOLUTIONS

❌ Error: "Error connecting to backend"

Fix:
- Make sure backend is running (node server.js)
- Check URL is http://localhost:5000
- Do not use wrong port like 3000


❌ Error: "Cannot GET /company/TCS"

Fix:
- Check backend route exists in server.js
- Restart server after changes


❌ Frontend shows blank output

Fix:
- Check correct ID in HTML (analysisResult)
- Open browser console (F12) for errors
- Ensure fetch URL is correct


❌ Module not found error

Fix:
Run:

npm install



❌ Live Server not working

Fix:
- Install Live Server extension in VS Code
- Right click index.html → Open with Live Server



📞 QUICK TEST

Open this in browser:

http://localhost:5000/

If you see:

HireSight Backend is Running 🚀

Your server is working ✅

