import React, { useEffect, useState } from 'react'
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import ReactMarkdown from 'react-markdown'

const CauseLongDescription = ({ content }: { content: string }) => {
  return (
    <div className='prose'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default CauseLongDescription
