import { Kanit } from "next/font/google";
import Image from "next/image";

const kanit = Kanit({
	weight: '400',
	subsets: ['latin']
});

interface ButtonProps {
    color: string,
    text: string,
    type?: "submit" | "reset" | "button",
    border?: string,
    textColor?: string,
    icon?: string,
    width?: string,
    onClick?: () => void
}

export default function Button({color, text, type, border, textColor, icon, width, onClick}: ButtonProps) {
    return(
        <button
            className={kanit.className}

            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                background: color,
                borderRadius: "23px",
                color: textColor ||"white",
                width: width||"270px",
                height: "50px",
                fontWeight: "500",
                fontSize: "22px",
                border: border || "none",
                padding: "8px"
            }}

            type={type || "submit"}

            onClick={onClick}
            
        >{icon && <Image 
            src={icon} 
            width={30}
            height={30}
            alt="icon-google"/>}
        {text}</button>
    )
}