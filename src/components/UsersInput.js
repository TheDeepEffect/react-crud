import React from "react";


export default function UsersInput(props) {

  const { name = "", age = "", email = "", agreed = false, gender = "" } = props.userProp
  const err = props.errors;
  // console.log(Object.values(err).length, "abcd")

  return (

    <div className="input-container">
      <div className="ui card">
        <div className="content">
          <form className="ui form"
            name="form name"
            onSubmit={props.update ? (e) => props.onSubmitHandleUpdate(e) : (e) => props.onHandleSubmitCreate(e)}
          // onSubmit={(e) => props.onSubmitHandle(e)}

          >
            <div className="four fields">
              <div className="field">
                <label htmlFor="name">Name </label>
                <input
                  required
                  value={name}
                  className={err.name ? "err" : ''}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={e => props.onChangeHandle(e)}
                />{err.name &&
                  <span className="err"> {err.name} </span>}
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  required
                  value={email}
                  type="email"
                  className={err.email ? "err" : ''}
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={e => props.onChangeHandle(e)}
                />{err.email &&
                  <span className="err"> {err.email} </span>}
              </div>
              <div className="feild">
                <label htmlFor="age">Age</label>
                <input
                  required
                  value={age}
                  type="number"
                  className={err.age ? "err" : ''}
                  id="age"
                  name="age"
                  placeholder="age"
                  onChange={e => props.onChangeHandle(e)}
                />{err.age &&
                  <span className="err"> {err.age} </span>}
              </div>
              <div className="field">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  required
                  className="ui dropdown { err.gender ?' err':'' }"
                  value={gender}
                  onChange={e => props.onChangeHandle(e)}
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="field">
              <div className="ui checkbox">
                <input
                  required
                  name="agreed"
                  id="agreed"
                  type="checkbox"
                  className="hidden"
                  checked={agreed}
                  onChange={(e) => { props.onChangeHandle(e) }}
                />
                <label htmlFor="agreed">
                  I agree to the Terms and Conditions
                </label>
              </div>
            </div>
            <div className="two fields" >
              <div className="field" >
                <button className="ui secondary button" name="create">
                  {props.update ? 'Update' : 'Create'}
                </button>
              </div>

            </div>
          </form>
          <div className="field" >
            <select
              name="sort"
              required
              className={err.gender ? 'ui dropdown err' : 'ui dropdown'}
              onChange={e => props.onChangeHandle(e)}
            >
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="age">Age</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
