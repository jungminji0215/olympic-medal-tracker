import React, { useState } from "react";

const MedalFormComponent = ({ countries, setCountry }) => {
  let [countryName, setCountryName] = useState("");
  let [goldMedal, setGoldMedal] = useState(0);
  let [silverMedal, setSilverMedal] = useState(0);
  let [bronzeMedal, setBronzeMedal] = useState(0);

  const addCountry = () => {
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
  };

  const updateCountry = () => {
    // 기존에 존재하던 국가 조회
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
  };

  return (
    <div className="form-component">
      <div className="input-form">
        <InputForm title={"국가명"} type={"text"} setValue={setCountryName} />
        <InputForm title={"금메달"} type={"number"} setValue={setGoldMedal} />
        <InputForm title={"은메달"} type={"number"} setValue={setSilverMedal} />
        <InputForm title={"동메달"} type={"number"} setValue={setBronzeMedal} />
      </div>
      <Button action={"국가 추가"} onClick={addCountry} />
      <Button action={"업데이트"} onClick={updateCountry} />
    </div>
  );
};

const InputForm = ({ title, type, setValue }) => {
  return (
    <div className="input-item">
      <span>{title}</span>
      <input
        onChange={(e) => {
          if (title === "국가명") {
            setValue(e.target.value);
          } else if (title === "금메달") {
            setValue(e.target.value);
          } else if (title === "은메달") {
            setValue(e.target.value);
          } else {
            setValue(e.target.value);
          }
        }}
        type={type}
      />
    </div>
  );
};

const Button = ({ action, onClick }) => {
  return <button onClick={onClick}>{action}</button>;
};

export default MedalFormComponent;
