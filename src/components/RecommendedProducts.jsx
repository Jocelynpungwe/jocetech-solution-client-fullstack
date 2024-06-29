import { useEffect } from 'react'
import GridView from './GridView'
import Loading from './Loading'
import Error from './Error'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../features/product/productSlice'

const RecommendedProducts = () => {
  const dispatch = useDispatch()
  const {
    recommanded_products,
    single_product,
    products_loading: loading,
    products_error: error,
  } = useSelector((store) => store.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [single_product])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return <GridView products={recommanded_products} />
}

export default RecommendedProducts
