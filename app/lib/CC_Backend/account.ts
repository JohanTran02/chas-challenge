import { AccountEndpoint, UserValues } from "../definitions";

export const account = async(endpoint: AccountEndpoint, userInfo: UserValues) => {
  let data; 
  
  try {
    const response = await fetch('https://natureai.azurewebsites.net/' + endpoint, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({userInfo})
    });

    if(!response.ok){
      data = await response.json();
      console.log(response.status, response.statusText, '- json response:', data.error) // on error
    }

  } catch (error) {
    console.error('Something went wrong fetching data:', error); 
  }
  
  return {data, userInfo};
}
