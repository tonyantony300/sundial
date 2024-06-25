import React, { useState, useEffect } from "react";
import Select from "react-select";
import { metricResponse, segmentResponse } from "../dtos/index.dtos";
import metricData from "../metric.json";
import segmentData from "../segment.json";

// Function to map metric data to react-select options
const mapMetricOptions = (data: metricResponse["data"]) => {
  return data.map((metric) => ({
    value: metric.id,
    label: metric.displayName,
  }));
};

// Function to map segment data to react-select options
const mapSegmentKeyOptions = (data: segmentResponse["data"]) => {
  return data.map((segment) => ({
    value: segment.segmentKey,
    label: segment.displayName,
  }));
};

// Function to map segment values data to react-select options
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

function EditMode() {
  let [metric, setMetric] = useState<metricResponse["data"]>(metricData.data);
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

  useEffect(() => {
    console.log(metric, segment);
  }, [metric, segment]);

  // Generate options for react-select
  const MetricOptions = mapMetricOptions(metric);
  const SegmentKeyOptions = mapSegmentKeyOptions(segment);
  const SegmentIdOptions = selectedSegmentKey
    ? mapSegmentIdOptions(segment, selectedSegmentKey)
    : [];

  return (
    <div className="w-[16rem] h-[12rem] bg-slate-400 px-3">
      <Select options={MetricOptions} placeholder={"Select metric"} />
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
      <div className="flex justify-between items-center mt-auto">
        <button className="px-[15px] py-[5px] text-red-500 bg-red-200 rounded-md">
          Cancel
        </button>
        <button className="px-[15px] py-[5px] text-green-500 bg-green-200 rounded-md">
          Add
        </button>
      </div>
    </div>
  );
}

export default EditMode;
