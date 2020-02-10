import React from "react";
export default function UserList(props) {
  const { name, age, gender, email } = props
  // console.log(name, props, "abcdefgh")
  return (
    <div className="userList">
      <div className="ui card">
        <div className="content">
          <div className="ui celled list">
            <div className="item">
              <div className="content">
                <div className="header">{name}</div>
                <div>
                  E-mail : {email}
                </div>
                <div>
                  Age : {age} Gender : {gender}
                </div>
              </div>
              <div className="updateButton" ><a type="button" name={email} onClick={(e) => props.onUpdateHandle(e)} >Update</a></div>
              <div className="updateButton" ><a type="button" name={email} onClick={(e) => props.onDeleteHandle(e)} >Delete</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
