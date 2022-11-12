export const saveDataInLocalStorage = (
  dataLocalStorage: string,
  localStorageKey: string
) => localStorage.setItem(localStorageKey, JSON.stringify(dataLocalStorage));

export const getDataInLocalStorage = (localStorageKey: string) =>
  JSON.parse(localStorage.getItem(localStorageKey) || "[]");
