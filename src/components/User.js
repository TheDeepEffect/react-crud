import React from "react";
import UserInput from "./UsersInput";
import UserList from "./UserList";

const user = {
  name: "",
  email: "",
  age: 0,
  gender: "Female",
  agreed: false
};

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ ...user }, { ...user }, { ...user }],
      errors: {},
      formValid: false
    };
  }

  validateForm = errors => {
    let valid = true;
    if (this.state.gender === "") {
      return false;
    }
    Object.values(errors).forEach(value => value.length > 0 && (valid = false));
    return valid;
  }
  // handleSubmit = e => {
  //   let valid = false;
  //   valid = ((!this.state.gender === "") && !Object.entries(this.state.errors)) ? true : false;
  //   return valid

  // };
  handleSubmit = e => {
    e.preventDefault();
    this.validateForm(this.state.errors)


  }

  handleChange = e => {
    const { name, value } = e.target;
    const errorsObj = {};
    // console.log(name);
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    switch (name) {
      case "email":
        // console.log("eeee");
        errorsObj[name] = (!regEmail.test(value)) ? "Enter the valid email." : '';
        break;
      case "name":
        errorsObj[name] = (!regName.test(value)) ? "Enter valid name." : '';
        break;
      case "age":
        // console.log(value);
        errorsObj[name] = !(value > 0 && value <= 125) ? "Enter valid age." : '';
        break;
      case "agreed":
        console.log(e.target)
        errorsObj[name] = (!value) ? "Agree to our terms." : '';
      default:
        break;
    }
    user[name] = (errorsObj[name] === "") ? value : "";
    // console.log(user)
    // user[name] = () ? value : '';
    this.setState({ errors: errorsObj });
    console.log(user, "funijl")

  };

  render() {
    const list = this.state.users.map((user, i) => (
      <UserList
        key={i}
        name={user.name}
        age={user.age}
        gender={user.gender}
        email={user.email}
        agreed={user.agreed}
      />
    ));
    return (
      <div>
        <UserInput onChangeHandle={this.handleChange}
          errors={this.state.errors}
          validForm={this.state.validForm}
        />
        {list}
      </div>
    );
  }
}
