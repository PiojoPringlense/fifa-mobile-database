import type { FC } from "react";
import Image from "next/image";
import logoImage from "@/public/logo.png";

interface HeaderProps {}

const Header = ({}) => {
	return (
		<header className=" flex justify-between items-center py-5">
			<Image src={logoImage} alt="Fifa Mobile Logo" width="90"></Image>
			<h1 className="text-primary-100 text-5xl font-bold text-center">
				Fifa Mobile <br /> Player Database
			</h1>
			<div className="flex gap-2">
				<button className="material-symbols-outlined text-secondary-white">search</button>
				<input type="search" name="searchInput" id="searchInput" placeholder="Search player" />
			</div>
		</header>
	);
};
export default Header;
