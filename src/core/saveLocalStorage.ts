export const saveDataInLocalStorage = (dataLocalStorage: any) =>
  localStorage.setItem(
    dataLocalStorage[1],
    JSON.stringify(dataLocalStorage[0])
  );

export const getThemeInLocalStorage = (localStorageKey: any) =>
  JSON.parse(localStorage.getItem(localStorageKey) || "[]");
