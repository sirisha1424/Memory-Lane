import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /homepagestatic as soon as the component is mounted
    navigate("/homepagestatic");
  }, [navigate]);

  return null; // Since you're redirecting, there's no need to render anything
};

export default Home;
