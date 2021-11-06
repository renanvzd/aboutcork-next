import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/four-leaf.png" alt="Four Leaf" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Histórias</a>
          <a>Perrengues</a>
          <a>Dicas</a>
          <a>Dúvidas Frequentes</a>
          <a>Galeria</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  )
}