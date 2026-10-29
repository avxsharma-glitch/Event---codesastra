import Link from 'next/link'
import React from "react";

const links = [
    {
        title: 'Events',
        href: '#events',
    },
    {
        title: 'Schedule',
        href: '#schedule',
    },
    {
        title: 'Rules',
        href: '#rules',
    },
    {
        title: 'Contact Organizers',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <span className='font-mono font-bold text-lg text-foreground'>Code Sastra</span>
                </Link>

                <p className="mt-4 text-center text-sm text-muted-foreground">A student tech event built around coding, debugging, problem-solving, and team competition.</p>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <span className="text-muted-foreground block text-center text-sm font-mono">Code Sastra — Think. Code. Debug. Compete.</span>
            </div>
        </footer>
    )
}

