import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled/';
import { PALLETS, API_ENDPOINT } from '../../../constants';
import axios from 'axios';
import { useHistory, Link, useParams, Route } from 'react-router-dom';

function ProductInfo({ userData, id }) {
  const [productInfo, setProductInfo] = useState([]);
  const productId = '';
  const userToken = localStorage.getItem('Token');
  const userAccountname = localStorage.getItem('accountname');

  useEffect(() => {
    fetch(`${API_ENDPOINT}/product/${userAccountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductInfo(data.product);
      });
  }, []);

  
  return (
    <>
      <ProductSection >
      <WrapProduct>
        <h2>판매 중인 상품</h2>
        <div className='productListWrap'>
          {productInfo.map((data)=>(
          <Link to={`/product/${data.id}`}>
            <ProductList key={data.id}>
              {/* 데이터 list 반복문으로 랜더링하면 됩니다. */}
              <li>
                <img
                  src={data.itemImage}
                  alt="판매 중인 상품에 대한 이미지입니다."
                />
                <p className="product-name">{data.itemName}</p>
                <p className="product-price">{data.price}</p>
              </li>
            </ProductList>
          </Link>
          ))}
        </div>
      </WrapProduct>
    </ProductSection>
    </>
  );
}


const ProductSection = styled.section`
  width: 100%;
  margin: 10px 0;
  padding: 20px 0;
  background-color: ${PALLETS.WHITE};
  border-top: 1px solid ${PALLETS.LIGHTGRAY};
  border-bottom: 1px solid ${PALLETS.LIGHTGRAY};
  display: flex;
  justify-content: center;
  align-items: center;
  .delete_modal{
    overflow: hidden;
  }
`;

const WrapProduct = styled.div`
  width: 390px;
  margin: 0 auto;
  .productListWrap {
    display: flex;
  }
  h2 {
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const ProductList = styled.ul`
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  li + li {
    margin-left: 10px;
  }

  li {
    display: inline-block;

    img {
      width: 140px;
      height: 100px;
      border-radius: 5px;
    }

    p {
      margin-left: 2px;
    }

    .product-name {
      font-size: 14px;
      margin: 2px 0 5px;
    }

    .product-price {
      font-size: 12px;
      color: ${PALLETS.BEIGE};
    }
  }
`;



export default ProductInfo;
