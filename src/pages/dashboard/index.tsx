import styles from "./styles.module.css";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { getSession } from "next-auth/react";

export default function Dashboard(){
    return(
        <div className={styles.container}>
            <Head> 
                <title>Meu painel de tarefas</title>
            </Head>
            <h1>Meu painel</h1>
           

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) =>{
    const session = await getSession({ req });
    //console.log(session);

    if(!session?.user) {
        // Se nao tem usuario vamos redirecionar para /

        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return{
        props:{},
    };

};