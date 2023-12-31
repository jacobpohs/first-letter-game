import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import CountryList from '@/app/components/CountryList/CountryList';
import Search from './components/Search/search';
import AnswerButton from './components/AnswerButton/AnswerButton';
import { fetchCountries } from './lib/data';

export default async function Home({searchParams}) {
  const q = searchParams?.q || "";
  const countries = await fetchCountries(q);

  return (
    <main className={styles.main}>
      <h1 className={styles.prompt}>Pick a letter</h1>
      <Search />
      <CountryList countries={countries} firstLetter={q} />
      {/* <AnswerButton countries={countries} /> */}
    </main>
  )
}
