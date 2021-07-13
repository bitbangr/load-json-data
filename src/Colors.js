import React from "react";
import "./App.css";
import colorData from './kroma_colors.json';

export const Colors = () => {
  return (
    <>
      <h1> JSON Color Data</h1>
      <div className="color-container">
          {colorData.map((data,key) => {
            return (
              <div key={key}>
                {data.name +
                ' , ' +
                data.url +
                ' ,' +
                data.description}
                {data.colors.map((sub, subindex) =>
                    <p key={subindex}>{sub.name +
                      ', [' +
                    sub.rgb +
                    '], ' +
                    sub.number
                    }</p>)
                }
              </div>

            );
          })}
      </div>
    </>
  );
};
