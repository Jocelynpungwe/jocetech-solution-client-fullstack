import { useEffect } from 'react'
import GridView from './GridView'
import ListView from './ListView'

import { useSelector } from 'react-redux'
import Loading from './Loading'
import Error from './Error'
const ProductList = () => {
  const {
    grid_view,
    filtered_products: products,
    isLoading: loading,
    isError: error,
  } = useSelector((store) => store.filter)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products} />
}

export default ProductList
