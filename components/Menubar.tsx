import {Editor} from "@tiptap/react"

export default function Menubar({editor}:{editor:Editor | null}){
    if(!editor){
        return null
    }
    
    return (
        <div>
            Menu
        </div>
    )
}