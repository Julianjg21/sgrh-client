import { createSlice } from "@reduxjs/toolkit";
//reducer que valida la redirecion al modulo menu segun la respuesta del login
const authLoginSlice = createSlice({
  name: "verification",
  initialState: {
    stateVerification: false, //initial state
  },
  reducers: {
    changeStateVerification(state, action) {
      state.stateVerification = action.payload; //change verification according to the status received by the login from loginForm
    },
  },
});

export const { changeStateVerification } = authLoginSlice.actions; //export action of reducers
export default authLoginSlice.reducer; //export reducer
