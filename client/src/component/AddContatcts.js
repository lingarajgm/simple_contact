import React, { Component } from "react";

export default class AddContacts extends Component {
  constructor(props) {
    super(props);
    // ✅ Define refs
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  submitContact = (event) => {
    event.preventDefault(); // ✅ Prevent page reload

    const contact = {
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      email: this.emailRef.current.value,
    };

    fetch("http://localhost:8080/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then(() => {
        window.location.reload(); // Optional: remove if you want to reset form manually
      });
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitContact}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="First Name"
                ref={this.firstNameRef}
                type="text"
                className="validate"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                ref={this.lastNameRef}
                type="text"
                className="validate"
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                ref={this.emailRef}
                type="email"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <button
              className="waves-effect waves-light btn"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
