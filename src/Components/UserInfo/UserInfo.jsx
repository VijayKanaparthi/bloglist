import React from "react"
import "./UserInfo.css"

const UserInfo = () => {
  return (
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1>Vijay Kanaparthi</h1>
      <p>Software Developer At Chennai</p>
    </div>
  )
}

export default UserInfo
