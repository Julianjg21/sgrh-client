import { createSlice } from "@reduxjs/toolkit";
//reducer que valida la redirecion al modulo menu segun la respuesta del login
const menuOptionsSlice = createSlice({
  name: "option",
  initialState: {
    selectedOption: "Control de Usuarios", //initial state
  },
  reducers: {
    changeSelectedOption(state, action) {
      state.selectedOption = action.payload; //change verification according to the status received by the login from loginForm
    },
  },
});

export const { changeSelectedOption } = menuOptionsSlice.actions; //export action of reducers
export default menuOptionsSlice.reducer; //export reducer
