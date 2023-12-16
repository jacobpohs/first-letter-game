'use client';
import React from 'react'
import styles from '@/app/components/Search/search.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({placeholder}) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((e)=> {
        const params = new URLSearchParams(searchParams)
        
        if (e.target.value) {
            params.set("q", e.target.value)
        } else {
          params.delete("q")
        }
        replace(`${pathname}?${params}`)
      }, 300);  
  return (
    <div className={styles.container}>
        <input type="text" 
               placeholder={placeholder} 
               maxLength="1" 
               className={styles.letterinput}
               onChange={handleSearch}>
        </input>
    </div>
  )
}

export default Search