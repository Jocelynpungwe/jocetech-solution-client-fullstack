import { useEffect } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/images/about-image.jpg'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desktop, laptop and phone drawing" />
        <article>
          <div className="title">
            <h2>About JocesTech</h2>
            <div className="underline"></div>
          </div>
          <p>
            At JocesTech, we're passionate about technology. Our mission is
            simple: to provide you with a handpicked selection of top-tier
            smartphones, laptops, and accessories. We're committed to delivering
            quality, guidance, and a seamless shopping experience.
            <strong> We JOCEST love tech, yes JUST tech</strong>
          </p>
          <h4>Our Purpose</h4>
          <p>
            Our purpose is simple yet profound—to make top-tier technology
            accessible to all. We curate a diverse collection of smartphones,
            laptops, and accessories, meticulously selected to cater to your
            varying needs and preferences.
          </p>
          <p>
            We're not just a tech store; we're your tech partners. We go beyond
            providing products; we offer guidance, expertise, and a personalized
            touch to help you discover the perfect device that seamlessly
            integrates with your lifestyle.
          </p>
          <h4>Join Our Community</h4>
          <p>
            Whether you're an early tech adopter or exploring new gadgets, join
            our community at JocesTech.com. Let's navigate the world of tech
            together and find devices that complement and enhance your life.
          </p>
          <p>Thank you for entrusting us to be your tech solution provider.</p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 1rem auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
