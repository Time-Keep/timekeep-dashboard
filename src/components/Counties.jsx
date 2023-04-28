export default function Counties(props) {
  return (
    <div>
      {props.countiesSortedDescending.slice(0, 5).map((county) => {
        return (
          <div key={county.id} className="county-container">
            <button
              onClick={(e) => {
                props.handleScore(e, county.score);
              }}
            >
              <h3>{county.name}</h3>
            </button>

            <p className="hidden">Over Score: {county.score}</p>
            <p>Median Wage: {county.median_wage}</p>
            <p>Tax Rate: {parseFloat(county.tax_rate * 100).toFixed(2)}%</p>
            <p>Median Income: {county.median_income}</p>
            <p>Unemployment percentage: {county.unemployment}%</p>
            <p>State: {county.state}</p>
          </div>
        );
      })}
    </div>
  );
}
