import React from "react";
import styles from "../style/MedalListComponent.module.css";

const MedalListComponent = ({ countries, setCountry }) => {
  const deleteCountry = (countryName) => {
    let filterCountry = countries.filter((c) => {
      return c.countryName !== countryName;
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
          {countries
            .sort((a, b) => {
              if (b.goldMedal !== a.goldMedal) {
                return b.goldMedal - a.goldMedal;
              } else if (b.silverMedal !== a.silverMedal) {
                return b.silverMedal - a.silverMedal;
              }

              return b.bronzeMedal - a.bronzeMedal;
            })
            .map((country) => {
              return (
                <MedalListItem
                  key={country.countryName}
                  country={country}
                  deleteCountry={deleteCountry}
                />
              );
            })}
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
        <button
          className={styles.deleteButton}
          onClick={() => {
            deleteCountry(country.countryName);
          }}
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default MedalListComponent;
