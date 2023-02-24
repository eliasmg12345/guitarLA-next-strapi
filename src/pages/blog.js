import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "@/styles/grid.module.css"

export default function Blog({posts}) {

    

    return (
        <Layout
            title="Blog"
            description="Blog de musica venta de guitarras"
        >
            <main className="contenedor">
                <h1 className="heading">Blog</h1>
                <div className={styles.grid}>
                    {posts?.map(post=>(
                        <Post 
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>
            </main>
            
        </Layout>
    )
}

export async function getStaticProps(context) {

    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const { data: posts } = await respuesta.json();

    //const respuesta = await fetch('http://localhost:1337/api/guitarras?populate=imagen')
    //.then(resp => resp.json())
    //.catch(err => console.log('el xxxx-->'+err))

    return {
        props: {
            posts
        }

    }
}