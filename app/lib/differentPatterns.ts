export const differentPatterns = (property: string) => {
  let pattern;
  let errorMessage;
  if(property === 'email'){
    pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    errorMessage = 'Ogiltig mejladress. Vänligen ange en giltig mejladress.' 
  } 

  if(property === 'password'){
    pattern = /^(?=.*[A-Z])(?=.*\d)(?!.*<.*>).*.{6,}$/;
    errorMessage = 'Vänligen ange ett lösenord som innehåller minst en stor bokstav, en siffra och är minst 6 tecken lång.'; 
  }

  if(property === 'validate'){
    pattern = /^(?!.*[>]).*$/; // No HTML tags
    errorMessage = 'Ogiltig inmatning.' 
  } 

  if(property === 'displayName'){
    pattern = /^[a-zA-ZåäöÅÄÖ\s]{2,}$/;
    errorMessage = 'Vänligen ange en giltig användarnamn med minst två bokstäver.' 
  }

  return {pattern, errorMessage};
}