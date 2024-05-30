import { configureStore } from "@reduxjs/toolkit";
import authLoginReducer from "./slices/login/authLoginSlice";
import optionsMenuReducer from "./slices/menuOptions/menuOptionsSlice"

//store that saves the global states of the system
const store = configureStore({
  //Defines the reducers used by Redux in the application
  reducer: {
    //Name of the state slice that this reducer will handle
    verification: authLoginReducer, //Reducer in charge of handling user authentication and verification
    option: optionsMenuReducer
  },
});

export default store;
