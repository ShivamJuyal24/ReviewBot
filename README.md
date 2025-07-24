# 🤖 ReviewBot – AI-Powered Code Review Tool

ReviewBot is a full-stack web application that helps developers perform intelligent, automated code reviews using Google's **Gemini 2.5 Flash model**. Built with the MERN stack and a blazing-fast **Vite + React** frontend, ReviewBot streamlines the review process by analyzing code snippets and providing meaningful suggestions, feedback, and improvements.

## 🚀 Features

- 🔍 **AI-Powered Code Review** using Gemini 2.5 Flash
- ⚡ **Fast and Modern Frontend** with Vite + React
- 🗂️ Upload or paste code snippets in various programming languages
- 🧠 Instant feedback and suggestions from the LLM
- 🧾 History of past reviews for easy tracking
- 🎯 Sleek, responsive UI optimized for all screen sizes

## 🛠️ Tech Stack

### Frontend
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Gemini 2.5 Flash](https://deepmind.google/technologies/gemini/) via API integration

- ## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ShivamJuyal24/ReviewBot.git
cd ReviewBot
2. Setup Backend
bash
Copy
Edit
cd server
npm install
# Add your .env file with necessary config (PORT, MONGODB_URI, GEMINI_API_KEY, etc.)
npm start
3. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
🌐 Environment Variables
Create a .env file in the server directory with the following keys:

ini
Copy
Edit
PORT=5000
MONGODB_URI=your_mongo_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

### 📸 Screenshots
![ReviewBot UI](./Screenshot%202025-07-24%20113158.png)


🧑‍💻 Author
Shivam Juyal
