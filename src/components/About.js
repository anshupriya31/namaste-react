import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props.name + "Parent Component Did Mounnt");
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Us Page!!!!!!!!</h2>
        <UserClass name={"First"} location={"Bangalore (Class)"} />
      </div>
    );
  }
}

export default About;

// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About Us Page!!!!!!!!</h2>
//       {/* <User name={"Anshu (Function)"}/> */}
//       <UserClass name={"Anshu (Class)"} location={"Bangalore (Class)"}/>
//     </div>
//   );
// };

// export default About;

