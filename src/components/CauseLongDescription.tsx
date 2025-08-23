import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'
import { Image } from '@tiptap/extension-image'

const CauseLongDescription = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    immediatelyRender: false,
    content,
    editable: false,
  })
  return <EditorContent editor={editor} />
}

export default CauseLongDescription
