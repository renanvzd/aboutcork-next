import { Parallax } from 'react-parallax';
import { ParallaxContainer } from './styles';

interface ExperienciaProps {
  backgroundImage: string;
  // description: string;
}

export default function ParallaxItem({ backgroundImage }: ExperienciaProps) {
  return (
    <ParallaxContainer>
      <Parallax
        className='image'
        blur={0}
        bgImage={backgroundImage}
        strength={800}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        {/* <div className='content'>
          <span className="img-txt">{description}</span>
        </div> */}
      </Parallax>
    </ParallaxContainer>
  );
}
