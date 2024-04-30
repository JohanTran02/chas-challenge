export const differentPatterns = (property: string) => {
  let pattern;
  let errorMessage;
  if(property === 'email'){
    pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    errorMessage = 'Ogiltig e-postadress. Vänligen ange en giltig e-postadress.' 
  } 

  if(property === 'password'){
    pattern = /^(?=.*[A-Z])(?=.*\d)(?!.*<.*>).*.{6,}$/;
    errorMessage = 'Vänligen ange en sträng som innehåller minst en stor bokstav, en siffra och är minst 6 tecken lång.'; 
  } 

  if(property === 'userName'){
    pattern = /^[a-zA-ZåäöÅÄÖ\s]{2,}$/;
    errorMessage = 'Vänligen ange en giltig sträng med minst två bokstäver.' 
  } 

  return {pattern, errorMessage};
}