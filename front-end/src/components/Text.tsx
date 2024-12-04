import { Kanit } from "next/font/google";

const kanit = Kanit({
    weight: '400',
    subsets: ['latin']
});


interface Text {
    content: string;
    color: string;
    size: string
}

export default function Text({ content, color, size }: Text) {
    return (
        <p className={kanit.className} style={{
            color: color,
            fontSize: size,
            marginLeft: "20px",
            marginBottom: "15px"
        }}>
            {content}
        </p>
    )
}