import { api } from "./../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IEvaluation {
  evaluationsData: {
    id: number;
  };
}

const initialState = {
  evaluationData: {
    id: 1,
  },
};

export const getEvaluations: any = createAsyncThunk(
  "evaluation/getEvaluations",
  async (id, thunkAPI) => {
    try {
      const resp = await api.get("/evaluations");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getEvaluationById: any = createAsyncThunk(
  "evaluation/getEvaluationById",
  async (id, thunkAPI) => {
    try {
      const resp = await api.get(`/get-evaluation-by-id/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const createEvaluation: any = createAsyncThunk(
  "evaluation/createEvaluation",
  async (data, thunkAPI) => {
    try {
      const resp = await api.post(`/create-evaluation`, data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const updateEvaluation: any = createAsyncThunk(
  "evaluation/updateEvaluation",
  async (data, thunkAPI) => {
    try {
      const resp = await api.put(`/update-evaluation`, data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const deleteEvaluation: any = createAsyncThunk(
  "evaluation/deleteEvaluation",
  async (id, thunkAPI) => {
    try {
      const resp = await api.delete(`/delete-evaluation/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const evaluationContractSlice = createSlice({
  name: "evaluationAPI",
  initialState,
  reducers: {
    clearMessageEvaluation: (state) => {},
  },
  extraReducers: (builder) => {
    //getThemes
    builder.addCase(getEvaluations.pending, (state, action) => {});
  },
});

export const { clearMessageEvaluation } = evaluationContractSlice.actions;

export default evaluationContractSlice.reducer;
