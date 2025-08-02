# Mini-LinkedIn Community Platform

A simple, responsive, full-stack web application built to simulate a small community platform with user authentication, a public post feed, and user profiles.

## Stack Used

This project is built on the **MERN** stack with modern tooling.

  * **Backend:**

      * **Node.js:** JavaScript runtime environment.
      * **Express:** Web framework for Node.js.
      * **MongoDB:** NoSQL database for storing user and post data.
      * **Mongoose:** Object Data Modeling (ODM) library for MongoDB.
      * **JSON Web Tokens (JWT):** For secure user authentication.
      * **bcryptjs:** For hashing passwords.

  * **Frontend:**

      * **React:** JavaScript library for building user interfaces (using Vite).
      * **Tailwind CSS:** A utility-first CSS framework for styling.
      * **Axios:** For making HTTP requests to the backend API.
      * **React Router:** For client-side routing and navigation.

-----

## Setup and Installation

Follow these steps to get the project running on your local machine.

### Prerequisites

  * **Node.js** (v16 or later)
  * A free **MongoDB Atlas** account and your connection string (URI).

### Backend Setup

1.  **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2.  **Create an environment file:** Create a new file named `.env` in the `backend` folder and add the following content. Replace the placeholder values with your own.

    ```env
    # Your MongoDB Atlas connection string
    MONGO_URI=mongodb+srv://<username>:<password>@yourcluster.mongodb.net/yourdatabase?retryWrites=true&w=majority

    # A secret key for JWT. Can be any random string.
    JWT_SECRET=mysecretjwtkey
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the backend server:**

    ```bash
    npm start
    ```

    The server will be running on `http://localhost:5000`.

### Frontend Setup

1.  **Open a new terminal** and navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the frontend development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

-----

## Demo User

There are no pre-seeded demo users. Please use the **Register** page to create a new user account to test the application's features.

-----

## Features

This application includes all the required features, plus a few extras for an improved user experience:

  * **User Authentication:** Secure registration and login system.
  * **Public Feed:** View all posts and create new posts when logged in.
  * **User Profiles:** View any user's profile and a feed of only their posts.
  * **Post Deletion:** Users can delete their own posts from their profile page.
  * **Responsive Design:** The UI is built with Tailwind CSS to be responsive across mobile, tablet, and desktop screens.
  * **Show/Hide Password:** An eye icon on the login and register forms to toggle password visibility.
  * **Custom Confirmation Modal:** A visually appealing modal confirms destructive actions like deleting a post, replacing the standard browser alert.