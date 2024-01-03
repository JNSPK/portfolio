import '../styles/nav.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import Media from 'react-media';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`header ${showNav ? 'active' : 'inactive'}`}>
      <Media queries={{ small: '(max-width : 720px)' }}>
        {(matches) =>
          matches.small ? (
            ''
          ) : (
            <section className='logo-header'>
              <p className='name-header'>Johan Nilsson</p>
            </section>
          )
        }
      </Media>
      <button className='mobile-burger' onClick={handleShowNav}></button>
      <nav className={`navbar ${showNav ? 'active' : 'inactive'}`}>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={handleShowNav}>
          Accueil
        </NavLink>
        <NavLink
          to='/stack'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={handleShowNav}>
          Stack
        </NavLink>
        <NavLink
          to='/projets'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={handleShowNav}>
          Projets
        </NavLink>
        <NavLink
          to='/a-propos'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={handleShowNav}>
          À Propos
        </NavLink>
        <a
          href='https://github.com/JNSPK'
          className='link'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='link-img' src={github} alt='Github logo'></img>
        </a>
        <a
          href='https://www.linkedin.com/in/johan-nilsson-2ab05a79/'
          className='link'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='link-img' src={linkedin} alt='Github logo'></img>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
