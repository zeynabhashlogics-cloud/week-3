import Link from "next/link";
// imports the link component from nextlink module
export default function Header() //function
{
    return  (
        <nav>
            <Link href ="/">home</Link> {" "}
           <Link href ="/">about</Link> {" "}
           <Link href ="/">tasks</Link> 
            
        </nav>
    );
    
}