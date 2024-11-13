import { Kanit } from "next/font/google";
import './style.css'

const kanit = Kanit({
    weight: '400',
    subsets: ['latin']
});

interface Input {
    label: string,
    placeholder: string | undefined,
    type: string
}

export default function Input({label, placeholder, type}:Input) {
    return(
        <div className="flex flex-col p-5">
            <label className={kanit.className}>{label}:</label>

            <input type={type} placeholder={placeholder}/>
        </div>
    )
}