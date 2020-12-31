import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
      <p>
      <h2>MAKE AN IMPACT ON THE FUTURE</h2>
      As an expert, you understand the limitless possibilities technology can unlock. But a global skills gap is holding us back. Not everyone has the opportunity to develop technology skills that create change for themselves and their communities. It’s Pluralsight’s mission to give everyone, everywhere access to these in-demand skills. Join us.
      
      By sharing your expertise, you can influence the greatest innovations yet to come. Your content will be viewed worldwide—in homes, schools, governments and businesses. You’ll help teams bring game-changing products to market and individual learners transform their careers.
      
      Partner with us to share your knowledge and empower the next generation of creators.</p>
      </>
);

export default HomePage;
