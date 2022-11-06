export const saveDataInLocalStorage = (dataLocalStorage: Array<string>) =>
  localStorage.setItem(
    dataLocalStorage[1],
    JSON.stringify(dataLocalStorage[0])
  );

export const getThemeInLocalStorage = (localStorageKey: string) =>
  JSON.parse(localStorage.getItem(localStorageKey) || "[]");
