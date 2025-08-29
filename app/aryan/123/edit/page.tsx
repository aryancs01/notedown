import Tiptap from "@/components/Tiptap";
import Header from "./_components/Header";

export default function EditPage(){
    return (
        <div>
            <Header/>

            <div className="mt-16">
                <Tiptap/>
            </div>
        </div>
    )
}