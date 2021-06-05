import React, { Component } from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <a className="navbar-brand" href="#">Farmer</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/farmers">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Add Crop</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">View Crop</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Settings
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
          <li><a className="dropdown-item" href="#">Remove Account</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    );
};
export default Nav;