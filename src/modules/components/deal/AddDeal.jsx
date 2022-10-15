import React, { useState } from 'react';
import BX24API from 'bx24-api';
import { Button } from "@material-ui/core";
import "./AddDeal.css"
import "./prepaid.css"
import { DealNameContainer } from './dealName-Container';
import { DealFieldContainer } from './included/deal-field-Container';

export const AddDeal = (props) => {

  console.log('dealField', props.dealField)
  let typeOfClient = props.typeOfClient
  let typeOfContract = props.typeOfContract
  // let prepaid = props.prepaid

  let idTypeOfClient = props.typeOfClient.id
  let typeOfContractId = props.typeOfContract.id
  // let idPrepaid = props.prepaid.id

  let price = props.priceOfComplect
  let goodsId = props.goods
  let ltId = props.ltGoods
  let priceOfLt = props.priceOfLt
  let dealField = `${<DealFieldContainer />}`
  let dealName = props.name
  let description = props.description
  // console.log(allBlocks)

  // console.log(dealField)

  // console.log(`addDealJSX ${goodsId}`)


  console.log('🚀 ~ file: AddTask.jsx ~ line 6 ~ AddTask ~ taskData', props.name);

  const onChange = (event) => {

    props.changeDealName(event.target.value)
  };

  const onSubmit = async (event) => {

    event.preventDefault();
    props.changeDealStatus(true)
    
    console.log('Начал думать');
    await props.sendDeal(dealName, ltId, goodsId, price, priceOfLt, props.unit, typeOfContractId, dealField, description)
    // props.reset()

    // document.location.replace(`https://april-garant.bitrix24.ru/crm/deal/details/${idOfCurrentDeal}/`);


  }
  const onCancel = () => {
    document.location.replace(`https://april-garant.bitrix24.ru/marketplace/app/98/`);
  }

  return (



    <div className='dealButtons__container'>
      <Button  className='addDeal__btn' onClick={onSubmit} variant="outlined">Создать Сделку</Button>
      <Button  className='cancelDeal__btn' onClick={onCancel} variant="outlined">Отменить</Button>

    </div>




  );
};
