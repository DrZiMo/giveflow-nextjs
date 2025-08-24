import React from 'react'

const ProfileTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-md text-muted-foreground'>{subtitle}</p>
    </div>
  )
}

export default ProfileTitle
