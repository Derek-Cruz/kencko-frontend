import FruitList from "../components/FruitList";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Head from 'next/head'


function Homepage(props) {
  return (
    <div>
      <Head>
        <title>Kencko salad maker</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div id="modal-root"></div>
      <Body />
      <FruitList fruits={props.fruits} />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.fruityvice.com/api/fruit/all`)
  const data = await res.json()

  return {
    props: {
      fruits: data
     }
  };
}

export default Homepage;
