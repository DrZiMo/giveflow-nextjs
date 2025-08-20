import ContactOptions from '@/components/ContactOptions'
import Title from '@/components/Title'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Title
        title='Get in Touch'
        subTitle="Have questions about our platform? Want to partner with us? Or just want to say hello? We'd love to hear from you. Let's start a conversation."
      />

      <ContactOptions />
    </div>
  )
}

export default Contact
