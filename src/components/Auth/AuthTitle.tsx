import React from 'react'

const AuthTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className='text-center'>
      <h1 className='text-primary text-4xl font-bold'>{title}</h1>
      <p className='text-muted-foreground text-lg'>{subtitle}</p>
    </div>
  )
}

export default AuthTitle
