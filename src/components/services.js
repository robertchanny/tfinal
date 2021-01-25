import React from "react"
import "react-h5-audio-player/lib/styles.css"
import styled from "styled-components"
import Products from "../components/products/products"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledAllProducts = styled.div`
  // PUT PRODUCTS CSS HERE
`

const AllProducts = () => {
  return (
    <StyledSection>
      <Products />
    </StyledSection>
  )
}

export default AllProducts
