import Head from "next/head"

export default function Layout({children, title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <nav>navbar</nav>
            <main>{children}</main>
            <footer>footer</footer>
        </div>
    )
}

Layout.defaultProps = {
    title: "My First Post | JohaoLopez",
    description: "This is my first post of blog with NextJS"
}