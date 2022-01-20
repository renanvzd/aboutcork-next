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
            description="Histórias e relatos sobre experiências vividas!"
            link="/historias"
          />
          <ExperienceItem
            title="Dúvidas"
            description="Aquelas dúvidas frequentes que sempre passam pela cabeça..."
            link="/duvidas"
          />
          <ExperienceItem
            title="Dicas"
            description="Confira aqui dicas gerais que podem auxiliar você nessa caminhada."
            link="/dicas"
          />
          <ExperienceItem
            title="Galeria"
            description="Fotos de eventos e da cidade."
            link="/galeria"
          />
        </section>
      </ContainerExperience>
    </Container>
  );
}

