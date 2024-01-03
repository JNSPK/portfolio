// import { Canvas } from '@react-three/fiber';
import '../styles/banner.scss';
import Name3d from './name3d';
import HeroMobile from './hero-mobile';
import Media from 'react-media';

const Banner = () => {
  return (
    <section className='banner'>
      <Media queries={{ small: '(max-width : 720px)' }}>
        {(matches) => (matches.small ? <HeroMobile /> : <Name3d />)}
      </Media>
    </section>
  );
};

export default Banner;
