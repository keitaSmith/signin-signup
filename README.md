# SignIn-SignUp Project

This project implements a simple authentication system using React for the frontend and Firebase for both the frontend and backend. The application allows users to sign up, log in, and access a main app page, with user data stored in Firestore.

## Table of Contents

- [Installation](#installation)
- [Setup Firebase Configuration](#setup-firebase-configuration)
- [Running the Project](#running-the-project)
- [Backend Setup](#backend-setup)
- [Troubleshooting](#troubleshooting)

## Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/singin-signup.git
```
Navigate to the project directory:

```bash
cd singin-signup
```

Install Dependencies

The project uses npm to manage dependencies. Run the following command to install all the required packages for both the frontend and backend:
```bash
npm install
```

## Setup Firebase Configuration

### Frontend

Create a Firebase Project: If you don't have a Firebase project already, create one at Firebase Console.

Add a Web App: In the Firebase console, add a new Web app to get the Firebase configuration details.

Set Up Firebase Config in the Project:

Navigate to frontend/src/config/.
Open firebaseConfig.js.
Replace the placeholders with your Firebase project's configuration details:

```bash
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```
### Backend
Set Up Firebase Admin SDK:

Navigate to backend/src/config/.
Ensure your firebase-adminsdk.json file is correctly configured with the Firebase Admin SDK credentials.
Set Up Backend Firebase Config:

Open backend/src/config/firebaseConfig.js.
Replace the placeholders with your backend Firebase configuration:

```bash
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-url.firebaseio.com"
});

module.exports = admin;
```
Open backend/src/config/firebase-adminsdk.json.
replace all related public/private keys, project IDs etc with your own.

## Running the Project

### Frontend
To run the frontend development server, navigate to the frontend of the project.
```bash
cd frontend
```
and execute:
```bash
npm start
```
This will start the development server, and you can view the application by navigating to http://localhost:3000 in your web browser.

### Backend
To run the backend server:
Navigate to the backend directory:

```bash
cd backend
```

Start the backend server:

```bash
npm run start
```
This will start your backend server and connect it to Firebase using the Firebase Admin SDK.

## Troubleshooting

Missing Firebase Config: Ensure that the Firebase configuration is correctly set up in both frontend/src/config/firebaseConfig.js and backend/src/config/firebaseConfig.js.
Environment Variables: If you encounter issues with environment variables, ensure that they are correctly set up and accessible in your environment.
