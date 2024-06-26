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

  const handleViewClick = () => {
    setIsEditMode(true);
  };

  const handleAddClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className="min-w-[300px] basis-1/3 grow">
      {isEditMode ? (
        <EditMode
          id={props.metric.id}
          name={props.metric.displayName}
          onAdd={handleAddClick}
        />
      ) : (
        <div onClick={handleViewClick}>
          <ViewMode />
        </div>
      )}
    </div>
  );
}

export default Card;
