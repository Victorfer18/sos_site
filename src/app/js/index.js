import { create } from "zustand";
const getSetSessionStorage = (key, value = null) => {
  if (value) {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key, value);
    }
    return;
  }
  if (typeof window !== "undefined") {
    return window.sessionStorage.getItem(key);
  }
  return null;
};

const storeServiceData = create((set) => ({
  serviceData: JSON.parse(getSetSessionStorage("serviceData")) || null,
  setServiceData: (serviceData) => {
    set({ serviceData });
    getSetSessionStorage("serviceData", JSON.stringify(serviceData));
  },
}));

export { storeServiceData, getSetSessionStorage };
