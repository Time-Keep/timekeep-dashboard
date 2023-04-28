export default function Counties(props) {
  let rank = 0;
  return (
    <div className="[ card bg-base-100 ][ counties-card ]">
      {props.counties.slice(0, 5).map((county) => {
        rank = rank + 1;
        return (
          <div
            key={county.id}
            onMouseEnter={(e) => {
              props.handleScore(e, county.score);
            }}
            className="[ stats shadow ][ stat-line ]"
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
