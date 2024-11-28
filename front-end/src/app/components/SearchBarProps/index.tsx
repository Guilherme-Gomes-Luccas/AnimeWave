import { useState, KeyboardEvent } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); //Altera o comportamento da submissão
            onSearch(query); //Vai passar o valor para o callback
        }
    };

    return (
        <div className=" flex items-center w-full max-w-md mx-auto">
            <input
                type="text"
                value="query"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown} //Captura a tecla enter
                placeholder="Digite o nome de um anime, mangá ou publicação..."
                className="w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-l-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
            <button
                type="button"
                onClick={() => onSearch(query)}
                className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
                Busca
            </button>
        </div>
    )
}

export default SearchBar;