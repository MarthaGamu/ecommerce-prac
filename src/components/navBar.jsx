import React, { Component } from 'react'
class Navbar extends Component {
    
    render() { 
        return ( <div>
            <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  Navbar<span className ='badge badge-pill badge-secondary'>{this.props.totalCounters}</span>
</nav>
        </div> );
    }
}
 
export default Navbar;