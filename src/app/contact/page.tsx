import ContactOptions from '@/components/ContactOptions'
import SendUsMessage from '@/components/SendUsMessage'
import Title from '@/components/Title'
import WhyContactUs from '@/components/WhyContactUs'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Title
        title='Get in Touch'
        subTitle="Have questions about our platform? Want to partner with us? Or just want to say hello? We'd love to hear from you. Let's start a conversation."
      />

      <ContactOptions />

      <div className='mt-32 grid grid-cols-2 gap-10'>
        <SendUsMessage />
        <div className=''>
          <WhyContactUs />
          {/* <QuickResponse /> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
