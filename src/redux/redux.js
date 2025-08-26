import { configureStore, createSlice } from "@reduxjs/toolkit";
import menuData from "../assets/data";

// 메뉴 slice
const menuSlice = createSlice({
  name: "menu",
  initialState: menuData.menu, // ✅ menuData 전체가 아닌 menuData.menu만 사용
  reducers: {},
});

// 장바구니 slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});
