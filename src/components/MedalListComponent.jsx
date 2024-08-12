import React from "react";
import styles from "../style/MedalListComponent.module.css";

const MedalListComponent = ({ country, countries, setCountry }) => {
  const deleteCountry = () => {
    let filterCountry = countries.filter((c) => {
      return c.countryName !== country.countryName;
    });

    setCountry(filterCountry);
  };

  return (
    <div className={styles.medalListComponent}>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>총 메달 수</th>
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
      <td>{"작업중"}</td>
      <td>
        <button onClick={deleteCountry}>삭제</button>
      </td>
    </tr>
  );
};

export default MedalListComponent;
