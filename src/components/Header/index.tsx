import { ActiveLink } from './ActiveLink';
import { useState } from 'react'
import styles from './styles.module.scss';


export function Header() {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img className={styles.logo} src="/images/four-leaf.png" alt="Four Leaf" />
          <h1>Cork</h1>
          <div className={styles.logoWithLinks}>
            <img className={styles.barMenu} onClick={showSidebar} src='https://i.imgur.com/cmahuLK.png' alt='menu' />
            <nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
              <div className={styles.listItems}>
                <ul onClick={showSidebar}>
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
                      <a>Dúvidas</a>
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
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}