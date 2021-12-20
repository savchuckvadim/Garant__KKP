import React, { useState } from 'react';
import BX24API from 'bx24-api';
import { DealIncludedContainer } from './included/deal-included-Container';
import { DealPushContainer } from './push-deal-form/push-deal-form-Container';
import { DealPushButtonContainer } from './push-deal-form/push-deal-button-Container';
import { DealCancelhButtonContainer } from './push-deal-form/cancel-deal-button-Container';
import { TextField } from '@material-ui/core';
import { Button } from "@material-ui/core";
import "./AddDeal.css"
import "./prepaid.css"
import { DealNameContainer } from './dealName-Container';
export const AddDeal = (props) => {
   

  let typeOfClient = props.typeOfClient
  let typeOfContract = props.typeOfContract
  // let prepaid = props.prepaid

  let idTypeOfClient = props.typeOfClient.id
  let idTypeOfContract = props.typeOfContract.id
  // let idPrepaid = props.prepaid.id

  let price = props.priceOfComplect
  let goodsId = props.goods
  let ltId = props.ltGoods
  let priceOfLt = props.priceOfLt
  console.log(`addDealJSX ${goodsId}`)


  console.log('🚀 ~ file: AddTask.jsx ~ line 6 ~ AddTask ~ taskData', props.name);

  const onChange = (event) => {

    props.changeDealName(event.target.value)
  };

  const onSubmit = async (event) => {

    event.preventDefault();

    console.log('Начал думать');
   
    const result = await BX24API.callMethod('crm.deal.add', {
      fields: {
        "ID": 56767,
        "TITLE": `${props.name}`,
        // "STAGE_ID": "GOODS",
        "STAGE_ID": "NEW",
        // "COMPANY_ID": 3,
        // "CONTACT_ID": 3,
        "OPENED": "Y",
        "ASSIGNED_BY_ID": 1,
        "PROBABILITY": 30,
        "CURRENCY_ID": "RUB",
        "OPPORTUNITY": 5000,
       
        "CATEGORY_ID": 6,





        'UF_CRM_5B39D7C2EC0AB': true

      },
      params: {
        "REGISTER_SONET_EVENT": "Y"
      }
    })
    const idOfCurrentDeal = result.answer.result
    console.log('result = ', result);
    const changeDeal = await BX24API.callMethod('crm.deal.get', {
      id: idOfCurrentDeal
    })
    const unit = props.unit

    let products
    console.log(`price of lt ${priceOfLt}`)
    if(ltId){
      products = await BX24API.callMethod('crm.deal.productrows.set', {
        id: idOfCurrentDeal,
        rows:
          [
            { "PRODUCT_ID": goodsId, "PRICE": price, 'MEASURE_CODE': unit , "QUANTITY": 1  },
            { "PRODUCT_ID": ltId, "PRICE": priceOfLt, 'MEASURE_CODE': unit , "QUANTITY": 1  }
  
          ]
      })
    }else{
      products = await BX24API.callMethod('crm.deal.productrows.set', {
        id: idOfCurrentDeal,
        rows:
          [
            { "PRODUCT_ID": goodsId, "PRICE": price, 'MEASURE_CODE': unit , "QUANTITY": 1  },
  
          ]
      })
    }
    const fields = await BX24API.callMethod('crm.deal.fields')
    const productrow = await BX24API.callMethod('crm.productrow.fields')
    const updateDeal = await BX24API.callMethod(
      "crm.deal.update",
      {
        id: idOfCurrentDeal,
        fields:
        {

          // 'UF_CRM_1540190412': typeOfClient,
          // 'UF_CRM_1540190343': typeOfContract,
          'UF_CRM_1540190343': '1915',
          'UF_CRM_1540190412': '1925',
          "COMMENTS": `${props.dealField}`,


        },
        params: { "REGISTER_SONET_EVENT": "Y" }
      },

    )
   
    console.log('result = ', result.answer.result);
    console.log('changeDeal = ', changeDeal);
    console.log('products = ', products);
    console.log('fields = ', fields.answer.result);
    console.log('updateDeal = ', updateDeal.answer.result);

    console.log('UF_CRM_1540190343 = ', fields.answer.result.UF_CRM_1540190343);
    console.log('UF_CRM_1539338045 = ', fields.answer.result.UF_CRM_1539338045);
    console.log('UF_CRM_1540190412 = ', fields.answer.result.UF_CRM_1540190412);
    console.log('STAGE_ID = ', fields.answer.result.STAGE_ID);
    // console.log('units = ', units.answer.result);
    // console.log('productrow = ', productrow.answer.result);
    
    props.reset()
   

    document.location.replace(`https://april-garant.bitrix24.ru/crm/deal/details/${idOfCurrentDeal}/`);

    // console.log('updateDeal = ', updateDeal.answer.result);

  }

  return (

  

      <div className='dealButtons__container'>
        <Button style={props.styleOfPush} className='addDeal__btn' onClick={onSubmit} variant="outlined">Создать Сделку</Button>
        <Button style={props.styleOfCancel} className='addDeal__btn' variant="outlined">Отменить</Button>

      </div>




  );
};
