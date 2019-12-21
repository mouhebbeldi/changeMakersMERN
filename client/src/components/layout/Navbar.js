import React,{Fragment} from 'react';
import './css/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
return (
<Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <h3 className="nav-item"><span className='capital'>C</span><span>hange</span>  <span className='capital'>M</span><span>akers</span> </h3>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/about'>About</Link>
            </li>
            <li className="nav-item dropdown">
            {/** eslint-disable-next-line*/  }
                <button className="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" >More</button>
               
          
                <div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdown">
                    <Link className='dropdown-item' to='/projects'>Projects</Link>
                    <Link className='dropdown-item' to='/institution'>Institution</Link>
                <div className="dropdown-divider"></div>
                    <p className='dropdown-item'>Visit Us On</p>
                    <a className='dropdown-item' href='https://www.facebook.com/change.makers.isi/'>Facebook</a>
                    <a className='dropdown-item disabled' href='#!'>Youtube</a>
                </div>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
</Fragment>
    )
}
export default Navbar;