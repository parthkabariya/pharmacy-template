import React from 'react';
import Link from "next/link";

export default function ApplicationLogo({ className }) {
    return (
        <Link href="/" passHref>
            <img src="/images/logo.png" alt="logo" className="h-16 cursor-pointer"/>
        </Link>
    );
}
