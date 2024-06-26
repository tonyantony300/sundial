import React from "react";
import { Up } from "../icons/Up";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  name: string;
};

const options = {
  chart: {
    type: "area",
  },
  title: {
    text: "", // Remove the main title
  },
  xAxis: {
    title: {
      text: "", // Remove the x-axis title
    },
  },
  yAxis: {
    title: {
      text: "", // Remove the y-axis title
    },
  },
  series: [
    {
      name: "",
      data: [
        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
  ],
};

function ViewMode(props: Props) {
  return (
    <div className="h-[184px] p-8 relative">
      <h5 className="font-medium ">{props.name}</h5>
      <h1 className="mt-6 font-medium text-3xl">12.5k</h1>
      <span className="flex">
        <Up />
        3.5%
        <span className="ml-2 text-[#808080]">Δ7d</span>
      </span>
      <div className="absolute w-[1/2] h-full right-0 top-0">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          constructorType={"chart"}
          containerProps={{ className: "h-full w-full" }}
        />
      </div>
    </div>
  );
}

export default ViewMode;
