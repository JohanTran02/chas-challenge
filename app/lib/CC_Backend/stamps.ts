import { StampCategories, Stampinfo } from "../definitions";

export const getStampsInfo = async(endpoint: 'getstampinfo' | 'getcategorywithstamps', query: 'stampId' | 'categoryId', value: number) => {
  
  // if(cookie){
    try {
      const response = await fetch(`https://natureai.azurewebsites.net/stamps/${endpoint}?${query}=${value}`, {
        headers:{
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${cookie.accessToken}`
        }
      }); 
      
      if(!response.ok){
        console.log(response.status, response.statusText);
      }
      
      const data = await response.json() as Stampinfo | StampCategories; 
      // console.log(data);
      return data

    } catch (error) {
      console.log(error)
    }
  // }
}

// export const stampCategories = async(endpoint: 'getcategorywithstamps', query: 'categoryId', value: number) => {
//   const cookie = await getCookie('Session'); 
  
//   if(cookie){
//     try {
//       const response = await fetch(`https://natureai.azurewebsites.net/stamps/${endpoint}?${query}=${value}`, {
//         headers:{
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${cookie.accessToken}`
//         }
//       });

//       if(!response.ok){
//         console.log(response.status, response.statusText);
//       }
//       const data = await response.json() as StampCategories
//       return data; 

//     } catch (error) {
//       console.log(error)
//     }
//   }
// }