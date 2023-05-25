import { configureStore } from "@reduxjs/toolkit";

// torzenie stora - obiektu trzymającego stan
export const store = configureStore({
    reducer: {
        value: 123,
    },
})