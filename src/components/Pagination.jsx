import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../features/product/productSlice'

const Pagination = () => {
  const { numOfPages, page } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    dispatch(changePage(newPage))
  }
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    dispatch(changePage(newPage))
  }

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--primary-gray);
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 40px;
    height: 30px;
    font-weight: 700;
    font-size: 1rem;
    color: var(--actual-black);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .active {
    background: var(--secondy-chocolate);
    color: var(--actual-white);
  }
  .prev-btn,
  .next-btn {
    width: 80px;
    height: 30px;
    background: var(--primary-chocolate);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--actual-white);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--secondy-chocolate);
  }
`

export default Pagination
