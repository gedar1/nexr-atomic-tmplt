
import { Button } from '@/components/atoms'
import { ButtonBasicType } from '@/shared/models/buttonTypes'
import React, { FC } from 'react'

interface indexProps {
  name:string
}

export const ButtonBasic: FC<ButtonBasicType> = ({className,...props}) => {
  console.log(className)
  return (
    <Button {...props} className={className}>
    </Button>
  )
}
