import { Kanit } from "next/font/google";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

interface Button {
    color: string,
    text: string
}

export default function Button({color, text}: Button) {
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
            
        >{text}</button>
    )
}