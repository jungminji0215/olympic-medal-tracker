import React from "react";
import styles from "../style/CountryList.module.css";
import { saveLocalStorage } from "../localStorage.js";

const CountryList = ({ countries, setCountry }) => {
  /**
   * 삭제
   */
  const deleteCountry = (countryName) => {
    // 삭제할 것만 제외 후 상태 설정
    let filterCountry = countries.filter((c) => {
      return c.countryName !== countryName;
    });

    /**
     * TODO 고민
     * localStorage 에 있는 데이터를 삭제하는 메서드가 있는데(removeItem())
     * removeItem 를 사용하지 않고, 삭제할 국가를 필터한 filterCountry 리스트를
     * 새로 저장하는 방식으로 했는데, 이러한 방식이 잘못된 것은 아닌지...
     * 근데 로컬스토리지에 한 개의 key 에 value 가 변경되는 방식이라
     * 이 방법밖에 없는 것 같다.
     */
    saveLocalStorage(filterCountry);
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

export default CountryList;
