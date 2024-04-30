'use client'

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Inputfield from "./Inputfield";

//TS 
import { UserInputValues } from "@/app/lib/definitions";


export default function SignIn(){
  const methods = useForm<UserInputValues>(); 

  const onSubmit: SubmitHandler<UserInputValues> = (data) => console.log(data); 
  return (
    <div className="flex flex-col border-2 border-black min-h-[550px] h-auto min-w-[280px] w-5/6 max-w-[450px] rounded-xl pb-10">
      <div className=" h-40 w-full mx-auto mb-4 rounded-xl">
        <img 
          className="w-full h-full object-cover object-center rounded-t-xl"
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex-1 flex flex-col gap-2"
          >
          <div className="w-5/6 h-64 mx-auto flex flex-col gap-4">
            <Inputfield
              required={true}
              property={"email"}
              src={"https://www.svgrepo.com/show/501173/email.svg"}
              placeholder={"E-post"}
              type={"text"}
              error={methods.formState.errors}
              alt={"Email Icon"}
              />
            <Inputfield
              required={true}
              property={"password"}
              src={"https://www.svgrepo.com/show/513445/lock.svg"}
              placeholder={"Lösenord"}
              type={"text"}
              error={methods.formState.errors}
              alt={"Lock icon"}
              />
          </div>
          <button type="submit" className="bg-green-500 w-5/6 max-w-[350px] py-3 px-6 border-none rounded-md self-center text-lg text-white">SIGN IN</button>
        </form>
      </FormProvider>
    </div>
  )
}
