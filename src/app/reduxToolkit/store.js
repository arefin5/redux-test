const { configureStore } = require("@reduxjs/toolkit");
import employeeReducer from './slice';
import studentReducer from './mySlice';
import listSlices from './ListSlice';
export const store = configureStore({
    reducer:{
        employeeData:employeeReducer,
        studentData:studentReducer,
        listSlices
    }
})