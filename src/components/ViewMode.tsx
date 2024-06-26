import React, { useState, useEffect } from "react";
import { Up } from "../icons/Up";
import Highcharts, { Options, SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { fetchSnapshot } from "../apis/snapshot";

interface DataPoint {
  date: string;
  value: number;
}

interface ResponseData {
  metric: string;
  segmentKey: string;
  segmentId: string;
  values: DataPoint[];
}

interface Response {
  data: ResponseData;
}

type Props = {
  metricId: string;
  selectedSegmentId: string | null;
  selectedSegmentKey: string | null;
};

const initialOptions: Options = {
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
      type: "area",
      name: "Example Series",
      data: Array(28).fill(0),
    } as Highcharts.SeriesAreaOptions,
  ],
};

function ViewMode(props: Props) {
  const [chartOptions, setChartOptions] =
    useState<Highcharts.Options>(initialOptions);

  useEffect(() => {
    if (props.selectedSegmentKey && props.selectedSegmentId) {
      const callingForSnapshot = async () => {
        const retrievedSnapshotData = await fetchSnapshot(
          props.metricId,
          props.selectedSegmentKey,
          props.selectedSegmentId
        );

        const newChartData = retrievedSnapshotData.data.values.map(
          (item) => item.value
        );
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          series: [
            {
              type: "area",
              name: "Example Series",
              data: newChartData,
            } as Highcharts.SeriesAreaOptions,
          ],
        }));
      };

      callingForSnapshot();
    }
  }, [props.selectedSegmentKey, props.selectedSegmentId, props.metricId]);

  return (
    <div className="h-[184px] p-8 relative">
      <h5 className="font-medium text-[#808080]">Platform | Android</h5>
      <h1 className="mt-6 font-medium text-3xl">12.5k</h1>
      <span className="flex">
        <Up />
        3.5%
        <span className="ml-2 text-[#808080]">Δ7d</span>
      </span>
      <div className="absolute w-[60%] h-full right-0 top-0">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          constructorType={"chart"}
          containerProps={{ className: "h-full w-full" }}
        />
      </div>
    </div>
  );
}

export default ViewMode;
