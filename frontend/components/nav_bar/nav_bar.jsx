import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {


  render(){

    let nav;
    if (this.props.currentUser){
      nav = (
        <nav className='main-nav'>

          <ul>
            <h2>{this.props.currentUser.first_name}</h2>
            <button onClick={() => this.props.logout()}>logout</button>
          </ul>
      </nav>
      );
    } else {
      nav = (
        <nav className='main-nav'>
          
          <ul>
            <Link to='/signup'>Sign Up</Link>
            <br/>
            <Link to='/login'>Login</Link>
          </ul>
        </nav>
      );
    }
    return(
      nav
    )
  }
}

export default NavBar;
