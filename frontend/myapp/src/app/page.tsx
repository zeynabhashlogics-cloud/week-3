import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/input";
export default function Home()
{
    return (
<> 
<Header/>
<h1 className="text-red-900 font-bold">this it the home page</h1>
<p>input here</p>

<div className="border-3 w-50 h-10 border-blue-200">
      <Input enter="Enter your name" />
    </div>
    
<Button text= "enter"/>
</>
    );
}
