import { useEffect } from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import {
  filterProducs,
  getfilterProduct,
  sortProduct,
} from '../features/filters/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/product/productSlice'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const { filters, sort } = useSelector((store) => store.filter)

  useEffect(() => {
    dispatch(getfilterProduct())
  }, [])

  useEffect(() => {
    dispatch(filterProducs())
    dispatch(sortProduct())
  }, [filters, sort])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
