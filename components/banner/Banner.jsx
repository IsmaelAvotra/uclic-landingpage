import Link from 'next/link'
import Image from 'next/image'
import styles from './Banner.module.css'

import right from '../../assets/right.svg'
import bannerImage from '../../assets/banner.png'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.text}>
        <div className={styles.usersNumbers}>
          <span>+24K</span>
          <p>people use Uclic ! </p>
        </div>
        <h2>
          Stop sending <br /> generic messages <br /> that{' '}
          <span>don't sell !</span>
        </h2>
        <Link href='/'>
          <Image src={right} width={40} height={20}></Image>
          <p>Start free trial</p>
        </Link>
      </div>
      <div className={styles.image}>
        <Image src={bannerImage} width={800} height={400}></Image>
      </div>
    </section>
  )
}

export default Banner
