"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Set menu links here
const NAV_LINKS = [
	{
		name: "Sponsors",
		href: "/sponsors",
		newTab: false,
	},
	{
		name: "Code Jams!",
		href: "https://sfhacks-code-jams-2024.devpost.com/project-gallery",
		newTab: true,
	},
	{
		name: "Team",
		href: "/about-us",
		newTab: false,
	},
	{
		name: "FAQs",
		href: "/faqs",
		newTab: false,
	},
];

// Set registration link here
const REGISTER_LINK = {
	name: "Register",
	href: "https://tally.so/r/3lRZjk",
};

interface NavLinkProps {
	href: string;
	className?: string;
	onClick?: () => void;
	newTab: boolean;
	children: React.ReactNode;
}

function NavLink({
	href,
	children,
	className = "",
	onClick,
	newTab,
}: NavLinkProps) {
	if (newTab) {
		return (
			<a
				href={href}
				className={`transition-colors duration-200 hover:text-purple-200 ${className}`}
				onClick={onClick}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	}

	return (
		<Link
			href={href}
			className={`transition-colors duration-200 hover:text-purple-200 ${className}`}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}

function NavLinks() {
	return (
		<div className="flex text-[#13123e] items-center justify-center w-full gap-8 px-6 py-4 text-lg font-medium bg-[#fff6d9] bg-navy-900/80 rounded-xl shadow-lg md:gap-12 lg:text-xl">
			<Link
				href="/"
				className="hidden md:block"
			>
				<Image
					src="/logoNew-vertical.png"
					alt="SF Hacks logo"
					width={40}
					height={40}
					className="transition-transform duration-200 hover:scale-110"
				/>
			</Link>

			{/* Navigation Links */}
			<div className="flex items-center gap-8 md:gap-12">
				{NAV_LINKS.map((link) => (
					<NavLink
						key={link.name}
						href={link.href}
						newTab={link.newTab}
					>
						{link.name}
					</NavLink>
				))}
			</div>

			{/* Register Button */}
			<NavLink
				href={REGISTER_LINK.href}
				newTab={true}
				className="px-6 py-2 text-white transition-all duration-200 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
			>
				{REGISTER_LINK.name}
			</NavLink>
		</div>
	);
}

interface MobileMenuProps {
	isOpen: boolean;
	handleToggle: () => void;
}

function MobileMenu({ isOpen, handleToggle }: MobileMenuProps) {
	return (
		<div className="md:hidden">
			{/* Mobile Menu Button */}
			<button
				onClick={handleToggle}
				className="fixed top-4 right-4 z-50 p-2 text-[#13123e] transition-colors duration-200 rounded-lg backdrop-blur-sm"
			>
				{isOpen ? <X size={32} /> : <Menu size={32} />}
			</button>

			{/* Full Screen Mobile Menu */}
			<div
				className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex flex-col items-center justify-center h-full">
					{/* Mobile Navigation Links */}
					<div className="flex flex-col items-center gap-8 text-2xl text-[#13123e]">
						<Link
							href="/"
							className="transition-colors hover:text-purple-500"
							onClick={handleToggle}
						>
							Home
						</Link>

						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.name}
								href={link.href}
								className="transition-colors hover:text-purple-500"
								onClick={handleToggle}
								newTab={link.newTab}
							>
								{link.name}
							</NavLink>
						))}

						{/* Register Button */}
						<NavLink
							href={REGISTER_LINK.href}
							className="px-8 py-3 mt-4 text-white transition-all duration-200 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
							onClick={handleToggle}
							newTab={true}
						>
							{REGISTER_LINK.name}
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center p-4">
			<div className="hidden md:block">
				<NavLinks />
			</div>
			<MobileMenu
				isOpen={isOpen}
				handleToggle={handleToggle}
			/>
		</nav>
	);
}
