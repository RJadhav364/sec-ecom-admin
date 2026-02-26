import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAdminStore = create(persist((set) => ({
      isAdminLogin: false,
      token: null,
      email: null,
      id: null,
      username: null,
    //   customeProfilePic: null,
      setAdminAuth: (newState) => set((state) => newState),
    }),
    {
      name: "Admin-Authentication-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAdminStore;
