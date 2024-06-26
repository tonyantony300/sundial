import { useState } from "react";
import Card from "./Card";
import metricData from "../metric.json";
import { Add } from "../icons/Add";

interface Metric {
  id: string;
  displayName: string;
  isPercentageMetric: boolean;
}

interface CardCounts {
  [key: string]: number[];
}

function Dashboard() {
  const initialCardCounts: CardCounts = metricData.data.reduce(
    (acc: CardCounts, metric: Metric) => {
      acc[metric.id] = [0];
      return acc;
    },
    {}
  );

  const [cardCounts, setCardCounts] = useState<CardCounts>(initialCardCounts);

  const handleAddCardLeft = (metricId: string, index: number) => {
    setCardCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      newCounts[metricId] = [
        ...newCounts[metricId].slice(0, index),
        newCounts[metricId].length,
        ...newCounts[metricId].slice(index),
      ];
      return newCounts;
    });
  };

  const handleAddCardRight = (metricId: string, index: number) => {
    setCardCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      newCounts[metricId] = [
        ...newCounts[metricId].slice(0, index + 1),
        newCounts[metricId].length,
        ...newCounts[metricId].slice(index + 1),
      ];
      return newCounts;
    });
  };

  const handleCancel = (metricId: string, index: number) => {
    setCardCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      newCounts[metricId] = newCounts[metricId].filter((_, i) => i !== index);
      return newCounts;
    });
  };

  return (
    <>
      {metricData.data.map((metric: Metric) => (
        <div
          key={metric.id}
          className="w-full max-w-[900px] bg-white flex justify-center flex-wrap box-border my-1 relative"
        >
          <h4 className="absolute left-8 top-2 font-medium">
            {metric.displayName}
          </h4>
          {cardCounts[metric.id].map((cardIndex, index) => (
            <div
              key={`${metric.id}-${cardIndex}`}
              className="relative min-w-[184px] basis-1/3 grow group"
            >
              {index === 0 && (
                <button
                  onClick={() => handleAddCardLeft(metric.id, index)}
                  className="absolute left-0 bottom-1/2 w-[25px] h-[25px] rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Add />
                </button>
              )}
              <Card
                metric={metric}
                cardIndex={cardIndex}
                onCancel={() => handleCancel(metric.id, cardIndex)}
              />
              <button
                onClick={() => handleAddCardRight(metric.id, index)}
                className="absolute right-0 bottom-1/2 w-[25px] h-[25px] rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Add />
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Dashboard;
