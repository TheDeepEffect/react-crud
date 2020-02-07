import React from "react";

export default function UsersInput(props) {
  const err = props.errors;

  return (

    <div className="input-container">
      <div className="ui card">
        <div className="content">
          <form className="ui form" >
            <div className="four fields">
              <div className="field">
                <label htmlFor="name">Name </label>
                <input
                  className={err.name ? "err" : ''}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={e => props.onChangeHandle(e)}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={err.email ? "err" : ''}
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={e => props.onChangeHandle(e)}
                />
              </div>
              <div className="feild">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className={err.age ? "err" : ''}
                  id="age"
                  name="age"
                  placeholder="age"
                  onChange={e => props.onChangeHandle(e)}
                />
              </div>
              <div className="field">
                <label htmlFor="gender">Gender</label>
                <select className="ui dropdown { err.gender ?' err':'' }" >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="field">
              <div className="ui checkbox">
                <input
                  name="agreed"
                  id="agreed"
                  type="checkbox"
                  className="hidden"
                  onChange={(e) => props.onChangeHandle(e)}
                  checked={false}
                />
                <label htmlFor="agreed">
                  I agree to the Terms and Conditions
                </label>
              </div>
            </div>
            <button className="ui secondary button"
              disabled={Object.values(err).length > 1 ? false : true}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
