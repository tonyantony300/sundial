import React, { useState } from "react";
import Card from "./Card";
import metricData from "../metric.json";
import { Add } from "../icons/Add";

interface Metric {
  id: string;
  displayName: string;
  isPercentageMetric: boolean;
}

interface CardCounts {
  [key: string]: number;
}

function Dashboard() {
  const [cardCounts, setCardCounts] = useState<CardCounts>(
    metricData.data.reduce((acc: CardCounts, metric: Metric) => {
      acc[metric.id] = 1;
      return acc;
    }, {})
  );

  const handleAddCardLeft = (metricId: string, index: number) => {
    setCardCounts({
      ...cardCounts,
      [metricId]: cardCounts[metricId] + 1,
    });
  };

  const handleAddCardRight = (metricId: string, index: number) => {
    setCardCounts({
      ...cardCounts,
      [metricId]: cardCounts[metricId] + 1,
    });
  };

  return (
    <>
      {metricData.data.map((metric: Metric) => (
        <div
          key={metric.id}
          className="w-full max-w-[900px] bg-white flex justify-center flex-wrap box-border my-1 relative"
        >
          <h4 className="absolute left-2 top-2 font-medium">
            {metric.displayName}
          </h4>
          {Array.from({ length: cardCounts[metric.id] }).map((_, cardIndex) => (
            <div
              key={`${metric.id}-${cardIndex}`}
              className="relative min-w-[184px] basis-1/3 grow group"
            >
              {cardIndex === 0 && (
                <button
                  onClick={() => handleAddCardLeft(metric.id, cardIndex)}
                  className="absolute left-0 bottom-1/2 w-[25px] h-[25px] rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Add />
                </button>
              )}
              <Card metric={metric} />
              {cardIndex === cardCounts[metric.id] - 1 && (
                <button
                  onClick={() => handleAddCardRight(metric.id, cardIndex)}
                  className="absolute right-0 bottom-1/2 w-[25px] h-[25px] rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Add />
                </button>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Dashboard;
