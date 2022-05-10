import { useState } from 'react'

export function useFruitsStore() {
  const [fruits, setFruits] = useState([])


  const addFruit = (newFruit) => {
    setFruits(prev => [...fruits, newFruit]);
  }

  return { fruits, addFruit }
}
