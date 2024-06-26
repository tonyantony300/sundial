import React from "react";
import { Up } from "../icons/Up";
import Highcharts, { Tooltip } from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  name: string;
};

const options = {
  chart: {
    type: "area",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  xAxis: {
    title: {
      text: "",
    },
    labels: {
      enabled: false,
    },
    gridLineWidth: 0,
    visible: false,
  },
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      enabled: false,
    },
    gridLineWidth: 0,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
    shadow: false,
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "rgba(207, 236, 234, 1)"],
          [1, "rgba(207, 236, 234, 0)"],
        ],
      },
      marker: {
        radius: 0,
      },
      lineWidth: 1,
      lineColor: "#14a098",
      states: {
        hover: {
          lineWidth: 2,
        },
      },
      threshold: null,
    },
  },
  series: [
    {
      name: "Example Series",
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
      <div className="absolute w-[80%] h-full right-0 top-0">
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
