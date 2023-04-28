import Counties from "./Counties";
import Pie from "./Pie";

export default function Overview({ handleScore, score, counties }) {
  return (
    <div className="[ overview-wrapper ]">
      <div className="[ card w-96 bg-neutral text-neutral-content shadow-xl ][ overview-container ]">
        <div className="[ bg-neutral text ][ data-container ]">
          <Counties counties={counties} handleScore={handleScore} />

          <Pie percentage={score.percentage} colour={score.colour} />
        </div>
      </div>
    </div>
  );
}
