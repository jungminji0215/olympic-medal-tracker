import React, { useState } from "react";
import styles from "../style/MedalForm.module.css";
import { validateForm } from "../validateForm.js";
import { saveLocalStorage } from "../localStorage.js";

const MedalForm = ({ countries, setCountry }) => {
  /**
   * 이것들을 하나의 상태로 합쳤으면 좋았을 것 같다.
   */
  let [countryName, setCountryName] = useState("");
  let [goldMedal, setGoldMedal] = useState(0);
  let [silverMedal, setSilverMedal] = useState(0);
  let [bronzeMedal, setBronzeMedal] = useState(0);

  const resetMedalInfo = () => {
    setCountryName("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };

  const isExistCountry = () => {
    return countries.find((country) => {
      return country.countryName === countryName;
    });
  };

  // 새로운 국가 객체 생성 함수
  const createCountryObject = (
    countryName,
    goldMedal,
    silverMedal,
    bronzeMedal
  ) => {
    return {
      countryName: countryName,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
  };

  // 국가 리스트 업데이트 함수
  const updateCountryList = (updatedCountries) => {
    setCountry(updatedCountries);
    saveLocalStorage(updatedCountries);
  };

  /**
   * 등록
   */
  const addCountry = (e) => {
    e.preventDefault();

    const { isValid, message } = validateForm(
      countryName,
      goldMedal,
      silverMedal,
      bronzeMedal
    );
    if (!isValid) return alert(message);

    if (isExistCountry()) return alert("이미 등록된 나라입니다.");

    try {
      const newCountry = createCountryObject(
        countryName,
        goldMedal,
        silverMedal,
        bronzeMedal
      );

      updateCountryList([...countries, newCountry]);
      resetMedalInfo();
    } catch (error) {
      alert("국가를 추가하는 중에 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  /**
   * 수정
   */
  const updateCountry = (e) => {
    e.preventDefault();

    const { isValid, message } = validateForm(
      countryName,
      goldMedal,
      silverMedal,
      bronzeMedal
    );
    if (!isValid) return alert(message);

    if (!isExistCountry()) return alert("등록되어있지 않은 나라입니다.");

    try {
      const newCountries = countries.map((country) => {
        if (country.countryName === countryName) {
          return {
            countryName: countryName,
            goldMedal: goldMedal,
            silverMedal: silverMedal,
            bronzeMedal: bronzeMedal,
          };
        } else {
          return country;
        }
      });

      updateCountryList(newCountries);
      resetMedalInfo();
    } catch (error) {
      alert("국가를 추가하는 중에 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <form className={styles.inputForm}>
      <InputForm
        title={"국가명"}
        type={"text"}
        value={countryName}
        setValue={setCountryName}
      />
      <InputForm
        title={"금메달"}
        type={"number"}
        value={goldMedal}
        setValue={setGoldMedal}
      />
      <InputForm
        title={"은메달"}
        type={"number"}
        value={silverMedal}
        setValue={setSilverMedal}
      />
      <InputForm
        title={"동메달"}
        type={"number"}
        value={bronzeMedal}
        setValue={setBronzeMedal}
      />
      <Button action={"국가 추가"} onClick={addCountry} />
      <Button action={"업데이트"} onClick={updateCountry} />
    </form>
  );
};

const InputForm = ({ title, type, value, setValue }) => {
  return (
    <div className={styles.inputItem}>
      <label>{title}</label>
      <input
        className={styles.inputFormStyle}
        value={value}
        placeholder={"국가명 입력"}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type}
      />
    </div>
  );
};

const Button = ({ action, onClick }) => {
  return (
    <button
      className={styles.formButton}
      onClick={(e) => {
        onClick(e);
      }}
      type="submit"
    >
      {action}
    </button>
  );
};

export default MedalForm;
