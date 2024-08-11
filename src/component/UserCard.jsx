import { useEffect } from "react";

const UserCard = (props) => {


    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async() =>{
        const userInfo = await fetch("https://api.github.com/users/SIlentCodeSage");
        const userInfojson = await userInfo.json();
    }
    return (
        <div className="user-card">
            <h2>Name: Nandakishor</h2>
            <h3>Location: Wayanad</h3>
            <h4>Contact:nandunandakishor345@gmail.com</h4>
            <h6>{props.descreption.greeting}</h6> 
            <h6>{props.descreption.msg}</h6>
        </div>
    )
}

export default UserCard;