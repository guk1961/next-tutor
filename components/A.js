import Link from "next/link"
import styles from '../styles/A.module.css'
import React from "react";

// const whiteLink = styled.a`
//     color: white
// `

export default function A({text, href}) {
    return (
        <Link href={href}>
            <span className={styles.link}>{text}</span>
        </Link>
    )
}

