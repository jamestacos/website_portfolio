import React from 'react';
import './App.css';
import img1 from './images/james.png';


function App() {
 return (
   <div className="App">
           <section style={{ maxWidth: "800px", margin: "0 auto" }}>
       <header className="App-header">
         <h1>My Portfolio</h1>
       </header>
     </section>
     <main>
     <section>
         <h2>About Me</h2>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
           <p>Hi, I'm James! <br></br> I am currently a senior at the University of California, Riverside pursuing a Bachelor's of Science in Computer Science with
           Business Applications and expecting to graduate in June. My interests include software development, artificial intelligence, machine learning, and cloud computing.
           In my free time, I love to stay active by going to the gym, playing tennis, and going out to grab food with friends. <br></br>
           </p>
           <img src={img1} alt="" style={{ maxWidth: '60%', height: 'auto' }} />
         </div>
       </section>
       <section>
         <h2>Technical Skills</h2>
         <ul>
           <strong>Languages:</strong> Python, C/C++, Java, SQL, HTML, CSS <br></br>
           <strong>Tools:</strong> PyCharm, Git/GitHub, Jenkins, SpiraTest, Postman, JIRA
         </ul>
       </section>
       <section>
         <h2>Projects</h2>
         <div>
           <h3>Fitness Tracker Bot | UCR Cutie Hack</h3>
           <p>Nov 2022</p>
           <ul>
             Developed an automated system using Discord web APIs to generate gym wellness statistics.<br></br>
             Utilized data structures to store and access general gym tips, exercises, and personal milestones.<br></br>
             Released to personal discord servers with more than 30 active users to help maximize their gym routines.<br></br>
           </ul>
         </div>
         <div>
           <h3>Automate Spotify Music | UCR Citrus Hack</h3>
           <p>Apr 2022</p>
           <ul>
             Implemented an application that returns the current song and artists being played in the console.<br></br>
             Applied Python’s request and urllib3 packages to collect Spotify API access tokens.<br></br>
             Parsed an astrology API webpage to play certain songs depending on the users’ horoscope.<br></br>
           </ul>
         </div>
         <div>
           <h3>Course Grade Tracker | UCR Cutie Hack</h3>
           <p>Nov 2021</p>
           <ul>
             Created a GPA script using pandas dataframe to load, filter, and parse csv data files in Python.<br></br>
             Incorporated data structures to store the given set of data for better readability and computations.<br></br>
             Engineered a program for students to track and calculate overall GPA with aggregate final grades.<br></br>
           </ul>
         </div>
         <div>
           <h3>Calculator Application | Hacktoberfest</h3>
           <p>Oct 2021</p>
           <ul>
             Developed a fully functional mathematical calculator with additional operations for complexity.<br></br>
             Incorporated a simple GUI using Tkinter for users to interact through the main menu.<br></br>
             Processed UML diagrams and customized distributed functions to handle different test cases.<br></br>
           </ul>
         </div>
       </section>
       <section>
       <h2>Contact</h2>
       <ul>
         Location: San Jose, CA<br></br>
         Phone: (408) 205-7390<br></br>
         Email: taxjames123@gmail.com<br></br>
         LinkedIn: <a href="https://www.linkedin.com/in/jamesxta408">linkedin.com/in/jamesxta408</a><br></br>
         Github: <a href="https://github.com/jamestacos">github.com/jamestacos</a><br></br>
       </ul>
     </section>
     </main>
     <footer>
       <p>&copy; 2022 My Portfolio. All rights reserved.</p>
     </footer>
   </div>
 );
}


export default App;

