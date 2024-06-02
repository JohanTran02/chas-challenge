export const differentPatterns = (property: string, createAccount: boolean | undefined) => {
  let pattern;
  let errorMessage;

  if(property === 'email' && createAccount){
    pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    errorMessage = 'Ogiltig mejladress. Vänligen ange en giltig mejladress.' 

  } else if(property === 'email' && !createAccount){
    pattern = /^(?!.*[>]).*$/; // No HTML tags
    errorMessage = 'Ogiltig inmatning.'; 
  }


  if(property === 'password' && createAccount){
    pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    errorMessage = 'Lösenordet måste innehålla minst 6 tecken, minst en stor bokstav, en liten bokstav, en siffra och ett specialtecken.'; 

  } else if(property === 'password' && createAccount){
    pattern = /^(?!.*[>]).*$/; // No HTML tags
    errorMessage = 'Ogiltig inmatning.';
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