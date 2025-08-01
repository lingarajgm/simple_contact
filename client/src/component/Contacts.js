import { Component } from "react";
import AddContacts from "./AddContatcts";
import SingleContact from "./SingleContact";


export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/contacts")
      .then((response) => {
        console.log(`response : ${response}`);
        return response.json();
      })
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  }

  render() {
    return (
      <div>
        <div className="row">
          <AddContacts />
        </div>

        <div className="row">
          {this.state.contacts.map((item) => (
            <SingleContact key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
