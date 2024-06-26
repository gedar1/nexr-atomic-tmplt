
import { ButtonType } from '@/shared/models/buttonTypes'
import React, { FC } from 'react'
import styles from './index.module.css'

interface indexProps {
  name:string
}

export const Button: FC<ButtonType> = ({className, title, type, children }) => {
  return (
    <button className={styles[`${className}`]} title={title} type={type}>
    {/* <button className={styles.button} title={title} type={type}> */}
     {children}
    </button>
  )
}

