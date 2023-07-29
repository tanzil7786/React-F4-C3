import React,{useState} from 'react';
import UserContext from './UserContext';



const UserProvider=(props)=>{

    const [profileInfo,setProfileInfo]=useState('');
     
   console.log(profileInfo);

    return(
        <>
        <UserContext.Provider value={{
            profileInfo,setProfileInfo
        }}>
            {props.children}
        </UserContext.Provider>
        </>
    );
}

export default UserProvider;