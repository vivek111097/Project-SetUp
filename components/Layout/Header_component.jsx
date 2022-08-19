import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

const Header = () => {
  const router = useRouter();
  return (
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <a
        href="index.html"
        className="logo d-flex align-items-center scrollto me-auto me-lg-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        <img src="https://upstox.com/open-demat-account/assets/images/logo.png" alt="" />
      </a>
      <nav id="navbar" className="navbar">
        <ul>

          <li >
            <Link href="/about">
              <a className="nav-link scrollto">
                About
              </a>
            </Link>

          </li>
          <li>
            <Link href="/service">
              <a className="nav-link scrollto">
                Services
              </a>
            </Link>
          </li>

          <li>
            <Link href="/blogs">
              <a className="nav-link scrollto">
                Blogs
              </a>
            </Link>
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