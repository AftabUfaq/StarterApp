import { createSlice,  createSelector,createEntityAdapter } from "@reduxjs/toolkit";
const usersAdapter = createEntityAdapter()
const initialState = usersAdapter.getInitialState({
    user: null,
    is_logged_in:false,
    token:null
  })

  
  export const loginSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
      logout: () => initialState,
      setUser: (state, action) => {
        console.log(action, "Meee");
        switch(action.type){
          case "userSlice/setUser":
            return{
              ...state,
              user:action.payload.user,
              token:action.payload.token,
              is_logged_in:true
            }
          default :{
            return state
          }
        }
       
      },
    },
  });
  
  export default loginSlice.reducer;
  
  export const { logout, setUser } = loginSlice.actions;