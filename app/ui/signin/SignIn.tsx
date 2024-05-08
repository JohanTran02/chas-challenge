'use client'

// react-hook-form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Inputfield from "./Inputfield";

// Hooks
import { useState } from "react";

//TS 
import { UserInputValues } from "@/app/lib/definitions";
import Update from "./Update";


export default function SignIn(){
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const [user, setUser] = useState<{email: string; password: string} | null>(null)

  const methods = useForm<UserInputValues>(); 
  const onSubmit: SubmitHandler<UserInputValues> = (data): void =>{
    console.log(data);
    setUser(data); 
  } 

  return (
    <>
      {user === null ? 
        <div className="h-11/12 w-full max-w-[600px] ">
        
        <div className="flex flex-col justify-between h-48 w-full max-w-[456px] mx-auto text-center my-12 text-darkGreen">
          <div className="flex-1">
            <h1 className="font-bold text-3xl">Upptäck världen utanför!</h1>
          </div>
          <div className="flex-1">
            <p className="text-darkGreen font-bold">
              Gå i grupp eller själv, fota, samla och lär dig mer om saker utanför din dörr.
            </p>
          </div>
          
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
                className="text-darkGreen text-nowrap px-8 py-3 w-3/6 max-w-44 rounded-3xl border-[1px] border-darkGreen text-l font-semibold">
                Logga in
              </button>
            </div>
          </form>
        </FormProvider>
      </div> : 
      <Update />
      }
    </>
  )
}