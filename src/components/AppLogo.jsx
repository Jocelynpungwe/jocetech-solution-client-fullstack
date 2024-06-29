import styled from 'styled-components'

const AppLogo = () => {
  return (
    <Wrapper>
      <span>JocesTech</span> Solution
    </Wrapper>
  )
}

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--actual-white);
  span {
    color: var(--primary-chocolate);
  }
`

export default AppLogo
