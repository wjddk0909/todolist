import React, { Component } from "react";

class Navbar extends Component {
    
    render(){
        return (
            <div className="navbar">
                <i class="navbar-logo fas fa-clipboard-list"></i>
                <span>To do List</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </div>
        )
    }

}

export default Navbar;