import { useEffect } from 'react'
import FeaturedProduct from './FeaturedProduct'
import SpecialProductSection from './SpecialProductSection'
import Error from './Error'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/product/productSlice'

const AdvertismentSection = () => {
  const { products_loading: loading, products_error: error } = useSelector(
    (store) => store.products
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <>
      <FeaturedProduct />
      <SpecialProductSection />
    </>
  )
}

export default AdvertismentSection
