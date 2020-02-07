export const validation = e => {
  const { name, value } = e.target;
  const errors = {};
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  switch (name) {
    case "email":
      !regEmail.test(value) && (errors["email"] = "Enter the valid email.");
      break;
    case "name":
      !regName.test(value) && (errors["name"] = "Enter valid name.");
      break;
    case "age":
      value < 0 && value >= 125 && (errors["age"] = "Enter valid age.");
      break;
    case "gender":
      !(value === "female" || value === "male") &&
        (errors["gender"] = "Enter valid gender.");
      break;

    default:
      return errors;
  }
  return errors;
};
