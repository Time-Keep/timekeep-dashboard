export default function Counties(props) {
  const mockCountyData = [
    {
      id: 1,
      name: "Los Angeles",
      score: 82,
      median_wage: 60000,
      tax_rate: 0.09,
      median_income: 75000,
      unemployment: 6.1,
      state: "California",
    },
    {
      id: 2,
      name: "New York",
      score: 91,
      median_wage: 70000,
      tax_rate: 0.104,
      median_income: 90000,
      unemployment: 5.5,
      state: "New York",
    },
    {
      id: 3,
      name: "Cook",
      score: 77,
      median_wage: 55000,
      tax_rate: 0.083,
      median_income: 65000,
      unemployment: 4.8,
      state: "Illinois",
    },
    {
      id: 4,
      name: "Harris",
      score: 68,
      median_wage: 50000,
      tax_rate: 0.077,
      median_income: 60000,
      unemployment: 5.9,
      state: "Texas",
    },
    {
      id: 5,
      name: "Miami-Dade",
      score: 95,
      median_wage: 65000,
      tax_rate: 0.07,
      median_income: 80000,
      unemployment: 4.2,
      state: "Florida",
    },
  ];

  let rank = 0;
  return (
    <div className="[ stack ][ card bg-base-100 ][ counties-card ]">
      {mockCountyData.slice(0, 5).map((county) => {
        rank = rank + 1;
        return (
          <div
            key={county.id}
            onMouseEnter={(e) => {
              props.handleScore(e, county.score);
            }}
            className="[ stats shadow ]"
          >
            <section className="[ stat ][ left-stat ]">
              <div className="[ stat-desc ]">
                {county.name}, {county.state}
              </div>
              <div className="[ stat-value ]">{county.score}%</div>
              <div className="[ stat-title ]">Overall Score</div>
            </section>
            <section className="[ stat ]">
              <div className="[ stat-title ]">Median income</div>
              <div className="[ stat-value ]">${county.median_income}</div>
              <div className="[ stat-desc ]">
                Tax rate: {parseFloat(county.tax_rate * 100).toFixed(2)}%
              </div>
            </section>
            <section className="[ stat ]">
              <div className="[ stat-title ]">Rank</div>
              <div className="[ stat-value ]">#{rank}</div>
              <div className="[ stat-desc ]">Based on overall score</div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
