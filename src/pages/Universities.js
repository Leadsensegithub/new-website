import React, { useState, useEffect } from "react";
import axios from "axios";

function Universities() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Mock API call (replace with your backend API)
    axios.get("https://api.example.com/universities")
      .then((response) => setUniversities(response.data))
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Universities</h1>
      <ul>
        {universities.map((university, index) => (
          <li key={index}>{university.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Universities;
