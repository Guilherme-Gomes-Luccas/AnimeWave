
import Image from "next/image"


    interface PostCardProps {
        avatar: string;
        handle: string;
        username: string;
        content: string;
    }
    

const CreatePost:React.FC<PostCardProps> = ({ avatar, handle, username, content }) => {
    return (


        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">

<div className="flex items-center space-x-2">
          <h3 className="font-semibold">{username}</h3>
          <span className="text-gray-500 text-sm">@{handle}</span>
        </div>

        <div className="w-12 h-12 flex-shrink-0">
                <Image
                    src={avatar}
                    alt={`${username}'s avatar`}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                </div>

            <div className="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                />


                <div>
                    <p className="font-bold text-gray-800">Username</p>
                    <p className="text-sm text-gray-500">@xxx</p>
                </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
                This anime smells like a bus driver after a long day...
            </h2>
            
            <Image
                src={""}
                width={400}
                height={200}
                alt="Foto do Post"
            />
            

            


            <p className="text-gray-600 leading-relaxed">
                Mussum Ipsum, cacilds vidis litro abertis.  Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Viva Forevis aptent taciti sociosqu ad litora torquent. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
                Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! A ordem dos tratores não altera o pão duris. Aenean aliquam molestie leo, vitae iaculis nisl.
                Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Aenean aliquam molestie leo, vitae iaculis nisl. Atirei o pau no gatis, per gatis num morreus.
            </p>
        </div>
    )
}

export default CreatePost;