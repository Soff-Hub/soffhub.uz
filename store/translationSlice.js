// store/translationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    language:'',
    english: '',
    uzbek: '',
  },
};

const translationSlice = createSlice({
  name: 'translations',
  initialState,
  reducers: {
    setEnglishData(state, action) {
      state.data.english = action.payload;
    },
    setUzbekData(state, action) {
      state.data.uzbek = action.payload;
    },
    setLanguageData(state, action) {
        state.data.language = action.payload
    }
  },
});

export const { setEnglishData, setUzbekData, setLanguageData } = translationSlice.actions;
export default translationSlice.reducer;
