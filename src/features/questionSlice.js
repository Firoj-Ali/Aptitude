import { createSlice } from "@reduxjs/toolkit";
import aptitudeQuestions from "../data/aptitudeQuestions";
import reasoningQuestions from "../data/reasoningQuestions";
import verbalQuestions from "../data/verbalQuestions";

const initialState = {
  questions: [],
  currentPage: 0,
  questionsPerPage: 10,
  category: "aptitude", // Default category
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      switch (action.payload) {
        case "aptitude":
          state.questions = aptitudeQuestions;
          break;
        case "reasoning":
          state.questions = reasoningQuestions;
          break;
        case "verbal":
          state.questions = verbalQuestions;
          break;
        default:
          state.questions = aptitudeQuestions;
      }
      state.currentPage = 0; // Reset to first page when category changes
    },
    nextPage: (state) => {
      if (state.currentPage < Math.floor(state.questions.length / state.questionsPerPage)) {
        state.currentPage += 1;
      }
    },
    prevPage: (state) => {
      if (state.currentPage > 0) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { setCategory, nextPage, prevPage } = questionSlice.actions;
export default questionSlice.reducer;
