import React from "react";
import "./App.css";
// import colorData from './kroma_colors_simple.json';
import colorData from './kroma_colors.json';

export const Colors = () => {
  return (
    <>
      <HomePageHeader />
      <div className="color-container">
          {colorData.map((data,key) => {
            return (
              <div key={key}>
              <Color
                key={key}
                col_name={data.name}
                url={data.url}
                description={data.description}
              />
              </div>
            );
          })}
      </div>
    </>
  );
};

export const ColorSimple = () => {
  return (
    <>
      <HomePageHeader />
      <div className="color-container">
          {colorData.map((data,key) => {
            return (
              <div key={key}>
              <Color
                key={key}
                col_name={data.name}
                url={data.url}
                description={data.description}
              />
              </div>



            );
          })}
      </div>
      <div>
        {colorData.colors.map((sub, subindex) =>
           return (
              <p key={subindex}>{sub.name +
                                    ', [' +
                                  sub.rgb +
                                    '], ' +
                                sub.number } </p>);
        }
      </div>
    </>
  );
};


const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>JSON Color Data</h2>
    </header>
  );
};

const Color = ({ col_name, url, description }) => {
  if (!col_name) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{col_name}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>{url}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h4>{description}</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
