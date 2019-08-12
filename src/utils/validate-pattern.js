export const emailPattern = new RegExp(
    `^(("[\\w-\s]+")|([\\w-]+(?:\\.[\\w-]+)*)|("[\\w-\\s]+")([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)`
  );
  
  export const phoneNoPattern = new RegExp("^[0][0-9]{1}[0-9]*$");
  
  export const wordPattern = new RegExp("^[a-zA-Z ]*$");
  
  export const numberPattern = new RegExp("^[0-9]*$");
  
  export const amountPattern = new RegExp("^\\d+(\\.\\d{1,2})?$");
  
  export const nrcPattern = new RegExp(
    "^([0-9]{1,2})/([A-Z][a-z]|[A-Z][a-z][a-z])([A-Z][a-z]|[A-Z][a-z][a-z])([A-Z][a-z]|[A-Z][a-z][a-z])\\([N,P,E]\\)([0-9]{6})$"
  );
  