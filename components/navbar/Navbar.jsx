import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>Uclic</Link>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li>
              <Link href='/'>How it works ?</Link>
            </li>
            <li>
              <Link href='/'>Prices</Link>
            </li>
            <li>
              <Link href='/'>FAQ</Link>
            </li>
            <li>
              <Link href='/'>Blogs</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.logIn}>
        <Link href='/' className={styles.log}>
          Log in
        </Link>
        <Link href='/' className={styles.button}>
          Start free trial
        </Link>
      </div>
    </div>
  )
}

export default Navbar
