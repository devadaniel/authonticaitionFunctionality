// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <ul className="list-items">
      <Link to="/" className="nav-links">
        <li>Home</li>
      </Link>
      <Link to="/about" className="nav-links">
        <li>About</li>
      </Link>
    </ul>
  </>
)

export default Header
