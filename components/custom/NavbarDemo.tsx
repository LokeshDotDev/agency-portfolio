"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
	const navItems = [
		{
			name: "Hire Team",
			link: "#features",
		},
		{
			name: "Our-Case studies",
			link: "#pricing",
		},
		{
			name: "Our-Services",
			link: "#services",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className='relative w-full'>
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className='flex items-center gap-4'>
						<NavbarButton variant='secondary'>Contact-us</NavbarButton>
						<NavbarButton variant='primary'>Request a Quote</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}>
						{navItems.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className='relative text-neutral-600 dark:text-neutral-300'>
								<span className='block'>{item.name}</span>
							</a>
						))}
						<div className='flex w-full flex-col gap-4'>
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant='primary'
								className='w-full'>
								Contact-us
							</NavbarButton>
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant='primary'
								className='w-full'>
								Request a Quote
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>

			{/* Navbar */}
		</div>
	);
}
