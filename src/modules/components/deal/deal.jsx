import React, { Component } from "react";
import getCurrentUser from "./services/get-current-user.service";
import "./deal.css"
import createDeal from "./services/create-deal";
import getDeal from "./services/get-deal";

import Button from '@material-ui/core/Button';

import { PrepaidContainer} from "./prepaid-Container";
import { TypeOfClientContainer } from "./typeOfClient-Container";
import { TypeOfContractContainer } from "./typeOfContract-Container";
import { AddDealContainer } from "./AddDeal-Container";

const Deal = () => {
  return (
    <div className="deal__container">
      <h1>Добавление Сделки</h1>
      <AddDealContainer />
      <PrepaidContainer />
      <TypeOfClientContainer/>
      <TypeOfContractContainer/>
    </div>
  );
};

export default Deal;


// class Deal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       id: null,
//       deal: null
//     };

//     createDeal().then(id => {
//       getDeal(id)
//     }).then(deal => {
//       this.setState({
//         id: id,
//         deal: deal,
//         loading: false
//       });
//       console.log(this.state)
//     });

//     // getDeal(this.id).then(deal => {
//     //   this.setState({
//     //     deal: deal,
//     //     loading: false
//     //   });
//     //   console.log(this.state.deal)
//     // });

//   }
//   click = () => {
    
//   }

//   render() {
//     return (
//       <div className="deal__container">
//         <Button key={'deal-button'} onClick={()=>{this.click()}}> Создать</Button>
//       </div>
//     )

//     //   if (!this.state.loading) {
//     //     return (
//     //       <div className="deal__container">
//     //         <h1>
//     //           Hello {this.state.user} 
//     //         </h1>
//     //         <h2>Start editing to see some magic happen!</h2>
//     //       </div>
//     //     );
//     //   } else {
//     //     return (
//     //       <div className="deal__container">
//     //         <div>Загрузка...</div>
//     //       </div>

//     //     )
//     //   }
//     // }
//   }
// }
