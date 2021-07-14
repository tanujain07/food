var count = 0;
const set1 = new Set();
var resume = "RESUME SUDHANSHU GUPTA LinkedIn: https://www.linkedin.com/in/sudhanshu-gupta-68974217a/ Email ID: sudhanshu29gupta@gmail.com GitHub:  https://github.com/sudhanshu2900 Mobile No: +91 9462459567 EDUCATION Poornima College of Engineering, Jaipur, Rajasthan Bachelor’s of Technology in Computer Science, CGPA: 8.89 August 2018 – August 2022 Career Point Children Academy Senior Secondary School Sawai Madhopur, Rajasthan Senior Secondary in Science Mathematics, Percentage: 79.85% July 2018 Kendriya Vidyalaya, Sangathan Sawai Madhopur, RajasthanMatriculation, CGPA:9.4 March 2016 EXPERIENCE Campus Ambassador: At FRINZA (present), Internshala (May 2020- Aug 2020), BIT Mesra (Data Science Club) (Aug 2020- Oct 2020), Regex Software services (Jul 2020- Dec 2020) and many more…. Summer Internship (15 Days): I completed my 15 days internship after completion of 1st year from WAE consultancy services.I learn Python, Web Development (HTML, CSS).(May 2019, May 2019) Summer Internship (45 Days):  I completed my 45 Days summer Internship after completion of 2st year from Coursera (Online). I learn Python, Machine Learning and Deep Learning.(May 2020, June 2020) PROJECTS Face Recognition: Project detect faces from photos and also from live web-cam. Basically I used Haar-Cascade Classifier files and Tensorflow.JS to implement in javascript. It runs on web browser. College help Website: This is a college related website name Campus Guide. I had to used HTML, CSS, React JS, Bootstrap for Front-End and MySQL, Django for Back-End. (in continuation…) Medi Info Website: This is basically a medical related website that is created with HTML, CSS, Bootstrap and it contains MySQL Database which is connected with Python (in BackEnd). CERTIFICATIONS Python, HTML, CSS, Machine Learning, Convolution Neural Networks, C++, C, JAVA SKILLS Programming Language: C, C++, JAVA and Python. Web Development: HTML, CSS, React JS, JavaScript, Bootstrap. Database: MySQL Technologies/Skills: Machine Learning, CNN, DS Algorithm, Object Oriented Programming. Software: VS Code, Jupyter Notebook, Code Blocks, Dev C++, Turbo C, PyCharm, Eclipse, VS 2008,  XMAPP, Oracle VM Virtual Box, Octave. ACHIEVEMENT AND RESPONSIBILITY Award for Best Performance in RTU Exams for receive 8.85 CGPA out of 10 CGPA in 1st year.";

var newResume = resume.replace(/,/g, '');

var n = window.prompt("Enter number of skills: ");
alert("Number of skills are:  " + n);

var required = window.prompt("Enter your " + n + " skills (give space between each skills instead of pressing ENTER): ");
alert("Your skills are: " + required);

var minReqSkills = window.prompt("Enter minimum numbers of skills required out of " + n + " skills for a candidate: ");
alert("Your skills are: " + minReqSkills);

required = required.toLowerCase();
newResume = newResume.toLowerCase();

//convert required string to array
const requiredArr = required.split(" ");

//convert newResume string to array
const newResumeArr = newResume.split(" ");


for(var i=0; i<requiredArr.length; i++){
    if(newResumeArr.indexOf(requiredArr[i]) > -1)
	set1.add(requiredArr[i]);
}



count = set1.size;

document.write("<br>");
document.write("You have " + count + " skills out of " + n );

var percentage = (count / n)*100;

document.write("<br>");
document.write("<br>");
document.write("Your Resume " + percentage + "% match with profile.");

document.write("<br>");
document.write("<br>");

if(count >= minReqSkills)
	document.write("Congrutulations &#129321 your RESUME is select");
else
	document.write("Sorry &#128532 your RESUME is not select because resume have " + count + " skills, but company want " + minReqSkills + " skills.");

document.write("<br>");
document.write("<br>");
document.write("&#128519 Thanks for choosing our service &#128519");

document.write("<br>");
document.write("<br>");
document.write("&#129312 Visit again &#129312");


 