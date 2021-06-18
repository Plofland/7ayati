import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hayatiLogo from '../public/Fayati logo no bg 200px.png';

export default function Navbar() {
	return (
		<nav className="flex justify-center bg-gray-500">
			<Link href="/menu" className="">
				<a>Menu</a>
			</Link>
			<Link href="/about" className="">
				<a>About</a>
			</Link>
            <Link href="/" className="">
			    <a>
				    <Image src={hayatiLogo} alt="7ayati company logo" />
                </a>
            </Link>
			<Link href="/hours" className="">
				<a>Hours</a>
			</Link>
			<Link href="/contact" className="">
				<a>Contact</a>
			</Link>
		</nav>
	);
}
