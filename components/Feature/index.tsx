import styled from 'styled-components';
import { theme as t } from '../../css/theme';
import { ActionButton } from '../../css/common';

interface IOrder {
  order?: number;
}

const StyledFeature = styled.section`
  width: 100%;
  padding: 2.5rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTextContainer = styled.div`
  color: ${t.colors.primary};
  ${props => {
    if (props.order === 2) {
      return `
        margin-left: 1rem;
        order: 2;
      `;
    } else {
      return `
        margin-right: 1rem;
        order: 1;
      `;
    }
  }};

  h2 {
    font-size: 2.8rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    letter-spacing: 1.5px;
  }

  p {
    font-size: 2rem;
    font-family: ${t.fonts.secondary};
    letter-spacing: 1.5px;
    margin-bottom: 4rem;

    span {
      font-style: italic;
    }
  }
`;

const StyledImageContainer = styled.div`
  width: 80%;
  overflow: hidden;
  ${props => {
    if (props.order === 2) {
      return `
        order: 1;
        margin-right: 1rem;
      `;
    } else {
      return `
        order: 2;
      `;
    }
  }};

  img {
    width: 100%;
    margin: auto;
    object-fit: contain;
  }
`;

export default function Feature({ order }: IOrder) {
  return (
    <StyledFeature>
      <StyledTextContainer order={order}>
        <h2>Header Title Gotham Book 60pt</h2>
        <p>
          Description text Garamond Premier Pro Regular or <span>Italic</span>{' '}
          45pt
        </p>
        <ActionButton variant='secondary'>Action Button</ActionButton>
      </StyledTextContainer>
      <StyledImageContainer order={order}>
        <img src='/pexels-vlada-karpovich-4050318.jpg' alt='Feature Image' />
      </StyledImageContainer>
    </StyledFeature>
  );
}