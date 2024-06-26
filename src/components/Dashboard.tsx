import Card from "./Card";
import EditMode from "./EditMode";
import { metricResponse } from "../dtos/index.dtos";
import metricData from "../metric.json";
import ViewMode from "./ViewMode";

function Dashboard() {
  return (
    <>
      {metricData.data.map((metric) => (
        <div
          key={metric.id}
          className="w-full max-w-[900px] bg-white flex justify-center flex-wrap box-border my-1"
        >
          <Card metric={metric} />
        </div>
      ))}
    </>
  );
}

export default Dashboard;
