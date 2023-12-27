import { create } from "zustand";
import http from "http";
const getSetSessionStorage = (key, value = null) => {
  if (typeof window !== "undefined") {
    if (value) {
      window.sessionStorage.setItem(key, value);
    } else {
      return window.sessionStorage.getItem(key);
    }
  }
  return null;
};

const storeServiceData = create((set) => ({
  serviceData: JSON.parse(getSetSessionStorage("serviceData")) || null,
  setServiceData: (newServiceData) => {
    set({ serviceData: newServiceData });
    getSetSessionStorage("serviceData", JSON.stringify(newServiceData));
  },
}));

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World! NodeJS \n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export { storeServiceData, getSetSessionStorage };
