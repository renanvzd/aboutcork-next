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



export const ContainerImage = styled.section`

.image {
  min-height: 100vh;
  position: relative;
}

.image .content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.content span.img-txt {
  background-color: #333;
  text-transform: uppercase;
  color: #fff;
  padding: 1rem;
  font-size: 1.5rem;
  letter-spacing: 10px;
}



h3 {
  letter-spacing: 6px;
  text-transform: uppercase;
  font: 1.3rem;
  text-align: center;
}

.text-box {
  text-align: center;
  padding: 3rem 1rem;
  text-align: justify;
  color: white;
}


`

export const ParallaxContainer = styled.div`
.image {
  min-height: 30rem;
  width: 100%;
  position: relative;
}

.image .content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.content span.img-txt {
  background-color: #333;
  text-transform: uppercase;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  letter-spacing: 10px;
}

`
