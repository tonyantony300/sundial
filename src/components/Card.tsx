import React, { useState, useEffect } from "react";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";

interface Props {
  metric: {
    id: string;
    displayName: string;
    isPercentageMetric: boolean;
  };
  cardIndex: number;
  onCancel: () => void;
}

function Card(props: Props) {
  const [isEditMode, setIsEditMode] = useState(props.cardIndex !== 0);
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
    if (props.cardIndex !== 0) {
      console.log("Need to remove this card");
      props.onCancel();
    }
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
