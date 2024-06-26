import React, { FC } from 'react'
import { InputForm } from '../InputForm';
import { InputSearch } from '../InputSearch';
import { ComponentInputProps } from '@/shared';
import styles from './index.module.css'

const componentMap = {
  inputForm: InputForm ?? {},
  inputSearch: InputSearch ?? {},
};

type ComponentType = keyof typeof componentMap;

interface IInputType {
  inputType: ComponentType;
  componentProps: ComponentInputProps['props']
  className:string
}

export const InputWrapper: FC<IInputType> = ({inputType,componentProps,className}) => {
  const ComponentToRender = componentMap[inputType];
  return (<ComponentToRender {...componentProps}className={styles[`${className}`]}/>);
}