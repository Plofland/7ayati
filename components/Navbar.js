import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	return (
		<nav className="">
			<Link href="/menu" className="">
				<a>Menu</a>
			</Link>
			<Link href="/about" className="">
				<a>About</a>
			</Link>
			{/* <Link href="/" className="">
				<Image src={7ayatiLogo} alt="7ayati company logo"></Image>
			</Link> */}
			<Link href="/hours" className="">
				<a>Hours</a>
			</Link>
			<Link href="/contact" className="">
				<a>Contact</a>
			</Link>
		</nav>
	);
}
