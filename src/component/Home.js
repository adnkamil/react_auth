import React, { useState, useEffect } from 'react'
import ProductCard from './Product/productCard'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin 0 -8px; */
`

export default function Home() {
  const [ products, setProducts ] = useState()
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json() )
      .then(data => setProducts(data))
      .finally(_=> setLoading(false))
  },[])

  if(loading) return <div>Loading...</div>

  return (
    <>
      <h1>List Product</h1>
      <Card>
        {products && products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Card>
    </>
  )
}
