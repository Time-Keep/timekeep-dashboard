import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/Navbar";
import Overview from "./components/Overview";

export default function App() {
  const API_URI = "http://localhost:5555/counties";
  const [counties, setCounties] = useState([]);
  const [score, setScore] = useState({
    percentage: 0,
    colour: "hsl(0, 0%, 0%)",
  });

  useEffect(() => {
    getCounties();
    initViz();
  }, []);

  const { tableau } = window;
  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/Dashboard_HMEA/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

  function initViz() {
    if (!window) {
      return;
    }

    let viz = window.tableau.VizManager.getVizs()[0];

    if (viz) {
      viz.dispose();
    }
    new tableau.Viz(ref.current, url);
  }

  const getCounties = async () => {
    try {
      const response = await fetch(API_URI, {
        headers: {
          authorization: "Bearer JWT Token",
        },
      });

      const countyData = response.data;
      const countiesSortedDescending = [...countyData].sort(
        (a, b) => b.score - a.score
      );

      setCounties(countiesSortedDescending);
    } catch (error) {
      console.log(error);
    }
  };

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
      <Overview handleScore={handleScore} score={score} counties={counties} />
      <div ref={ref} style={{ width: "70%", margin: "auto" }}>
        {" "}
      </div>
      <section>
        <div></div>
      </section>
    </>
  );
}
