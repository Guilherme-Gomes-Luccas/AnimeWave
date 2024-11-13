import { Kanit } from "next/font/google";
import './style.css'

const kanit = Kanit({
    weight: '400',
    subsets: ['latin']
});

interface Input {
    label: string,
    placeholder: string | undefined
}

export default function Input({label, placeholder}:Input) {
    return(
        <div className="flex flex-col p-5">
            <label className={kanit.className}>{label}:</label>

            <input type="text" placeholder={placeholder}/>
        </div>
    )
}