
export default function Sidebar() {
    return (
        <div className="w-64 bg-white shadow-sm flex flex-col">
            <div className="p-4 text-xl font-bold text-yellow-600">Anime Wave</div>
            <nav className="flex-1">
                <ul className="space-y-2 p-4">
                    <li className="font-semibold text-gray-700 hover:text-yellow-500">Home</li>
                    <li className="font-semibold text-gray-700 hover:text-yellow-500">Pesquisar</li>
                    <li className="font-semibold text-gray-700 hover:text-yellow-500">Notificações</li>
                    <li className="font-semibold text-gray-700 hover:text-yellow-500">Mensagens</li>
                    <li className="font-semibold text-gray-700 hover:text-yellow-500">Perfil</li>
                </ul>
            </nav>
            <button className="bg-green-500 text-white py-2 px-4 m-4 rounded-sm hover:bg-green-600">
                Criar Publicação
            </button>

        </div>
    )
}