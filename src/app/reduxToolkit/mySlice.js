const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState={
    student:[]
}
const Slice=createSlice({
    name:"studentSlice",
    initialState,
    reducers:{
        addStudent:(state,action)=>{
          const data={
            studentId:nanoid(),
            studentName:action.payload
          }
          state.student.push(data)
        },
          
    }
});
export const {addStudent}=Slice.actions;

export default Slice.reducer;
