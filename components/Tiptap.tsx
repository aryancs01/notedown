'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './Menubar'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
    editorProps:{
      attributes:{
        class:"bg-slate-50 border rounded-sm"
      }
    }
  })

  return (
    <div>
      <Menubar editor={editor}/>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap