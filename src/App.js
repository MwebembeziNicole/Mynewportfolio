import React, { useState } from "react";
 // Make sure your CSS file is correctly linked

// Import images and video
import profileImage from './images/me.jpg';
import hobbyVideo from './images/cake.mp4';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button id="darkModeToggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>MY PROFILE</h1>
    
    <div>
      <Profile />
    </div>
  

          <hr />
          <div id="prof1">
            <h3>PERSONAL INFORMATION</h3>
            <ul>
              <li>
                <b>FULL NAME</b>: MWEBEMBEZI NICOLE MBABAZI
              </li>
              <li><b>STUDENT ID</b>: B20723</li>
              <li>
                <b>COURSE</b>: BACHELOR OF SCIENCE IN COMPUTER SCIENCE
              </li>
              <li><b>YEAR</b>: 2</li>
              <li><b>INTERESTS</b>: CYBER SECURITY AND DATA CARE</li>
              <li><b>HOBBIES</b>: Baking and decorating cakes</li>
            </ul>
          </div>

          <hr />
          {/* Use imported video */}
          <video id="hobby" width="300" height="300" controls>
            <source src={hobbyVideo} type="video/mp4" />
          </video>
          <br />

          <hr />
          <div id="prof2">
            <h3>CAREER GOALS</h3>
            <h4>
              As a Computer Science student, my academic goal is to specialize
              in Data Science and Cybersecurity, gaining the necessary skills to
              analyze complex data and protect digital systems from threats. I
              aim to excel in my coursework, participate in hands-on projects,
              and build a strong portfolio that showcases my expertise in these
              fields. My ultimate goal is to secure a position at Centenary Bank,
              where I can apply my knowledge to enhance data security and
              decision-making processes. Alongside my studies, I also plan to
              pursue my passion for baking by making and selling cakes as a side
              business.
            </h4>
          </div>

          <hr />

          <table>
            <caption>YEAR 1 - SEMESTER 1 - GPA 4.19</caption>
            <tr>
              <th>COURSE</th>
              <th>COURSE CODE</th>
              <th>MARK</th>
              <th>CU</th>
              <th>GP</th>
            </tr>
            <tr>
              <td>
                <b>Essential Hardware and Software Concepts</b>
              </td>
              <td>ICT1102</td>
              <td>74</td>
              <td>4</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Fundamentals of Computing</b>
              </td>
              <td>ICT1103</td>
              <td>72</td>
              <td>4</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Structured Programming</b>
              </td>
              <td>CSC1101</td>
              <td>85</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>
                <b>Discrete Mathematics</b>
              </td>
              <td>MTH1102</td>
              <td>63</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <b>Writing and Study Skills</b>
              </td>
              <td>LNG1101</td>
              <td>76</td>
              <td>3</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>
                <b>Understanding the Old Testament</b>
              </td>
              <td>FS1103</td>
              <td>77</td>
              <td>3</td>
              <td>4.5</td>
            </tr>
          </table>

          <a href="https://www.magnoliabakery.com">magnolia bakery website</a>
          <br />
          <a href="https://elearning.ucu.ac.ug/faculty-of-science-and-technology/">
            UCU Engineering Faculty website
          </a>

          <hr />

          <div id="prof3">
            <h3>CONTACT INFORMATION</h3>
            <p>
              <b>Email:</b> nicolemwebembezi2@gmail.com
            </p>
            <p>
              <b>Phone:</b> 0774568712
            </p>
            <a href="mailto:nicolemwebembezi2@example.com">Send Email</a>
            <a href="https://www.linkedin.com/in/nicole-mbabazi-22aa81291/">
              My LinkedIn
            </a>
            <a href="https://github.com/">My GitHub</a>
          </div>
        </div>
      
    
  );
}

export default App;
