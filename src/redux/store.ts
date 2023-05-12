import { configureStore } from "@reduxjs/toolkit";

import evaluationReducer from "./evaluations/evaluationContractSlice";

export const store = configureStore({
  reducer: {
    evaluationEval: evaluationReducer,
  },
});
