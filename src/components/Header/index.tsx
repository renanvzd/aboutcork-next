import { ActiveLink } from '../ActiveLink';
import { useState } from 'react'
import styles from './styles.module.scss';


export function Header() {
  const [active, setActive] = useState(0)

  function MobileNavbar() {
    if (active === 0) {
      setActive(1)
      var menu = document.querySelector('ul')
      menu.setAttribute('style', 'transform:translateX(0%)')

    } else {
      setActive(0)
      var menu_ = document.querySelector('ul')
      menu_.setAttribute('style', 'transform:translateX(100%)')
    }
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img className={styles.logo} src="/images/four-leaf.png" alt="Four Leaf" />
          <h1>Cork</h1>
          <div className={styles.logoWithLinks}>
            <div>
              <img className={styles.barMenu} onClick={() => MobileNavbar()} src='https://i.imgur.com/cmahuLK.png' alt='menu' />
            </div>

            <ul>
              <li>
                <ActiveLink activeClassName={styles.active} href="/">
                  <a className={styles.active}>Home</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/historias">
                  <a>Histórias</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/duvidas">
                  <a>Dúvidas Frequentes</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/dicas">
                  <a>Dicas</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/galeria">
                  <a>Galeria</a>
                </ActiveLink>
              </li>
            </ul>

          </div>
        </div>
      </header>
    </>
  )
}