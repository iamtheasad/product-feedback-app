import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutIconLink from "./components/AbloutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./components/pages/AboutPage";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackData from "./data/feedbackData";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exac
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
