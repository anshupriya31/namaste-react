import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Test",
        location: "default",
        avatar_url: "https://dummy.com",
      },
    };
    // console.log(this.props.name + "Child Component");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mounnt");

    const data = await fetch("https://api.github.com/users/anshupriya31");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @nail_it_up__</h4>
      </div>
    );
  }
}

export default UserClass;
