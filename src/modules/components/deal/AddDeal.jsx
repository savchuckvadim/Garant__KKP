import React, { useState } from 'react';
import BX24API from 'bx24-api';

export const AddDeal = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
  });
  console.log('🚀 ~ file: AddTask.jsx ~ line 6 ~ AddTask ~ taskData', taskData);

  const onChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('Начал думать');
    const result = await BX24API.callMethod('crm.deal.add', {
      fields: {
        "ID": 56767,
        "TITLE": `${taskData.title}`,
        "STAGE_ID": "GOODS",
        "STAGE_ID": "NEW",
        "COMPANY_ID": 3,
        "CONTACT_ID": 3,
        "OPENED": "Y",
        "ASSIGNED_BY_ID": 1,
        "PROBABILITY": 30,
        "CURRENCY_ID": "USD",
        "OPPORTUNITY": 5000,
        "CATEGORY_ID": 5,

        'UF_CRM_5B39D7C2EC0AB': true

      },
      params: {
        "REGISTER_SONET_EVENT": "Y"
      }
    });
    console.log('result = ', result);

    const changeDeal = await BX24API.callMethod('crm.deal.get', {
      id: result.answer.result
    })
    const products = await BX24API.callMethod('crm.deal.productrows.set', {
      id: result.answer.result,
      rows:
      [ 
        { "PRODUCT_ID": 5578, "PRICE": 100.00, "QUANTITY": 4 }, 
        { "PRODUCT_ID": 5040, "PRICE": 960.00, "QUANTITY": 1 } 
      ]
})
  console.log('result = ', result.answer.result);
console.log('changeDeal = ', changeDeal);
console.log('products = ', products);
  };

return (
  <div>
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='title'
        value={taskData.title}
        onChange={onChange}
      />
      <input
        type='text'
        name='description'
        value={taskData.description}
        onChange={onChange}
      />
      <button type='submit'>Добавить задачу</button>
    </form>
  </div>
);
};
