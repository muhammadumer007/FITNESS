import { Link } from "react-router-dom";

export default function Home (){
    return (
        <>
        <header>
          <nav>
            <img scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_y7bTWHsVyzSsIiansDPjCE0rRdpG4XdJbA&usqp=CAU" width={80} height={80}/>
            <h1>FITNESS</h1>
           <li>
              <Link to="/">Home</Link>
              
              <Link to="About">About</Link>
              <Link to="servicest">services</Link>
              <Link to="blog">blog</Link>
              <Link to="contact">Contact</Link>
              
              </li>
              <button>BECOME A MEMBER</button>
          </nav>
        </header>
        <div className="container">
          <h1>BUILD BODY PERF
          </h1>
        </div>
        </>
    )

}