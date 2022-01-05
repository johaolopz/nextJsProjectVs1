import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/Layout"

export default function firstPost({data}) {
    return (
        <Layout>
            <h1>-Post #{data.id} </h1>
            <Image
                src="/image/img_photocam.jpg"
                width={600}
                height={350}
                alt="Photo Camera"
            ></Image>
            <h1>Title: {data.title}</h1>
            <p>{data.body}</p>
        </Layout>
    )
}


//Para rutas dinámicas
export async function getStaticPaths(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({id})=>({params:{id: `${id}`}}))
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}

//Para extraer la data ejecutando del lado del servidor
export async function getStaticProps ({params}){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
        const data = await res.json()
        return {
            props : {
                data
            }
        }
    }
    catch (error){

    }
}