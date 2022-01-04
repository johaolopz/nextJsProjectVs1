import Layout from "../components/Layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout
      title="Home | NextJS Project"
      description="This is the home page"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>I am a Full Stack Web Developer</p>
        <p>
          This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  )
}
