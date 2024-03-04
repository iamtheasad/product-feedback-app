import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react feedback app</p>

        <Link to="/">Back To Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
