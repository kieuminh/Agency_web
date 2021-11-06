import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import { data } from '../data'
import Testimonials from '../components/Testimonials'

export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>KtM dev</title>
        <meta name="description" content="Nextjs practice" />
      </Head>
      <Intro />
      <Services services={services}/>
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data
  return {
    props: { services },
  };
};