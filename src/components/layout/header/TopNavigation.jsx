import React from 'react'
import { Link } from 'gatsby'

const TopNavigation = () => {
  return (
    <nav className="px-8 py-4 bg-grey-900">
        <ul className="flex">
            <li className="px-4"><Link activeClassName="text-white" to="/" className="nav-link">Home</Link></li>
            <li className="px-4"><Link activeClassName="text-white" to="/courses" className="nav-link">Courses</Link></li>
            <li className="px-4"><Link activeClassName="text-white" to="/about" className="nav-link">About</Link></li>
            <li className="px-4"><Link activeClassName="text-white" to="/contact" className="nav-link">Contact</Link></li>
            <li className="px-4"><Link activeClassName="text-white" to="/become-a-instructor" className="nav-link">Become a Instructor</Link></li>
        </ul>
    </nav>
  )
}

export default TopNavigation