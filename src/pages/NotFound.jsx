import React from "react";
import { FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="text-8xl font-bold mb-8">Opp!</div>
          <div className="text-5xl mb-8">404 - Page not found.</div>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
