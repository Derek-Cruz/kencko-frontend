import { useEffect, useState } from 'react'

export function useFruitsStore() {
  const [fruits, setFruits] = useState([])

  const addFruit = (newFruit) => {
    setFruits(prev => [...fruits, newFruit]);
  }

  useEffect(() => console.log(fruits), [fruits]);

  return { fruits, addFruit }
}
