import Layout from "@/layout/Layout";
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { AiFillCloseCircle, AiTwotoneCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";

function login() {
    // react hook form 
    const {register,handleSubmit} = useForm()
    // show password
    const [showPass,setShowPass] = useState(false)
    // match username
    const [username,setUsername] = useState(false)

    // handle login or register 
    const handleLoginRegister = (data) =>{
        console.log(data);
    }
    return (
        <Layout title={`লগিন ও রেজিস্টার`}>
          <div className="h-dvh flex items-center justify-center">
          <form onSubmit={handleSubmit(handleLoginRegister)} className="w-72 mx-auto">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                  <div className="relative flex items-center">
                  <input {...register('username')} id="username" className="px-4 py-2 rounded border w-full" placeholder="abusayeed" type="username" />
                  <span className="absolute right-1"> {!username ?<AiFillCloseCircle color="red" />  :<IoIosCheckmarkCircle color="green" />}</span>
                  </div>
                    <label htmlFor="password">Password</label>
                    <div className="relative items-center flex w-full">
                    <input {...register('password')} id="password" className="px-4 py-2 rounded border w-full" placeholder="abusayeed" type={!showPass?'password':'text'} />
                    <span onClick={()=>setShowPass(!showPass)} className="absolute right-2 cursor-pointer">{showPass?<LuEye />:<LuEyeOff />}</span>
                    </div>
                    <button className="btn btn-success flex items-center gap-2">Login/Register <span className="animate-spin border-2 border-dashed rounded-full w-6 h-6"></span> </button>
                </div>
            </form>
          </div>
        </Layout>
    );
}

export default login;