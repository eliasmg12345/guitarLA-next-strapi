import Layout from "@/components/layout";
import Image from "next/image";
import styles  from '../styles/nosotros.module.css'

export default function nosotros() {
    return (
        <Layout
            title="Nosotros"
            description="Sobre Nosotros, guitarLA"
        >
            
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width='1000' height='800' alt="imegen sobre nosotros" />

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus, voluptatibus praesentium quae nobis, quis ex id optio ut ea sint nam obcaecati iusto quia consequuntur quas a, facere explicabo?</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque aspernatur, temporibus corporis perspiciatis vitae maxime molestias consectetur quos delectus velit libero neque nihil explicabo vero laudantium. Obcaecati, error eius?</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
