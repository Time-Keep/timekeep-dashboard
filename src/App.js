import "./App.css";
import Pie from "./components/Pie";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Counties from "./components/Counties";


export default function App() {
  const API_URI = "http://localhost:5555/counties";
  const [counties, setCounties] = useState([]);
  const getCounties = async () => {
    try {
      const fetchData = await axios.get(API_URI, {
        headers: {
          authorization: "Bearer JWT Token",
        },
      });
      setCounties(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCounties();
  }, []);

  const [score, setScore] = useState({
    percentage: 0,
    colour: "hsl(0, 0%, 0%)",
  });

  const handleScore = (e, score) => {
    e.preventDefault();
    const rand = (n) => Math.random() * n;
    setScore({
      percentage: score,
      colour: `hsl(${rand(360)}, ${rand(50) + 50}%, ${rand(30) + 20}%)`,
    });
  };


  return (
    <>
    <section className="nav-container">
        <h1>Company INC.</h1>
    </section>
    <section className="main-dashboard">
      <div className="main-dashboard-container">
        <header>
          <h1>Dashboard</h1>
        </header>
        <div className="data-container">
          <div class='counties-element-container'>
            <Counties counties={counties} handleScore={handleScore} />
          </div>
          <div className="number-container">
            <Pie percentage={score.percentage} colour={score.colour} />
            
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
