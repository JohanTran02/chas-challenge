'use client'

// react
import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Inputfield from "./Inputfield";

//TS 
import { UserInputValues } from "@/app/lib/definitions";


export default function SignIn(){
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const methods = useForm<UserInputValues>(); 
  const onSubmit: SubmitHandler<UserInputValues> = (data): void =>{
    console.log(data);
  } 

  return (
    <div className="h-11/12 w-10/12 max-w-[600px] py-10">
      <div className="w-full h-20">
        <div className="h-full w-24 border-2 border-black grid place-items-center text-xl font-semibold">
          <p>Logga</p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-48 w-full my-12">
        <div className="h-8 w-3/6 bg-darkGray"></div>
        <div className="h-4 w-full bg-darkGray"></div>
        <div className="h-4 w-full bg-darkGray"></div>
        <div className="h-4 w-full bg-darkGray"></div>
      </div>
      <FormProvider {...methods}>
        <form 
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full font-medium">
          <p className="text-2xl font-semibold my-4">
            {createAccount ? 'Skapa konto' : 'Logga in'}
          </p>
          <div className="flex flex-col gap-4">
            <Inputfield 
              type={"text"}
              required={true}
              property={"email"}
              error={methods.formState.errors} 
            />
            <Inputfield 
              type={"password"} 
              required={true} 
              property={"password"} 
              error={methods.formState.errors}
              />
            {createAccount &&
              <Inputfield 
              type={"password"} 
              required={true} 
              property={"password"} 
              error={methods.formState.errors}
              />}
          </div>
          <div className="flex justify-between mt-2">
            <p 
              onClick={() => setCreateAccount((prev => !prev))}
              className="underline">
                {!createAccount ? 'Skapa konto' : 'Logga in'}
            </p>
            <p className="">Glömt lösenord?</p>
          </div>
          <div className="flex justify-center mt-8">
            <button 
              type="submit"
              className="px-8 py-3 w-4/6 max-w-64 rounded-3xl border-[1px] border-black text-l font-semibold">
              Logga in
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
    
  )
}
