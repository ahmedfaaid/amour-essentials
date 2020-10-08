import styled from 'styled-components';
import { theme as t, ActionButton } from '../../css';

const StyledHero = styled.section`
  background: url('/pexels-photo-54283.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    background-size: cover;
  }
`;

const StyledHeroCTA = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
  color: ${t.colors.white};

  @media (max-width: 425px) {
    top: 60%;
    width: 90%;
  }

  @media (max-height: 520px) {
    top: 70%;
  }

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    margin-bottom: 3rem;
    line-height: 1.2;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.8rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }

    @media (max-height: 520px) {
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 2.5rem;
    font-family: ${t.fonts.secondary};
    font-weight: 300;
    margin-bottom: 4rem;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    @media (max-width: 425px) {
      font-size: 1.4rem;
    }

    @media (max-height: 520px) {
      margin-bottom: 2rem;
    }
  }
`;

const Italicized = styled.span`
  font-style: italic;
`;

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroCTA>
        <h1>
          Inspiring you with unique high quality & Premium Household Products
          Curated for Your Needs
        </h1>
        <p>Check Out New Arrivals</p>
        <ActionButton>Learn More</ActionButton>
      </StyledHeroCTA>
    </StyledHero>
  );
}
