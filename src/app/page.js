import Image from 'next/image'
import styles from './page.module.css'
import CountryList from '@/components/CountryList/CountryList';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Pick a letter</h1>
      <input type="text"></input>
      <button></button>
      <CountryList />
    </main>
  )
}
