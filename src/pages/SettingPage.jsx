import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser, updateUserPassword } from '../features/user/userSlice'
import {
  Error,
  FormRow,
  Loading,
  SmallWebDescription,
  UserOrders,
} from '../components'
import { useNavigate } from 'react-router-dom'
import { getCurrentUserOrders } from '../features/order/orderSlice'

const SettingPage = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const { orderLoading: loading, orderError: error } = useSelector(
    (store) => store.order
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialData = {
    name: user?.name || '',
    email: user?.email || '',
    isResetPassword: false,
    oldPassword: '',
    newPassword: '',
  }

  const [userData, setUserData] = useState(initialData)

  useEffect(() => {
    if (!user) {
      navigate('/')
      setUserData(initialData)
      return
    }
    dispatch(getCurrentUserOrders())
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, isResetPassword, oldPassword, newPassword } = userData

    if ((!name || !email) && !isResetPassword) {
      toast.error('Please Fill Out All Fields')
      return
    }

    if (isResetPassword && (!oldPassword || !newPassword)) {
      toast.error('Please All Password Fields ')
      return
    }

    if (isResetPassword) {
      dispatch(updateUserPassword({ oldPassword, newPassword }))
      return
    }

    dispatch(updateUser({ name, email }))
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUserData((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <Wrapper>
      <h2>Settings</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-center">
          {userData.isResetPassword ? (
            <>
              <h3>Reset Password</h3>
              <FormRow
                type="password"
                name="oldPassword"
                labelText="Old Password"
                value={userData.oldPassword}
                handleChange={handleChange}
              />
              <FormRow
                type="password"
                name="newPassword"
                labelText="New Password"
                value={userData.newPassword}
                handleChange={handleChange}
              />
            </>
          ) : (
            <>
              <h3>Profile</h3>
              <FormRow
                type="text"
                name="name"
                value={userData.name}
                handleChange={handleChange}
              />

              <FormRow
                type="email"
                name="email"
                value={userData.email}
                handleChange={handleChange}
              />
            </>
          )}
          <button
            className="btn"
            style={{ backgroundColor: 'var(--clr-red-dark)' }}
            type="button"
            onClick={() =>
              setUserData((prevData) => {
                return {
                  ...prevData,
                  isResetPassword: !userData.isResetPassword,
                }
              })
            }
          >
            reset password
          </button>
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
      <h2>View All Orders</h2>
      <UserOrders />
      <SmallWebDescription />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--dark-shadow);

  h3 {
    margin-top: 0;
  }

  .dashboard-user-profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .form {
    margin: 0 0 1rem 0;
    border-radius: 0;
    box-shadow: var(--dark-shadow);
    padding: 1rem;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default SettingPage
