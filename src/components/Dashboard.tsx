import Card from "./Card";

function Dashboard() {
  return (
    <h1 className="w-full max-w-[900px] bg-white flex flex-wrap box-border">
      <Card color={"red"} />
      <Card color={"green"} />
      <Card color={"yellow"} />
      <Card color={"red"} />
      <Card color={"green"} />
      <Card color={"red"} />
      <Card color={"green"} />
      <Card color={"yellow"} />
    </h1>
  );
}

export default Dashboard;
