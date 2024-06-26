import React, { useState } from "react";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";

interface Props {
  metric: {
    id: string;
    displayName: string;
    isPercentageMetric: boolean;
  };
}

function Card(props: Props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(
    null
  );
  const [selectedSegmentKey, setSelectedSegmentKey] = useState<string | null>(
    null
  );

  const handleViewClick = () => {
    setIsEditMode(true);
  };

  const handleAddClick = () => {
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  const handleDataUpdate = (
    segmentId: string | null,
    segmentKey: string | null
  ) => {
    setSelectedSegmentId(segmentId);
    setSelectedSegmentKey(segmentKey);
  };

  return (
    <>
      {isEditMode ? (
        <div className="flex justify-center items-center">
          <EditMode
            id={props.metric.id}
            name={props.metric.displayName}
            onAdd={handleAddClick}
            onCancel={handleCancel}
            onDataUpdate={handleDataUpdate}
          />
        </div>
      ) : (
        <div onClick={handleViewClick}>
          <ViewMode
            metricId={props.metric.id}
            selectedSegmentId={selectedSegmentId}
            selectedSegmentKey={selectedSegmentKey}
          />
        </div>
      )}
    </>
  );
}

export default Card;
