import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <img src="/images/logo.svg" alt="logo.svg" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Menu 2</a>
          <a>Menu 3</a>
          <a>Menu 4</a>
          <a>Menu 5</a>
        </nav>
      </div>
    </header>
  )
}