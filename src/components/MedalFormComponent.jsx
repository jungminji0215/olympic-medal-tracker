import React, { useState } from "react";
import styles from "../style/MedalFormComponent.module.css";

const MedalFormComponent = ({ countries, setCountry }) => {
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

  const addCountry = (e) => {
    e.preventDefault();

    // TODO 로컬스토리지에 저장
    const copyCountries = [...countries];

    let findCountry = copyCountries.find((country) => {
      return country.countryName === countryName;
    });

    if (findCountry) {
      alert("이미 등록된 나라입니다.");
      return;
    }

    const newCountry = {
      countryName: countryName,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    copyCountries.push(newCountry);
    setCountry(copyCountries);

    resetMedalInfo();
  };

  const updateCountry = (e) => {
    e.preventDefault();

    const copyCountries = [...countries];

    let findCountry = copyCountries.find((country) => {
      return country.countryName === countryName;
    });

    if (!findCountry) {
      alert("등록되어있지 않은 나라입니다!");
      return;
    }

    // TODO 이게 맞는지 확인..
    // 조회한 국가의 값 변경
    findCountry.goldMedal = goldMedal;
    findCountry.silverMedal = silverMedal;
    findCountry.bronzeMedal = bronzeMedal;

    setCountry(copyCountries);
    resetMedalInfo();
  };

  return (
    <form className={styles.formComponent}>
      <div className={styles.inputForm}>
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
      </div>
      <Button action={"국가 추가"} onClick={addCountry} />
      <Button action={"업데이트"} onClick={updateCountry} />
    </form>
  );
};

const InputForm = ({ title, type, value, setValue }) => {
  return (
    <div className={styles.inputItem}>
      <span>{title}</span>
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

export default MedalFormComponent;
