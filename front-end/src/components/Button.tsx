import { Kanit } from "next/font/google";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

interface ButtonProps {
    color: string,
    text: string,
    type?: "submit" | "reset" | "button"
}

export default function Button({color, text, type}: ButtonProps) {
    return(
        <button
            style={{
                background: color,
                borderRadius: "23px",
                color: "white",
                width: "250px",
                height: "50px",
                fontWeight: "500",
                fontSize: "24px"
            }}

            className={kanit.className}

            type={type || "submit"}
            
        >{text}</button>
    )
}