import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function Post() {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log("Hellow World");
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <button onClick={onClick}>Click To Navigate</button>

      <Routes>
        <Route path="/show" element={<h1>Hello World...</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
