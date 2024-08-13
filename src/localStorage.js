const COUNTRIES_KEY = "countries";

export const saveLocalStorage = (countries) => {
  localStorage.setItem(COUNTRIES_KEY, JSON.stringify(countries));
};

export const getLocalStorage = () => {
  return localStorage.getItem(COUNTRIES_KEY);
};
