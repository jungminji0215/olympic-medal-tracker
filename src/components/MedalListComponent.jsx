import React from "react";

const MedalListComponent = ({ country }) => {
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
          <MedalListItem country={country} />
        </tbody>
      </table>
    </div>
  );
};

const MedalListItem = ({ country }) => {
  return (
    <tr>
      <td>{country.countryName}</td>
      <td>{country.goldMedal}</td>
      <td>{country.silverMedal}</td>
      <td>{country.bronzeMedal}</td>
      <td>
        <button>삭제</button>
      </td>
    </tr>
  );
};

export default MedalListComponent;
