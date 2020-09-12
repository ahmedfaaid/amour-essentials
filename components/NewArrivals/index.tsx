import styled from 'styled-components';
import Slider from 'react-slick';
import { theme as t } from '../../css';
import ProductCard from '../ProductCard';

const StyledNewArrival = styled.section`
  background-color: ${t.colors.primary};
  padding: 3rem 1rem;
  overflow: hidden;

  h3 {
    font-size: 2rem;
    color: ${t.colors.white};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }
`;

export default function NewArrivals() {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <StyledNewArrival>
      <h3>New Arrivals</h3>
      <div>
        <Slider {...config}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </StyledNewArrival>
  );
}
