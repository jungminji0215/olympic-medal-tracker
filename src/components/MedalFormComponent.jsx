import React from "react";

const MedalFormComponent = () => {
  return (
    <div className="form-component">
      <div className="input-form">
        <InputForm title={"국가명"} type={"text"} />
        <InputForm title={"금메달"} type={"number"} />
        <InputForm title={"은메달"} type={"number"} />
        <InputForm title={"동메달"} type={"number"} />
      </div>
      <Button action={"국가 추가"} />
      <Button action={"업데이트"} />
    </div>
  );
};

const InputForm = ({ title, type }) => {
  return (
    <div className="input-item">
      <span>{title}</span>
      <input type={type}></input>
    </div>
  );
};

const Button = ({ action }) => {
  return <button>{action}</button>;
};

export default MedalFormComponent;
