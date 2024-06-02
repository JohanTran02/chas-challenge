import { Dispatch, SetStateAction } from "react";
import { AccountEndpoint, CookiesForUser, UserValues } from "../definitions";

export const account = async (endpoint: AccountEndpoint, userInfo: UserValues, dispatch?: Dispatch<SetStateAction<boolean>>) => {
  let json;
  let code;
  let error: { code: string; description: string } | undefined;
  
  try {
    const response = await fetch('https://natureai.azurewebsites.net/' + endpoint, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if(response.status === 400 && endpoint === 'account/login') alert('Fel mailadress eller lösenord!'); 
    if(response.status === 400 && endpoint === 'account/register') alert('Kontot är upptagen!'); 
    

    if (response.status === 200) {
      code = response.status;
      json = endpoint === "account/login" ? 
        await response.json() as CookiesForUser : 
        await response.json();
      console.log('Status code is 200 and the fetching proccess has been successfully completed!', json)
    }

    if (!response.ok) {
      json = await response.json() as string
      // error = await json[0];

      console.log(response.status, response.statusText, '- json response:', json) // on error
    }

  } catch (error) {
    dispatch && dispatch(false); 
    // console.error('Something went wrong fetching data:', error);
  }

  return { code, json, error };
}


