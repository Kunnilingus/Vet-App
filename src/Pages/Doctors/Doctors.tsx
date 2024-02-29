import Header from '@/components/Header/Header'
import { FC } from 'react'
import styles from './doctors.module.scss'

const Doctors:FC = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.title}>Наши специалисты</h1>
      <div className={styles.cards}>
        <div className={styles.card}></div>
      </div>
    </div>
  )
}

export default Doctors
