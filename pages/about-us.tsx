import Head from 'next/head'
import styles from '@/styles/Pages.module.scss'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Page() {
  return (
    <>
      <Head>
        <title>Similar Movies</title>
        <meta name="description" content="Just a test in next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link className={styles.backArrow} href={'/'}><ArrowBackIcon /> Voltar</Link>
        <div className={styles.aboutUsContainer}>
          <p>Esse site foi construido apenas como um teste de API de filmes.
          </p>
          <p>Acessando a área de <Link href={'/similar-films'}>filmes similares</Link>, poderá buscar por um filme que goste e verificar filmes similares a ele que pode assistir.
          </p>
          <p>Se quiser acessar a página de <Link href={'/recommendations'}>recomendações</Link>, irá ter uma lista de filmes recomendados(Famosos) que vem direto da API.
          </p>
          <p><strong>OBS</strong>: Sintam-se a vontade para testar e se tiver algum erro me avisem pelo insta (guilherme.aires7) ou pelo discord (Guizin#1968).
          </p>
          <p><strong>OBS 2</strong>: Sim, eu trabalho como front end e não sei muito sobre tipografia das cores, acontece :/
          </p>
          <p>Espero que curtam :) 
          </p>
        </div>
      </main>
    </>
  )
}
