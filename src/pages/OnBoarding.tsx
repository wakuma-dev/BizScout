import { useReducer, type ChangeEvent } from 'react';
import { Helmet } from "react-helmet-async";
import Button from '../components/common/Button';
import SeButton from '../components/common/SeButton';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
interface InputState {
    businessName: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    referralCode: string;
}
type InputAction = {
 type: "SET_FIELD",
 payload: {
    key: keyof InputState,
    value: string;
 }
}
const initialState: InputState = {
    businessName: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    referralCode: ""
}
function reducer(state: InputState, action: InputAction) {
    switch(action.type){
   case "SET_FIELD":
    return {
        ...state,
        [action.payload.key]: action.payload.value

    }
    default: return state;
    }
}
export default function OnBoarding(){
    const navigate = useNavigate();
    const disabled = false;
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "SET_FIELD",
            payload: {
                key: e.target.name as keyof InputState,
                value: e.target.value
            }
        });
    }
    return(
        <main className="px-4 md:px-8 lg:px-12 w-full h-auto min-h-screen py-6 lg:py-10 bg-[#252423]">
            <Helmet>
                <title>List Your Business | BizScout</title>
            </Helmet>
            <div className="w-full max-w-3xl flex flex-col items-center justify-center text-center gap-3 py-5 mx-auto">
                <h2 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-normal
                 text-white">Tell us about <span className="text-[#ffd08b]">yourself</span></h2>
                <p className="text-[16px] leading-[26px] font-inter font-normal text-[#616160]">A few quick details to get your business listing started. It only takes a minute.</p>
            </div>
            <div className='W-full mx-auto max-w-3xl flex flex-col gap-4 lg:gap-6'>
                <div className='flex flex-col items-start gap-0.5'>
                    <input 
                    type="text"
                    name='businessName'
                    value={state.businessName}
                    onChange={handleChange}
                    placeholder='Business Name'
                    className='w-full bg-white p-3 outline-none rounded-xl'
                     />
                     <label className='text-[12px] leading-[16px] font-normal font-inter text-[#616160]'>Don't worry, we won't publish this</label>
                </div>
              <div className="w-full flex flex-col lg:flex-row gap-6">
                <input
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                    placeholder='First name'
                    className="w-full lg:w-1/2 bg-white p-3 outline-none rounded-xl"
                     />
                <input
                   type="text"
                   name="lastName"
                   value={state.lastName}
                   onChange={handleChange}
                   placeholder='Last Name'
                   className='w-full lg:w-1/2 bg-white p-3 outline-none rounded-xl'
                   />
              </div>
              <input
                 type="email"
                 name="emailAddress"
                 value={state.emailAddress}
                 placeholder='Email'
                 className="w-full bg-white p-3 outline-none rounded-xl"
                  />
                <input 
                   type="tel"
                   name="phoneNumber"
                   value={state.phoneNumber}
                   placeholder='Phone number'
                   className='w-full bg-white p-3 outline-none rounded-xl'
                    />
                <div className='flex flex-col items-start gap-0.5'>
                <input 
                   type="text"
                   name="referralCode"
                   value={state.referralCode}
                   placeholder='Referral Code (optional)'
                   className='w-full bg-white p-3 outline-none rounded-xl'
                   />
                   <span className="text-[12px] leading-[16px] font-inter font-normal text-[#616160]">Have a 
                    <Link to="/affiliateProgram" className='text-[#c4963c] underline'> referral code?</Link> Enter it here to link your listing.</span>
                   </div>
                   <div className='mt-3 w-full text-[14px] leading-[20px] font-inter font-normal border border-[#616160] bg-[#302F2E] px-2 py-3 text-white'>
                    Note: Your business listing requires your final approval before publication. Nothing goes live without your explicit consent.
                   </div>
                   <div className="flex items-center justify-between w-full">
                      <SeButton
                        onClick={() => navigate("/sellers")}
                        disabled={disabled}
                        text="Go Back"
                        className='text-white'
                        />
                        <Button
                        onClick={() => navigate("/jkd")}
                        disabled={disabled}
                        text="Submit"
                         />
                   </div>
            </div>
        </main>
    )
}