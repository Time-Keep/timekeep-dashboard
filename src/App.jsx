import "./App.css";
import Pie from "./components/Pie";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Counties from "./components/Counties";
import NavBar from "./components/Navbar";

export default function App() {
  const API_URI = "http://localhost:5555/counties";
  const [counties, setCounties] = useState([]);
  const [score, setScore] = useState({
    percentage: 0,
    colour: "hsl(0, 0%, 0%)",
  });

  const { tableau } = window;

  useEffect(() => {
    getCounties();
    initViz();
  }, []);

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

  const countiesSortedDescending = [...counties].sort(
    (a, b) => b.score - a.score
  );

  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/Dashboard_HMEA/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
  function initViz() {
    let viz = window.tableau.VizManager.getVizs()[0];

    if (viz) {
      viz.dispose();
    }
    new tableau.Viz(ref.current, url);
  }

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
      <NavBar />
      <section className="main-dashboard">
        <div className="main-dashboard-container">
          <header>
            <h1>Dashboard</h1>
          </header>
          <div className="data-container">
            <div class="counties-element-container">
              <Counties
                countiesSortedDescending={countiesSortedDescending}
                handleScore={handleScore}
              />
            </div>
            <div className="number-container">
              <Pie percentage={score.percentage} colour={score.colour} />
            </div>
          </div>
        </div>
      </section>
      <div ref={ref} style={{ width: "70%", margin: "auto" }}>
        {" "}
      </div>
      <section>
        <div></div>
      </section>
    </>
  );
}
