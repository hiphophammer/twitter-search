import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    langObj: require("./locale/ko_kr.json"),
  },
  reducers: {
    setKorean: (state) => {
      state.langObj = require("./locale/ko_kr.json");
    },
    setEnglish: (state) => {
      state.langObj = require("./locale/en_us.json");
    },
  },
});

export const { setKorean, setEnglish } = languageSlice.actions;
export default languageSlice.reducer;
