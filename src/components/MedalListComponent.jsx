import React from "react";

const MedalListComponent = ({ country, countries, setCountry }) => {
  const deleteCountry = () => {
    let filterCountry = countries.filter((c) => {
      return c.countryName !== country.countryName;
    });

    setCountry(filterCountry);
  };

  return (
    <div className="medal-list-component">
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          <MedalListItem country={country} deleteCountry={deleteCountry} />
        </tbody>
      </table>
    </div>
  );
};

const MedalListItem = ({ country, deleteCountry }) => {
  return (
    <tr>
      <td>{country.countryName}</td>
      <td>{country.goldMedal}</td>
      <td>{country.silverMedal}</td>
      <td>{country.bronzeMedal}</td>
      <td>
        <button onClick={deleteCountry}>삭제</button>
      </td>
    </tr>
  );
};

export default MedalListComponent;
