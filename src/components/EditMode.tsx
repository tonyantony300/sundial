import React, { useState, useEffect } from "react";
import Select from "react-select";
import { segmentResponse } from "../dtos/index.dtos";
import segmentData from "../segment.json";

type Props = {
  id: string;
  name: string;
  onAdd: () => void;
  onCancel: () => void;
  onDataUpdate: (segmentId: string | null, segmentKey: string | null) => void; // New prop
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
  let [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(null);
  let [enableAdd, setEnableAdd] = useState<boolean>(false);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      fontSize: "14px",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontSize: "12px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: "14px",
      whiteSpace: "noWrap",
    }),
  };

  useEffect(() => {
    if (selectedSegmentKey !== null) {
      setEnableAdd(true);
    }
  }, [selectedSegmentId]);

  const SegmentKeyOptions = mapSegmentKeyOptions(segment);
  const SegmentIdOptions = selectedSegmentKey
    ? mapSegmentIdOptions(segment, selectedSegmentKey)
    : [];

  return (
    <div className="w-[260px] h-[184px] px-3 flex flex-col justify-center ">
      <Select
        options={SegmentKeyOptions}
        placeholder={"Select segment key"}
        styles={customStyles}
        onChange={(selectedOption) =>
          setSelectedSegmentKey(selectedOption?.value || null)
        }
      />
      <span className="mt-2">
        <Select
          options={SegmentIdOptions}
          styles={customStyles}
          placeholder={"Select segment id"}
          isDisabled={!selectedSegmentKey}
          onChange={(selectedOption) =>
            setSelectedSegmentId(selectedOption?.value || null)
          }
        />
      </span>
      <div className="flex justify-between items-center mt-2">
        <button
          className="px-[30px] py-[5px] text-[#ff5D39] bg-[#FFECE7] rounded-lg"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          className="px-[40px] py-[5px] text-white bg-[#119f97] rounded-lg"
          disabled={!enableAdd}
          onClick={() => {
            props.onDataUpdate(selectedSegmentId, selectedSegmentKey);
            props.onAdd();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default EditMode;
