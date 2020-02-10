import React from "react";
import UserInput from "./UsersInput";
import UserList from "./UserList";

let user = {
  name: "",
  email: "",
  age: 0,
  gender: "",
  agreed: true
};


/**
 * @description Class that contains two child components and state of the CRUD application.
 * @export
 * @class User
 * @extends React.Component
 */
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: user,
      users: [],
      errors: {},
      isInUpdate: false
    };
  }


  /**
   * @description Checks for errors in error object.
   * @param {Object} error - Error Object of the form.
   * @returns {boolean} true if there are errors else false
   * @memberof User
   */
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
  /**
   *@description Handles onClick event of Update button to set inputs of form with values of current user
   * @memberof User
   */
  handleUpdate = (e) => {
    const email = e.target.name;
    this.setState(state => (user = state.users.find(item => item.email === email)) && (state.currentUser = user) && (state.isInUpdate = !this.state.isInUpdate)

    )
  };

  /**
   *@description Handles Update Submit | Updates selected user on form Submit in update.
   * @memberof User
   */
  handleSubmitUpdate = (e) => {
    e.preventDefault();
    (this.validateForm(this.state.errors)) &&
      (this.setState(state => state.users.splice(state.users.indexOf(user), 1, user) &&
        (user = {}) && (state.currentUser = user) && (state.isInUpdate = !state.isInUpdate)
      ))
  }
  /**
   * @description Handles delete onClick | Deletes the current user form user list.
   * @memberof User
   */
  handleDelete = e => {
    e.preventDefault();
    const email = e.target.name;
    this.setState(state => state.users.splice(state.users.findIndex(item => item.email === email), 1))
  }

  /**
   * @description Handles submit of Create | Creates and add new User to the list.
   * @memberof User
   */
  handleSubmitCreate = (e) => {
    e.preventDefault();
    (!this.state.users.some(item => item.email === user.email)) &&
      (this.validateForm(this.state.errors)) &&
      (this.setState(state => state.users.push({ ...user }) &&
        (user = {}) && (state.currentUser = user)
      ))

  };

  /**
   * @description Sorts the list array as per given key.
   * @param {String} key - key to sort by.
   * @returns {Array} Sorted Array of objects
   * @memberof User
   */
  sortBy = key => {
    // console.log("sorted")
    const sortedUsers = [...this.state.users];
    console.log(sortedUsers)
    return sortedUsers.sort(
      (a, b) => (a[key] === b[key] ? 0 : a[key] > b[key] ? 1 : -1)
    );
  };

  /**
   * @description Validates onChnage and adds values to the user Object and errors to errors object.
   * @memberof User
   */
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
        user[name] = value
        break;
      case "name":
        errorsObj[name] = (!regName.test(value)) ? "Enter valid name." : '';
        user[name] = value
        break;
      case "age":
        // console.log(value);
        errorsObj[name] = !(value > 0 && value <= 125) ? "Enter valid age." : '';
        user[name] = value;
        break;
      case "gender":
        errorsObj[name] = value === "" ? 'Select the gender.' : '';
        user[name] = value;
        break;
      case "agreed":
        user[name] = !user[name];
        errorsObj[name] = user[name] ? '' : 'Agree to our terms please';
        // console.log(errorsObj[name], "error obj agree")
        break;
      case "sort":
        errorsObj[name] = user[name] ? '' : '';
        this.setState(state => state.users = this.sortBy(value))
        break;
      default:
        break;
    }
    console.log(errorsObj[name])
    errorsObj[name].length >= 0 && this.setState(state => state.errors[name] = errorsObj[name]);
    // console.log(user, "userssss")
    // console.log(this.state.errors, "state errors")


  };

  render() {
    const list = this.state.users.map((user, i) => (
      <UserList
        key={i}
        name={user.name}
        age={user.age}
        gender={user.gender}
        email={user.email}
        onUpdateHandle={this.handleUpdate}
        onDeleteHandle={this.handleDelete}
      />
    ));
    return (
      <div>
        <UserInput
          onSubmitHandleUpdate={this.handleSubmitUpdate}
          onHandleSubmitCreate={this.handleSubmitCreate}
          userProp={this.state.currentUser}
          onChangeHandle={this.handleChange}
          errors={this.state.errors}
          update={this.state.isInUpdate}
        />
        {list}
      </div>
    );
  }
}
