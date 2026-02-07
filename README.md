# URL Shortener Frontend

A modern, responsive React application for the URL Shortener service. Built with Vite and styled using CSS Modules for a clean, modular design.

## 🚀 Features

- **Link Shortening**: Easy-to-use interface to shorten URLs.
- **Dashboard**: View list of generated URLs with click analytics.
- **User Authentication**: Login and Signup functionality.
- **Session Management**: Persistent user sessions with secure cookie handling.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

- **React**: UI Library
- **Vite**: Build tool
- **React Router**: Navigation
- **CSS Modules**: Scoped styling
- **Context API**: State management

## 🏗️ Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/
│   │   ├── Header.jsx        # Navigation header & Auth controls
│   │   ├── Login.jsx         # User login form
│   │   ├── Signup.jsx        # User registration form
│   │   ├── Shortner.jsx      # Main URL input component
│   │   ├── UrlHeading.jsx    # Table/List headers
│   │   └── UrlList.jsx       # Display list of shortened URLs
│   ├── context/
│   │   ├── Context.jsx       # Context definition
│   │   └── ContextProvider.jsx # Global state provider (User, URLs)
│   ├── pages/
│   │   └── HomePage.jsx      # Main landing page
│   ├── styles/               # CSS Modules
│   │   ├── header.module.css
│   │   ├── Login.module.css
│   │   ├── Signup.module.css
│   │   ├── shortner.module.css
│   │   ├── UrlHeading.module.css
│   │   └── UrlList.module.css
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   ├── App.css               # Global app styles
│   └── index.css             # Global resets and variables
├── .env                    # Environment variables
├── index.html              # HTML entry point
├── package.json            # Dependencies
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running (usually on port 8800)

### Installation

1.  **Navigate to the frontend directory**
    ```bash
    cd urlShortner/frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the `frontend` root:
    ```env
    VITE_BACKEND_URL=http://localhost:8800
    ```

4.  **Start the Development Server**
    ```bash
    npm run dev
    ```

## 📱 Mobile Responsiveness

The application is fully responsive. On mobile devices:
- The URL list transforms into a card layout.
- Navigation simplifies for smaller screens.
- Tables are optimized for vertical scrolling.

## 🤝 Integration

This frontend is designed to work seamlessly with the URL Shortener Backend. Ensure the backend is running and `VITE_BACKEND_URL` is correctly pointed to it.
