import React, { useContext, useEffect ,useState} from 'react';
import UserContext from '../Context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const { profileInfo, setProfileInfo } = useContext(UserContext);
  const [userInfo,setUserInfo]=useState();
   const navigate=useNavigate();


  console.log('Profile Page: ', profileInfo);

  useEffect(() => {
   if(!JSON.parse(localStorage.getItem('userInfo'))){
    navigate('/');
   }
    getProfile();
  }, [])


  async function getProfile() {
    try {
      const UserId=profileInfo.id || JSON.parse(localStorage.getItem('userInfo')).id;
      const response = await axios.get(`https://dummyjson.com/users/${UserId}`);
      console.log(response.data);
      setUserInfo(response.data);
    }
    catch (error) {
      console.log('Error', error);
    }
  }

 function logoutUser(){
   setProfileInfo("");
   localStorage.removeItem('userInfo');
   alert('Logout Successfully !');
  navigate('/');
 }

  return (
    <div className="profile-container">
      <h1 >Profile page</h1>
      <div className="profile-info">
        <div className="profile">
          <div className="username">
            <span>Username:</span> {userInfo && userInfo.username} 
          </div>
          <div className="name">
            <span>Name:</span> {userInfo && userInfo.firstName} {userInfo && userInfo.lastName}
          </div>
          <div className="gender-age">
            <div className="gender">
              <span>Gender:</span>{userInfo && userInfo.gender}
            </div>
            <div className="age">
              <span>Age:</span> {userInfo && userInfo.age}yr
            </div>
          </div>
          <div className="dob">
            <span>DOB:</span>{userInfo && userInfo.birthDate}
          </div>
          <div className="address">
            <span>Address:</span>{userInfo && userInfo.address.address}
          </div>
          <div className="phone">
            <span>Phone No:</span>{userInfo && userInfo.phone}
          </div>
      
        </div>
        <div className="pic-container">
          <div className="profile-pic">
            <img src={userInfo && userInfo.image} alt={userInfo && userInfo.username} />
          </div>
        </div>
      </div>
      <div className="logout-btn-section">
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
  )
}

export default Profile;