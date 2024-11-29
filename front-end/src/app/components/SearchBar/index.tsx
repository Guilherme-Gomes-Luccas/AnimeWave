"use client"

import React, { useState } from 'react';

type SearchBarProps = {
    items: string[];
};

const SearchBar: React.FC<SearchBarProps> = ({ items }) => {
    const [query, setQuery] = useState('');

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="relative p-6 max-w-lg mx-auto">
            <input
                type="text"
                placeholder="Digite o nome de um anime, mangá ou publicação..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {query && (
                <ul className="absolute left-0 right-0 mt-2 bg-white shadow-md rounded-lg max-h-60 overflow-y-auto z-50">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200"
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-center text-gray-500">
                            Nenhum resultado foi encontrado
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;