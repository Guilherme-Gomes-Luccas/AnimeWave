import { Kanit } from "next/font/google";
import './style.css'

const kanit = Kanit({
    weight: '400',
    subsets: ['latin']
});

interface Input {
    label: string,
    placeholder: string | undefined,
    type: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | null
}

export default function Input({label, placeholder, type, onChange}:Input) {
    return(
        <div className="flex flex-col p-4 w-full">
            <label className={kanit.className}>{label}:</label>

            <input type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}