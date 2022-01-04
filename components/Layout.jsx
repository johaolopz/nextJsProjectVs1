import Head from "next/head"
import styles from "../styles/Layout.module.css"
import Link from "next/link"
import Image from "next/image"
import utilStyles from "../styles/utils.module.css"

const name = "JohaoLopz"

export default function Layout({children, title, description, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/image/img_photocam.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/image/img_photocam.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
            
        <nav>
            <Link href="/">
                <a>Home | </a>
            </Link>
            <Link href="/blog">
                <a>Blog | </a>
            </Link>
            <Link href="/about">
                <a>About | </a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>

            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
        </div>
    )
}

//Esto carga las props por defecto
Layout.defaultProps = {
    title: "My First Post | JohaoLopez",
    description: "This is my first post of blog with NextJS"
}