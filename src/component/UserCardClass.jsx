import React from "react";

class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Loading...",
        bio: "Loading...",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SIlentCodeSage");
    const userData = await data.json();
    this.setState({
      userInfo: userData,
    });

    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("this has been executed after everything is completed");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("This is called when the UserCardClass component has been unmounted");
  }

  render() {
    const { name, bio } = this.state.userInfo;

    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4 max-w-sm w-full mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Name: {name}</h2>
        <h3 className="text-lg text-gray-600 mb-4">Status: {bio}</h3>
        <h4 className="text-md text-gray-500">Contact: nandunandakishor345@gmail.com</h4>
      </div>
    );
  }
}

export default UserCardClass;
