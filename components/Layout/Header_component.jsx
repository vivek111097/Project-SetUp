import React from 'react'

const Header = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-between">
  <a
    href="index.html"
    className="logo d-flex align-items-center scrollto me-auto me-lg-0"
  >
    {/* Uncomment the line below if you also wish to use an image logo */}
    {/* <img src="assets/img/logo.png" alt=""> */}
    <h1>
      
      HeroBiz<span>.</span>
    </h1>
  </a>
  <nav id="navbar" className="navbar">
    <ul>
      <li className="dropdown">
        <a href="#">
          <span>Home</span>{" "}
          <i className="bi bi-chevron-down dropdown-indicator" />
        </a>
        <ul>
          <li>
            <a href="index.html">Home 1 - index.html</a>
          </li>
          <li>
            <a href="index-2.html">Home 2 - index-2.html</a>
          </li>
          <li>
            <a href="index-3.html">Home 3 - index-3.html</a>
          </li>
          <li>
            <a href="index-4.html" className="active">
              Home 4 - index-4.html
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="nav-link scrollto" href="index.html#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="index.html#services">
          Services
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="index.html#portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="index.html#team">
          Team
        </a>
      </li>
      <li>
        <a href="blog.html">Blog</a>
      </li>
      <li className="dropdown megamenu">
        <a href="#">
          <span>Mega Menu</span>{" "}
          <i className="bi bi-chevron-down dropdown-indicator" />
        </a>
        <ul>
          <li>
            <a href="#">Column 1 link 1</a>
            <a href="#">Column 1 link 2</a>
            <a href="#">Column 1 link 3</a>
          </li>
          <li>
            <a href="#">Column 2 link 1</a>
            <a href="#">Column 2 link 2</a>
            <a href="#">Column 3 link 3</a>
          </li>
          <li>
            <a href="#">Column 3 link 1</a>
            <a href="#">Column 3 link 2</a>
            <a href="#">Column 3 link 3</a>
          </li>
          <li>
            <a href="#">Column 4 link 1</a>
            <a href="#">Column 4 link 2</a>
            <a href="#">Column 4 link 3</a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#">
          <span>Drop Down</span>{" "}
          <i className="bi bi-chevron-down dropdown-indicator" />
        </a>
        <ul>
          <li>
            <a href="#">Drop Down 1</a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Deep Drop Down</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator" />
            </a>
            <ul>
              <li>
                <a href="#">Deep Drop Down 1</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 2</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 3</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 4</a>
              </li>
              <li>
                <a href="#">Deep Drop Down 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Drop Down 2</a>
          </li>
          <li>
            <a href="#">Drop Down 3</a>
          </li>
          <li>
            <a href="#">Drop Down 4</a>
          </li>
        </ul>
      </li>
      <li>
        <a className="nav-link scrollto" href="index.html#contact">
          Contact
        </a>
      </li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle d-none" />
  </nav>
  {/* .navbar */}
  <a className="btn-getstarted scrollto" href="index.html#about">
    Get Started
  </a>
</div>
  )
}

export default Header