import "./Footer.scss";
import logo from '../../assets/images/Logo.png';
import sc from '../../assets/images/Social Icons.png'
import { Link } from "react-router-dom";
const Footer =()=>{
    return(
        <footer className='footer'>
          <div className="footer-1">
          <div className="navbar-b ">
          <Link to='/' className='navbar-b fw-3 fs-22 flex align-center'>
              <img className='im' src={logo} alt="logo" />
            </Link>
           </div>
           <div >
            <h4>Contact</h4>
            <p>+1+86 852 346 000
            info@foodzero.com</p>
            <p>1959 Sepulveda Blvd.
            Culver City, CA, 90230</p>
           </div>
           <div>
            <h4>Never Miss a Recipe</h4>
            <img src={sc}></img>
            <p>Join our subscribers and get best recipe delivered each week!</p>
           </div>
          </div>
          <hr></hr>
           <div className="footer-2">
          <p>© 2020 Zero Inc. All rights Reserved</p> 
           </div>
        </footer>
    )
}
export default Footer