import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { getName } from 'country-list';

const TripBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.images});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  text-align: center;
  font-size: 1.6rem;
  color: white;
  width: 93%;
  margin: 10px;
  padding: 15px 0;
  border-radius: 5px;
  :hover {
    transition: all 0.2s linear;
    box-shadow: 0px 5px 10px 5px rgba(130, 141, 171, 0.7);
  }
`;

const Btn = styled.button`
  font-family: ManfuMedium;
  font-size: 1rem;
  color: rgb(210, 206, 221);
  background-color: transparent;
  border: none;
  outline: 0;
  :hover {
    transition: all 0.2s linear;
    transform: scale(1.1);
    border-bottom: 2px solid pink;
    color: rgb(71, 56, 136);
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Dates = styled.div`
  font-size: 1.3rem;
`;

const Currency = styled.div`
  font-size: 1.3rem;
`;

function TripEditor({
  props,
  id,
  total_price,
  title,
  country,
  base_currency,
  exchange_rate,
  target_currency,
  start_date,
  end_date,
  handleRequest,
  deleteRequest,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const random = Math.floor(Math.random() * props.images.length) + 1;
  return (
    <TripBox>
      <Background
        images={props.images[random]}
        type="button"
        onClick={
          isEdit
            ? () => {}
            : () =>
                handleRequest(
                  id,
                  total_price,
                  title,
                  exchange_rate,
                  target_currency,
                  start_date,
                  end_date,
                )
        }
      >
        <Title>{title}</Title>
        <div>{target_currency}</div>
        {isEdit ? (
          <div>
            <input></input>
          </div>
        ) : (
          <div>{total_price.toLocaleString('ko-KR')}</div>
        )}
        <Currency>{`${exchange_rate}${base_currency} → 1${target_currency}`}</Currency>
        <div>{getName(country)}</div>
        <Dates>
          {moment(start_date).format('YYYY-MM-DD')}~
          {moment(end_date).format('YYYY-MM-DD')}
        </Dates>

        {/* <StartBtn
            type="button"
            onClick={() =>
              handleRequest(
                id,
                total_price,
                title,
                exchange_rate,
                target_currency,
              )
            }
          >
            확인하기
          </StartBtn> */}
      </Background>
      <div style={{ paddingTop: '190px' }}>
        <Btn type="button" onClick={() => deleteRequest(id)}>
          삭제
        </Btn>
        <Btn
          type="button"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          수정
        </Btn>
      </div>
    </TripBox>
  );
}

export default TripEditor;
