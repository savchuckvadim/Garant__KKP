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
export const AddDeal = (props) => {
   
  const [nameData, setNameData] = useState({
    title: '',
    description: '',
  });
  let typeOfClient = props.typeOfClient
  let typeOfContract = props.typeOfContract
  // let prepaid = props.prepaid

  let idTypeOfClient = props.typeOfClient.id
  let idTypeOfContract = props.typeOfContract.id
  // let idPrepaid = props.prepaid.id

  let price = props.priceOfComplect
  let goodsId = props.goods
  console.log(`addDealJSX ${goodsId}`)

  let included = 'Pfrjyjld'
  let included2 =
    `
  <pre>
  1
  2
  3
  ${included}
  ${included}
  ${included}
  ${included}
  </pre>
  `

  let complectIncluded = included2
  console.log('🚀 ~ file: AddTask.jsx ~ line 6 ~ AddTask ~ taskData', nameData);

  const onChange = (event) => {
    setNameData({
      ...nameData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {

    event.preventDefault();
    console.log('Начал думать');
    const result = await BX24API.callMethod('crm.deal.add', {
      fields: {
        "ID": 56767,
        "TITLE": `${nameData.title}`,
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
    });
    const idOfCurrentDeal = result.answer.result
    console.log('result = ', result);

    const changeDeal = await BX24API.callMethod('crm.deal.get', {
      id: idOfCurrentDeal
    })
    const products = await BX24API.callMethod('crm.deal.productrows.set', {
      id: idOfCurrentDeal,
      rows:
        [
          { "PRODUCT_ID": goodsId, "PRICE": price, 'MEASURE_NAME': 'Абон. 12 мес.' , "QUANTITY": 1  },

        ]
    })
    const fields = await BX24API.callMethod('crm.deal.fields')
    const units = await BX24API.callMethod('crm.measure.fields')
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
          "COMMENTS": `${complectIncluded}`,


        },
        params: { "REGISTER_SONET_EVENT": "Y" }
      },

    );
    console.log('result = ', result.answer.result);
    console.log('changeDeal = ', changeDeal);
    console.log('products = ', products);
    console.log('fields = ', fields.answer.result);
    console.log('updateDeal = ', updateDeal.answer.result);

    console.log('UF_CRM_1540190343 = ', fields.answer.result.UF_CRM_1540190343);
    console.log('UF_CRM_1539338045 = ', fields.answer.result.UF_CRM_1539338045);
    console.log('UF_CRM_1540190412 = ', fields.answer.result.UF_CRM_1540190412);
    console.log('STAGE_ID = ', fields.answer.result.STAGE_ID);
    console.log('units = ', units);
    console.log('productrow = ', productrow.answer.result);
    
    props.reset()

    // console.log('updateDeal = ', updateDeal.answer.result);

  };

  return (
    // <div>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       type='text'
    //       name='title'
    //       value={taskData.title}
    //       onChange={onChange}
    //     />
    //     <input
    //       type='text'
    //       name='description'
    //       value={taskData.description}
    //       onChange={onChange}
    //     />
    //     <button type='submit'>Добавить задачу</button>
    //   </form>
    // </div>
    <div className='dealPush__container' >
      <div className="prepaid__container">
        <TextField name='title' onChange={onChange} fullWidth id="push-deal-name" label="Название Сделки" variant="outlined" value={nameData.title} />
      </div>
      <div className='dealButtons__container'>
        <Button style={props.styleOfPush} onClick={onSubmit} variant="outlined">Создать Сделку</Button>
        <Button style={props.styleOfCancel} variant="outlined">Отменить</Button>
        {/* <DealCancelhButtonContainer /> */}
      </div>

    </div>


  );
};
