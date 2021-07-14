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
                colors={data.colors}
              />
              </div>
            );
          })}
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

const Color = ({ col_name, url, description, colors }) => {
  if (!col_name) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td colspan="3">
            <h5>{col_name}</h5>
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <h5>{url}</h5>
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <h4>{description}</h4>
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <h4>There are {colors.length} colours </h4>
          </td>
        </tr>
        <tr>
          <th>Colour Name</th>
          <th>Colour RGB</th>
          <th>Colour Number</th>
        </tr>
        {colors.map((sub, subindex) =>
              <tr>  <td key={subindex}>{sub.name}</td>
                    <td key={subindex}>[{sub.rgb[0]}, {sub.rgb[1]}, {sub.rgb[1]}]</td>
                    <td key={subindex}>{sub.number}</td>
              </tr>)
        }


      </tbody>
    </table>
  );
};
