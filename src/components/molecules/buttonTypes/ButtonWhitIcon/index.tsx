import { Button } from '@/components/atoms'
import { ButtonWhitIconType } from '@/shared/models/buttonTypes'
import React, { FC } from 'react'


export const ButtonWhitIcon: FC<ButtonWhitIconType> = ({...props}) => {
  return (
    <>
      <Button {...props}/>
    </>
  )
}
