import React from "react";
import "./App.css";
import colorData from './kroma_colors.json';

export const Colors = () => {
  return (
    <>
      <div className="color-container">
          {colorData.map((data,key) => {
            return (
              <div key={key}>
                {data.name +
                ' , ' +
                data.url +
                ' ,' +
                data.description}
              </div>
            );
          })}
      </div>
    </>
  );
};
