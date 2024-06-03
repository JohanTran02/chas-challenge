'use client'


// react-hook-form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Inputfield from "./Inputfield";

// Hooks
import { useState } from "react";

//TS 
import { UserValues, cookieSettings } from "@/app/lib/definitions";

// Redux
import { account, google } from "@/app/lib/CC_Backend/account";
import { useCookies } from "react-cookie";

import LoginLoader from "./LoginLoader"; // Import your loader component
import GoogleButton from "./GoogleButton";

export default function SignIn() {
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', "displayName"]);
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
        setCookie('accessToken', json.user.accessToken, cookieSettings);
        setCookie('displayName', json.user.displayName, cookieSettings);

      } else if (code !== 200 && error) {
        alert(error.description);
      }
    }

    // create account
    if (createAccount && data.password === data.confirmPassword) {
      await account("account/register", data, setLoading);
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
            <div className="flex justify-between mt-3 font-bold text-[14px]">
              <p
                onClick={() => setCreateAccount(prev => !prev)}
                className="underline">
                {!createAccount ? 'Skapa konto' : 'Logga in'}
              </p>
              <p className="">Glömt lösenord?</p>
            </div>

            {!createAccount && <div className="mt-6 mb-16"
              onClick={() => google()}>
              <GoogleButton />
            </div>}

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-darkGreen text-white text-nowrap px-8 py-3 w-3/6 max-w-44 rounded-3xl border-[1px] border-darkGreen text-l font-semibold hover:bg-neutralWhite hover:text-darkGreen">
                {!createAccount ? 'Logga in' : 'Skapa konto'}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
