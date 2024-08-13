import React, { useState } from "react";
import styles from "../style/MedalForm.module.css";
import { validateForm } from "../validateForm.js";
import { saveLocalStorage } from "../localStorage.js";

const MedalForm = ({ countries, setCountry }) => {
  /**
   * TODO 고민
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

    // 불변성 유지를 위해 기존 리스트를 복사하여 사용
    const copyCountries = [...countries];

    let findCountry = countries.find((country) => {
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

    /**
     * TODO 고민 및 궁금증
     * 아래 세 단계는 하나만 실패해도 데이터 정합성에 문제가 생길 것 같은데..(아닌가?)
     * try catch 같은거로 하나로 묶어서 동작해주어야 하나?
     */
    copyCountries.push(newCountry);
    setCountry(copyCountries);
    saveLocalStorage(copyCountries);

    resetMedalInfo();
  };

  /**
   * 수정
   */
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

    findCountry.goldMedal = goldMedal;
    findCountry.silverMedal = silverMedal;
    findCountry.bronzeMedal = bronzeMedal;

    saveLocalStorage(copyCountries);
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

export default MedalForm;
