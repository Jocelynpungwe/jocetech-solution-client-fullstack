import AppLogo from './AppLogo'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleSideBar,
  toggleCloseSideBar,
} from '../features/toggle/toggleSlice'
const Sidebar = () => {
  const { user } = useSelector((store) => store.user)
  const { isSideBarOpen } = useSelector((store) => store.toggle)
  const dispatch = useDispatch()

  return (
    <SidebarContainer>
      <aside
        className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <AppLogo />
          <button
            className="close-btn"
            onClick={() => dispatch(toggleCloseSideBar())}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={() => dispatch(toggleCloseSideBar())}>
                  {text}
                </Link>
              </li>
            )
          })}
          {user && (
            <li>
              <Link
                to="/checkout"
                onClick={() => dispatch(toggleCloseSideBar())}
              >
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--actual-white);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--primary-blackish);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-blackish);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
