import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
margin: 8rem auto;
max-width: 85rem;
padding: 0 1rem;

@media(max-width:1450px) {
  max-width: 70rem;
}
@media(max-width:1000px) {
  max-width: 50rem;
}
@media(max-width:700px) {
  margin: 6rem auto;
  padding: 0 2rem;
}
`

export const ContainerSquad = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 6rem;
    border-bottom: 3px solid #0EE7B7;

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 4rem;
      padding-bottom: 5rem;
      gap: 2rem;
    }
  }
`;


export const ParallaxContainer = styled.div`
  padding-top: 2rem;
/* background-attachment: fixed; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
> div {
  
  
  .image {
      height: 800px;
      max-width: 100%;
      background-position: top;
      @media (max-width: 600px) {
        height: 400px;
        max-width: 100%;
      }
  }
}
`
