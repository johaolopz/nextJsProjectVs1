import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

export default function firstPost() {
    return (
        <div>
            <h1>First Post</h1>
            <Image
                src="/image/img_photocam.jpg"
                width={600}
                height={350}
                alt="Photo Camera"
            ></Image>
            <Link href="/blog">
                <a>Go Back Home</a>
            </Link>
        </div>
    )
}
