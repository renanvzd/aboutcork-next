import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
margin: 12rem auto;
max-width: 85rem;
padding: 0 1rem;

@media(max-width:1450px) {
  max-width: 70rem;
}
@media(max-width:1000px) {
  max-width: 50rem;
}
@media(max-width:700px) {
  margin: 8rem auto;
  padding: 0 2rem;
}
`

export const ContainerExperience = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid #0EE7B7;

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      padding-bottom: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: linear-gradient(2deg, #88ffb9 65%, #11172B 100%);
    padding: 1rem;
    padding-top: 2.5rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    max-width: 19rem;

    transition: 0.5s;

    h1 {
      color: #121214;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: #0b0b0f;
      /* background: linear-gradient(90deg, rgba(255,255,255,1) 6%, rgba(87,87,87,1) 100%); */
      /* background: -webkit-linear-gradient(180deg,  rgba(87,87,87,1) 50%, rgba(255,255,255,1) 50%); */
      /* background: linear-gradient(to right, 
        rgba(116,186,106,1) 320%, 
        rgba(3,28,0,1) 60%
        );
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent; */
	      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: '#C4C4C4';
      font-size: 1rem;
      font-weight: 300;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
