import React from 'react'
import Layout from '../../components/Layout'
// import { useEffect, useState } from 'react'

export default function index({data}) {
    //###FETCH DEL LADO DEL CLIENTE
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts').
    //     then(async (res)=>setData(await res.json()))
    // },[])
    return (
        <Layout>
            <h1>Lista de Posts</h1>
            {
                data.map(({id, title, body}) => (
                    <div key={id}>
                        <h3>{id} - {title}</h3>
                        <p>{body}</p>
                    </div>
                ))
            }
        </Layout>
    )
}

//getStaticProps se ejecuta en el servidor y no es visible para el cliente
//Es como trabajar en el backend, desde el front (se puede hacer request a API), pero si una
//vez renderizado, hay una actualización en la data, no se refleja automáticamente (static)
export async function getStaticProps (){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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