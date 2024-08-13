export const validateForm = (
  countryName,
  goldMedal,
  silverMedal,
  bronzeMedal
) => {
  if (countryName == "") {
    return {
      isValid: false,
      message: "국가명을 입력해주세요.",
    };
  }

  if (goldMedal < 0) {
    return {
      isValid: false,
      message: "금메달 수를 확인해주세요",
    };
  }

  if (silverMedal < 0) {
    return {
      isValid: false,
      message: "은메달 수를 확인해주세요",
    };
  }

  if (bronzeMedal < 0) {
    return {
      isValid: false,
      message: "동메달 수를 확인해주세요",
    };
  }

  return {
    isValid: true,
    message: "입력값 완벽",
  };
};
