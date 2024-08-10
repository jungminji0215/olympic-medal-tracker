import React from "react";

const MedalListComponent = () => {
  return (
    <div className="medal-list-component">
      <table>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
        <MedalListItem />
      </table>
    </div>
  );
};

const MedalListItem = () => {
  return (
    <tr>
      <td>대한민국</td>
      <td>12</td>
      <td>3</td>
      <td>50</td>
      <td>
        <button>삭제</button>
      </td>
    </tr>
  );
};

export default MedalListComponent;
