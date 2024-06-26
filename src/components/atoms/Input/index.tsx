import { InputType } from '@/shared/models/inputTypes'
import React, { FC } from 'react'
import styles from './index.module.css'


export const Input: FC<Partial<InputType>> = ({placeholder,className,type,...restProps}) => {
  
  return (
    <input placeholder={placeholder} className ={`${className}`} type= {type}>
     
    </input>
  )
}
