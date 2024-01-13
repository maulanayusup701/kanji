import React from "react";
import Image from "next/image";

export default function Page() {
	return (
		<main className="pt-8 lg:px-24 lg:pt-16 fixed w-full">
			<header className="w-full text-center lg:text-start">
				<span className="text-2xl lg:text-6xl font-bold">KANJI (漢字)</span>
			</header>
			<div className="flex pt-12 items-center justify-center lg:items-start lg:py-20 px-4">
				<div className="grid grid-rows lg:grid-cols-3 gap-4 text-center items-center w-full">
					<div className="w-full border border-gray-700 rounded-xl py-4 hover:bg-gray-700 lg:hover:text-white cursor-pointer transition duration-2s ease-in-out">
						<span className="text-xl lg:text-2xl font-bold">N5</span>
					</div>
					<div className="w-full border border-gray-700 rounded-xl py-4 hover:bg-gray-700 lg:hover:text-white cursor-pointer transition duration-2s ease-in-out">
						<span className="text-xl lg:text-2xl font-bold">N4</span>
					</div>
					<div className="w-full border border-gray-700 rounded-xl py-4 hover:bg-gray-700 lg:hover:text-white cursor-pointer transition duration-2s ease-in-out">
						<span className="text-xl lg:text-2xl font-bold">N3</span>
					</div>
				</div>
			<div className="flex w-full justify-end fixed bottom-2 left-0 px-4 py-1"><span className="text-sm lg:text-xl">Create by <a href="https://github.com/maulanayusup701" className="font-bold">Maulana Yusup</a></span></div>
			</div>
		</main>
	);
}
