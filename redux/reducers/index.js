const intialState = {
    menu:false,
    

 }
 
 export default function AppReducer(state=intialState,action){
    switch(action.type){
        case "SET_MENU":{
            return{
               ...state,
               menu:action.menu
            }
         }

       
 
       
 
       default:
          return state
    }
 }