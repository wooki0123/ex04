const storage = window.localStorage;

export const setItem = (key, value) => {
  storage.setItem(key, value);
};

export const getItem = (key) => {
  return JSON.parse(storage.getItem(key));
};
