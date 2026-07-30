import Header from "../components/Header";
import Tasklist from "../components/tasklist";
export default function tasks()
{
    return (
        <>
       <Header/>
       <h1>task list</h1>
        <Tasklist t ="this is task 1"/>
        <Tasklist t ="this is task 2"/>
        <Tasklist t ="this is task 3"/>
        <Tasklist t ="this is task 4"/>
        </>
    );
}
 
