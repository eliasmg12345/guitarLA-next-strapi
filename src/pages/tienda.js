import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "@/styles/grid.module.css"

export default function Tienda({ guitarras }) {

    return (
        <Layout
            title="Tienda Virtual"
            description="Tienda virtual, venta de guitarras instrumentos"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Coleccion</h1>

                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}


export async function getStaticProps(context) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json();

    //const respuesta = await fetch('http://localhost:1337/api/guitarras?populate=imagen')
    //.then(resp => resp.json())
    //.catch(err => console.log('el xxxx-->'+err))

    return {
        props: {
            guitarras
        }

    }
}



//si usas esta forma y ya esta funcioanndo tu sitio web
//en el servidor y entonces una guitarra la eliminan o cambian el precio
//no tienes que hacer otro build . el cliente visite la pagina va a
//mostrar la informacion actualizada

/*
export async function getServerSideProps(context) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json();

    return {
        props: {
            guitarras
        }
    }

}
 */