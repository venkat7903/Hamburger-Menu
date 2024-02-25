/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-btn-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="web-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="hamburger-icon"
          >
            <GiHamburgerMenu size="25px" />
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            <button
              data-testid="closeButton"
              type="button"
              className="close-btn"
              onClick={() => close()}
            >
              <IoMdClose size="25px" />
            </button>
            <ul className="nav-links-container">
              <li>
                <Link to="/" className="nav-link">
                  <AiFillHome size="30px" />
                  <p className="nav-name">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  <BsInfoCircleFill size="30px" />
                  <p className="nav-name">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
