// store/translationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    language:'ru',
    english: '',
    uzbek: '',
  
  },
};

const translationSlice = createSlice({
  name: 'translations',
  initialState,
  reducers: {
    
    setLanguageData(state, action) {
      state.data.language = action.payload
  },
    setEnglishData(state, action) {
      state.data.english = action.payload;
    },
    setUzbekData(state, action) {
      state.data.uzbek = action.payload;
    },
  },
});

export const { setEnglishData, setUzbekData, setLanguageData } = translationSlice.actions;
export default translationSlice.reducer;
