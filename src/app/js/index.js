import create from "zustand";

const useServiceStore = create((set) => ({
  selectedService: {
    id: 0,
    open: false,
  },
  selectService: (service) =>
    set({
      selectedService: {
        id: service.id,
        open: true,
      },
    }),
}));

export default useServiceStore;
