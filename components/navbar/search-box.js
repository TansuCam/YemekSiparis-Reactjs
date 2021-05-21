import React from 'react'
import Search from '../icon/Search'

import styles from './search-box.module.css'

function SearchBox({ href, children, ...props }) {
    return (
        <form className={styles.example}>
            <input type="text" placeholder="Search.." name="search2" />
            <button type="submit">
                <Search />
            </button>
        </form>
    )
}

export default SearchBox
