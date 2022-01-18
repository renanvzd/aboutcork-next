import { ItemContainer } from './styles';

interface ExperienciaProps {
  title: string;
  description: string;
}

export default function ExperienciaItem({ title, description }: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </ItemContainer>
  );
}
