"use client"

import React, { useState } from 'react';
import Image from 'next/image';

type SearchBarProps = {
    items: string[];
};

const SearchBar: React.FC<SearchBarProps> = ({ items }) => {
    const [query, setQuery] = useState('');

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="text-black flex flex-col h-fit w-[917px]">
            <div className='flex w-[917px] h-[42px] items-center'>
                <input
                    type="text"
                    placeholder="Digite o nome de um anime, mangá ou publicação..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-[917px] h-[40px] flex-shrink-0 rounded-[25px] bg-white shadow-2xl p-3 text-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Image 
                    src= '/img/search.svg'
                    width={30}
                    height={30}
                    alt='search'
                    className='absolute ml-[870px] cursor-pointer'
                />
            </div>

            {query && (
                <ul className="left-0 right-0 bg-white rounded-lg max-h-64 overflow-y-auto w-full flex flex-col items-center">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 w-full hover:bg-red-100 cursor-pointer transition duration-200"
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