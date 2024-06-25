import Card from "./Card";
import EditMode from "./EditMode";

function Dashboard() {
  return (
    <div className="w-full max-w-[900px] bg-white flex justify-center flex-wrap box-border">
      {/* <Card color={"red"} /> */}
      <EditMode />
    </div>
  );
}

export default Dashboard;
