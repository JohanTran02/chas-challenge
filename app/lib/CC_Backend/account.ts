import { AccountEndpoint, UserValues } from "../definitions";

export const account = async(endpoint: AccountEndpoint, userInfo: UserValues) => {
  let data; 
  let code; 
  
  try {
    const response = await fetch('https://natureai.azurewebsites.net/' + endpoint, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(userInfo)
    });

    if(response.status === 200){
      data = await response.json();
      code = response.status; 
      console.log('Status code is 200 and the fetching proccess has been successfully completed!', data)
    }
    
    if(!response.ok){
      data = await response.json();
      const errorMessage: {code: string; description: string} = await data[0];
      console.log(response.status, response.statusText, '- json response:', data) // on error
      alert(errorMessage.description);
    }

  } catch (error) {
    console.error('Something went wrong fetching data:', error); 
  }
  
  return {code, data};
}
