import Header from "../components/Header";
//imports the header for the about page and displays it on this page
import Footer from "../components/footer";
//imports the footer for about page and displays it on thsi page
import Person from "../components/person";
// imports the person component for the about page and  displays it on page

//export default function
export default function About()
{
    return(
        <>
    {/*render the header component*/}
        <Header />

    <h1>this is the about page</h1>
    <h5>page</h5>
 <p>this is the information</p> 
 {/*passes the name and age of each person as props*/}
 <Person name ="ali" age ={12}/>   
  <Person name ="sara" age ={18}/> 
   <Person name ="hania" age ={13}/> 
    <Person name ="ahmed" age ={22}/> 

        <Footer/>
        </>


    );
}