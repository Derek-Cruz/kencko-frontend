import { useEffect, useState } from 'react';
import FruitList from "../components/FruitList";

function Homepage(props) {
  return (
    <FruitList fruits={props.fruits} />
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
