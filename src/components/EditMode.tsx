import React, { useState, useEffect } from "react";
import Select from "react-select";
import { metricResponse, segmentResponse } from "../dtos/index.dtos";
import metricData from "../metric.json";
import segmentData from "../segment.json";

type Props = {
  id: string;
  name: string;
  onAdd: () => void;
};

const mapSegmentKeyOptions = (data: segmentResponse["data"]) => {
  return data.map((segment) => ({
    value: segment.segmentKey,
    label: segment.displayName,
  }));
};

const mapSegmentIdOptions = (
  data: segmentResponse["data"],
  selectedKey: string
) => {
  const selectedSegment = data.find(
    (segment) => segment.segmentKey === selectedKey
  );
  return selectedSegment
    ? selectedSegment.values.map((value) => ({
        value: value.segmentId,
        label: value.displayName,
      }))
    : [];
};

function EditMode(props: Props) {
  let [segment, setSegment] = useState<segmentResponse["data"]>(
    segmentData.data
  );
  let [selectedSegmentKey, setSelectedSegmentKey] = useState<string | null>(
    null
  );

  useEffect(() => {
    // const fetchData = async () => {
    //   const metricsData: metricResponse = await fetchMetrics();
    //   setMetric(metricsData.data);
    //   const segmentsData: segmentResponse = await fetchSegments();
    //   setSegment(segmentsData.data);
    // };
    // fetchData();
  }, []);

  const SegmentKeyOptions = mapSegmentKeyOptions(segment);
  const SegmentIdOptions = selectedSegmentKey
    ? mapSegmentIdOptions(segment, selectedSegmentKey)
    : [];

  return (
    <div className="w-[184px] h-[184px] bg-slate-400 px-3">
      <h3>{props.name}</h3>
      <Select
        options={SegmentKeyOptions}
        placeholder={"Select segmentKey"}
        onChange={(selectedOption) =>
          setSelectedSegmentKey(selectedOption?.value || null)
        }
      />
      <Select
        options={SegmentIdOptions}
        placeholder={"Select segmentId"}
        isDisabled={!selectedSegmentKey}
      />
      <div className="flex justify-between items-center mt-10">
        <button className="px-[15px] py-[5px] text-red-500 bg-red-200 rounded-md">
          Cancel
        </button>
        <button
          className="px-[15px] py-[5px] text-green-500 bg-green-200 rounded-md"
          onClick={props.onAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default EditMode;
