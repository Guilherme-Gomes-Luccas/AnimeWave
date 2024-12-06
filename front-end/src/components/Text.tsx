import { Kanit } from "next/font/google";

const kanit = Kanit({
    weight: '400',
    subsets: ['latin']
});


interface Text {
    content: string;
    color: string;
    size: string;
    marginLeft?: string;
    marginBottom?: string;
}

export default function Text({ content, color, size, marginLeft, marginBottom }: Text) {
    return (
        <p className={kanit.className} style={{
            color: color,
            fontSize: size,
            marginLeft: marginLeft || "20px",
            marginBottom: marginBottom || "15px"
        }}>
            {content}
        </p>
    )
}