import { Dispatch, SetStateAction } from "react";
import { AccountEndpoint, CookiesForUser, UserValues, cookieSettings } from "../definitions";
import { useCookies } from "react-cookie";

export const account = async (
  endpoint: AccountEndpoint,
  userInfo: UserValues,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  let json;
  let code;
  let error: { code: string; description: string } | undefined;

  try {
    setLoading(true); // Start loading
    const response = await fetch('https://natureai.azurewebsites.net/' + endpoint, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (response.status === 400 && endpoint === 'account/login') alert('Fel mailadress eller lösenord!');
    if (response.status === 400 && endpoint === 'account/register') alert('Kontot är upptagen!');


    if (response.status === 200) {
      code = response.status;
      json = endpoint === "account/login" ?
        await response.json() as CookiesForUser :
        await response.json();
      console.log('Status code is 200 and the fetching process has been successfully completed!', json)
    }

    if (!response.ok) {
      json = await response.json() as string
      console.log(response.status, response.statusText, '- json response:', json) // on error
      setLoading(false);
    }

  } catch (error) {
    setLoading(false);
    console.error('Something went wrong fetching data:', error);
  }

  return { code, json, error };
}

// http://localhost:3000/signin?token=eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJoamFsbWFyLnN0cmFubmluZ2VAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI5NzQ5MjY2NC1lMDgxLTQ0ZjktYjFjMi0yMWI2NjViNWI0MGMiLCJleHAiOjE3MTc0OTI0NDYsImlzcyI6Im5hdHVyZWFpIiwiYXVkIjoibmF0dXJlYWlfYXBpIn0.whXZY5Rmk8j1KshSYduK6QB6P7x5FypldZ1eCrWMTB0
