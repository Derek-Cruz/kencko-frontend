import FruitList from "../components/FruitList";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';

function Homepage(props) {
  return (
    <div>
      <Header />
      <div id="modal-root"></div>
      <Body />
      <FruitList fruits={props.fruits} />
      <Footer />
    </div>

  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.fruityvice.com/api/fruit/all?min=0&max=8`)
  const data = await res.json()

  return {
    props: {
      fruits: data
     }
  };
}

export default Homepage;
