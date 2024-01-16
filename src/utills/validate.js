export const Validate = (email, password) => {
  const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //  const isNamevalid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailvalid) return "Email not valid";
  // if(!isNamevalid)return "Name not valid"
  if (!isPasswordvalid) return "password not valid";

  return null;
};
