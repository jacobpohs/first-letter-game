
'use client';
import Image from 'next/image'
import styles from './page.module.css'
import CountryList from '@/components/CountryList/CountryList';
import { useState } from 'react';

const handleLetterSubmit = () => {
  // const [value, setValue] = useState('');
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Pick a letter</h1>
      <form>
        <input type="text"></input>
      </form>
      <button></button>
      <CountryList firstLetter='C'/>
    </main>
  )
}
