'use client'
// Herbert.Robbins@gmail.com
// Charlie Bush.

// react-hook-form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Inputfield from "./Inputfield";

// Hooks
import { useState } from "react";

//TS 
import { isProdPath, UserValues } from "@/app/lib/definitions";
// import Update from "./Update";
// import GetStarted from "./GetStarted";

// Redux
import { account } from "@/app/lib/CC_Backend/account";
import { useCookies } from "react-cookie";

import LoginLoader from "./LoginLoader"; // Import your loader component

export default function SignIn() {
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const [user, setUser] = useState<UserValues | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  // hook use form
  const methods = useForm<UserValues>();

  const onSubmit: SubmitHandler<UserValues> = async (data) => {
    // log in
    if (!createAccount) {
      const { email, password } = data;
      console.log({ email, password })
      const { code, json, error } = await account("account/login", { email, password }, setLoading);

      if (code === 200) {
        // dispatch({type: 'user/onlineState', payload: data});
        setUser(data);
        setCookie('accessToken', json.user.accessToken, { path: "/", httpOnly: false, secure: true, domain: isProdPath });
      } else if (code !== 200 && error) {
        alert(error.description);
      }
    }

    // create account
    if (createAccount && data.password === data.confirmPassword) {
      console.log(data);
      const { code } = await account("account/register", data, setLoading);
      if (code === 200) {
        setUser(data);
      }
      return;
    }

    if (createAccount && data.password !== data.confirmPassword) {
      alert('Lösenordet stämmer inte, försök igen.');
    }
    return;
  }

  return (
    <>
      <div className="h-11/12 w-full max-w-[600px] mt-10">
        {loading && <LoginLoader />} {/* Display the loader based on the loading state */}
        {!createAccount && (
          <div className="flex flex-col justify-between h-48 w-full max-w-[456px] mx-auto text-center text-darkGreen">
            <div className="flex-1">
              <h1 className="font-bold text-3xl">Upptäck världen utanför!</h1>
            </div>
            <div className="flex-1">
              <p className="text-darkGreen font-bold">
                Gå i grupp eller själv, fota, samla och lär dig mer om saker utanför din dörr.
              </p>
            </div>
          </div>
        )}
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full font-medium">
            <p className="text-2xl font-semibold mb-4">
              {createAccount ? 'Skapa konto' : 'Logga in'}
            </p>
            <div className="flex flex-col gap-4">
              {createAccount && (
                <Inputfield
                  type="text"
                  required={true}
                  property="displayName"
                  error={methods.formState.errors}
                />
              )}
              <Inputfield
                type={"text"}
                required={true}
                property={"email"}
                error={methods.formState.errors}
                createAccount={createAccount && createAccount}
              />
              <Inputfield
                type={"password"}
                required={true}
                property={"password"}
                error={methods.formState.errors}
                createAccount={createAccount && createAccount}
              />
              {createAccount && (
                <Inputfield
                  type={"password"}
                  required={true}
                  property={"confirmPassword"}
                  error={methods.formState.errors}
                />
              )}
            </div>
            <div className="flex justify-between mt-2">
              <p
                onClick={() => setCreateAccount(prev => !prev)}
                className="underline">
                {!createAccount ? 'Skapa konto' : 'Logga in'}
              </p>
              <p className="">Glömt lösenord?</p>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-darkGreen text-white text-nowrap px-8 py-3 w-3/6 max-w-44 rounded-3xl border-[1px] border-darkGreen text-l font-semibold">
                {!createAccount ? 'Logga in' : 'Skapa konto'}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
