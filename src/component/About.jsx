import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";
import { useContext } from "react";
import { userContext } from "../utils/context";

const About = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100 py-12">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">About Us</h1>
        <h2 className="text-xl mb-4 text-gray-600">Welcome, {loggedInUser}</h2>
        {/* <UserCard descreption={{greeting:"Welcome to functional component", msg:"this is a functional component"}} /> */}
        <div className="mt-6">
          <UserCardClass msg="hello" />
        </div>
      </div>
    </div>
  );
}

export default About;
