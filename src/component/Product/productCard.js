import React, { useEffect } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  /* display:flex; */
  /* box-shadow: 3px 3px 3px 3px  rgb(0 0 0 / 32%); */
  background: var(--N0,#FFFFFF);
  display: inline-flex;
  align-items: stretch;
  width: 20%;
  padding: 0px 8px 16px;
  box-sizing: border-box;
`
const Level1 = styled.div`
  position: relative;
  display: inline-flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
`
const Level2 = styled.div`
  position: relative;
  border-radius: 8px;
  min-width: 100%;
`

const Level3 = styled.div`
  position: relative;
  flex: 0.5 1 0%;
  z-index: 0;
  height: 100%;
  min-width: 50%;
  cursor: pointer;
`

const Level4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-shadow: rgb(0 0 0 / 12%) 0 1px 6px 0;
  border-radius: 9px;
  overflow: hidden;
  padding: 0;
  margin: 0;
`

const Level5 = styled.div`
  display: flex;
  position: static;
  overflow: visible;
  background-color: var(--N0,#FFFFFF);
  flex-flow: column nowrap;
  height: 100%;
`

const Image = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
`

const Desc = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  vertical-align: middle;
  height: auto;
  padding: 8px;
  overflow: hidden;
  background-color: var(--N0, #ffffff);
`

const Title = styled.div`
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export default function ProductCard({product}) {
  const { id, title, price, category, description, image } = product

  return (
    <Card>
      <Level1>
        <Level2>
          <Level3>
            <Level4>
              <Level5>
                <Image>
                  <img src={image} style={{height:180}} />
                </Image>
                <Desc>
                  <Title>{title}</Title>
                  <div>{price}</div>
                </Desc>
              </Level5>
            </Level4>
          </Level3>
        </Level2>
      </Level1>
    </Card>
  )
}
