import { useState, useReducer } from 'react'
import Eye from 'lucide-react';
import EyeOff from 'lucide-react'

type LoginState = {
    emailAddress: string;
    password: string;
}
type LoginAction = 
| {
    type: "SET_FIELD";
    field: keyof LoginState;
    value: string;
}
const initialState: LoginState = {
    emailAddress: "",
    password: ""
}
function reducer(state: LoginState, action: LoginAction) {
    switch(action.type){
   case "SET_FIELD" : 
      return {
        ...state,
        [action.field]: action.value
      }
    default: return state;
    }
}
export default function Login(){
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <main className="w-full min-h-screen bg-[#2F3639] px-4 sm:px-8 lg:px-12">
            <div className="bg-[#FFFFFF] mx-8 my-3">
                
            </div>
        </main>
    )

}