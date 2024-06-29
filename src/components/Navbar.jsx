import styled from 'styled-components'
import AppLogo from './AppLogo'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../features/toggle/toggleSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user)

  return (
    <header className="background-header">
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <AppLogo />
            </Link>
            <button
              type="button"
              className="nav-toggle"
              onClick={() => dispatch(toggleSideBar())}
            >
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              )
            })}
            {user && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
          <CartButtons />
        </div>
      </NavContainer>
    </header>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(46, 45, 45);

  .nav-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 1020px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-column-gap: 100px;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: #fff;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--primary-chocolate);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
