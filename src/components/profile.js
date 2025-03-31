import React from "react";
import profileImage from "./assets/me.jpg"; // Ensure the image is in src/

const Profile = () => {
  return (
    <div id="container">
      <div id="Heading">
        <div id="prof">
          {/* Display the imported image */}
          <img src={profileImage} alt="MNM" width="300" height="300" />
          <h2>MWEBEMBEZI NICOLE MBABAZI</h2>
          <h4>
            I am 23 years old, a female student at Uganda Christian University
            offering a Bachelor of Science in Computer Science. My passion in
            the IT world is Data Care and Cybersecurity. I enjoy watching movies
            and hanging out with my friends.
          </h4>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Profile;
