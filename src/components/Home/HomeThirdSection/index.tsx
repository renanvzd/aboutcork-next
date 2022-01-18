import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container, ContainerExperience } from './styles';

export function HomeThirdSection() {
  return (
    <Container>
      <ContainerExperience>
        <SectionTitle title=" What will I find?" description="" />

        <section>
          <ExperienceItem
            title="Histórias"
            description="Histórias de quem se aventurou e explorou!"
          />
          <ExperienceItem
            title="Dúvidas"
            description="Aquelas dúvidas frequentes que sempre passam pela cabeça..."
          />
          <ExperienceItem
            title="Dicas"
            description="Confira aqui dicas gerais que podem auxiliar você nessa caminhada."
          />
          <ExperienceItem
            title="Galeria"
            description="Fotos de eventos e da cidade."
          />
        </section>
      </ContainerExperience>
    </Container>
  );
}

