import SectionTitle from '../SectionTitle';
import ParallaxItem from './ParallaxItem';

import { Container, ContainerSquad } from './styles';

export function HomeFourthSection() {
  return (
    <Container>
      <ContainerSquad>
        <SectionTitle title="We love it!" />
        <ParallaxItem
          backgroundImage="/images/Cork.jpg"
        // description='Cheers'
        />

      </ContainerSquad>
    </Container>
  );
}

