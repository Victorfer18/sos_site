import { create } from "zustand";
const getSetSessionStorage = (key, value = null) => {
  if (value) {
    window.sessionStorage.setItem(key, value);
    return;
  }
  return window?.sessionStorage.getItem(key);
};

const storeServiceData = create((set) => ({
  serviceData: JSON.parse(getSetSessionStorage("serviceData")) || null,
  setServiceData: (serviceData) => {
    set({ serviceData });
    getSetSessionStorage("serviceData", JSON.stringify(serviceData));
  },
}));

export { storeServiceData, getSetSessionStorage };
