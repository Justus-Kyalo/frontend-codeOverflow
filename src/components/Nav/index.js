import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../images/logo.png'



const Navbar = () => {
    


    const handleSearch = e => {
        e.preventDefault();
        history.push(`/questions?search=${query.replaceAll(" ", "+")}`);
    };

    

     


  
  return (
    <>
    <div className="nav-box">
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="nav-logo">
                    <img className="codeOverflow-logo-img" src={logo} alt="codeOverflow"></img>
                    
                    </Link>
                </div>
                <div className="nav-right">
                    <div style={{marginRight:"5px"}}>{sessionUser ? sessionUser.displayName : ""}</div>
                    <div className="nav-search">
                    <div><svg className="magnifying-glass" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg></div>
                        <form onSubmit={handleSearch}>
                            <div><input className="nav-search" placeholder="Search..." onChange={(e)=>setQuery(e.target.value)}></input></div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </nav>
    </div>
    </>
  );
};
export default Navbar;