import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Userdetails.css"; // Import the CSS file for styling

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    // Fetch user details from the server when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await Axios.get("http://localhost:4001/Route");
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleClick = (userId) => {
    Axios.delete(`http://localhost:4001/Route/delete-user/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Record deleted successfully");
          window.location.reload();
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };
  

  return (
    <div className="user-details-container">
      <h2 style={{paddingBottom:"2%"}}>User Details</h2>
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Action</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user, index) => (
            <tr key={index}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td><button onClick={() => handleClick(user._id)} class="btn btn-danger">
                    Remove
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
