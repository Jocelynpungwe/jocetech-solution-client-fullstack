import { useEffect } from 'react'
import SpecialProductOne from './SpecialProductOne'
import SpecialProductTwo from './SpecialProductTwo'
import SpecialProductThree from './SpecialProductThree'
import { useSelector } from 'react-redux'
const SpecialProductSection = () => {
  const { products } = useSelector((store) => store.products)
  return (
    <>
      <SpecialProductOne products={products} />
      <SpecialProductTwo products={products} />
      <SpecialProductThree products={products} />
    </>
  )
}

export default SpecialProductSection
