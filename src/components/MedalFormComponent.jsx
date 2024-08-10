import React, { useState } from "react";

const MedalFormComponent = ({ countries, setCountry }) => {
  let [countryName, setCountryName] = useState("");
  let [goldMedal, setGoldMedal] = useState(0);
  let [silverMedal, setSilverMedal] = useState(0);
  let [bronzeMedal, setBronzeMedal] = useState(0);

  const addCountry = () => {
    const updateCountries = [...countries];
    const addCountry = {
      countryName: countryName,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    updateCountries.push(addCountry);
    setCountry(updateCountries);
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
      <Button action={"업데이트"} />
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
