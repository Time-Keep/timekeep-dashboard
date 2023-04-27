export default function Counties(props) {



  return (
    <div>
      {props.counties.map((county) => {
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
            <p className="hidden">Median Wage: {county.median_wage}</p>
            <p className="hidden">Tax Rate: {county.tax_rate * 100}%</p>
            <p className="hidden">Median Income: {county.median_income}</p>
            <p className="hidden">
              Unemployment percentage: {county.unemployment}%
            </p>
            <p className="hidden">State: {county.state}</p>
          </div>
        );
      })}
    </div>
  );
}

