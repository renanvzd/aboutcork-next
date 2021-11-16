import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/four-leaf.png" alt="Four Leaf" />
        <h1>Cork</h1>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a className={styles.active}>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/historias">
            <a>Histórias</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/duvidas">
            <a>Dúvidas Frequentes</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/dicas">
            <a>Dicas</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/galeria">
            <a>Galeria</a>
          </ActiveLink>

        </nav>
      </div>
    </header>
  )
}