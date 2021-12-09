import { BX24 } from "bx24";
import axios from "axios";
import createDeal from "./create-deal";

function getCurrentUser() {
  const bx24 = new BX24();
  // bx24.init(function(){
  //   console.log('Инициализация завершена!', bx24.isAdmin());
  // });
  const urlParams = new URLSearchParams(window.location.search);
  const baseUrl = `
    ${urlParams.get("PROTOCOL") === 0 ? "https" : "https"}://${urlParams.get("DOMAIN")}
`;

  const currentUserPromise =   new Promise((resolve, reject) => {
    bx24.getAuth().then(auth => {
      axios({
        method: "get",
        url: baseUrl + "/rest/user.current?auth=" + auth.ACCESS_TOKEN
      }).then(response => {
        resolve(response.data.result);
      });
    });
  });
// let name
//   bx24.init(function(){

//     bx24.callMethod('user.current', {}, function(res){
//         // var name = document.getElementById('name');
//       name = res.data().NAME + ' ' + res.data().LAST_NAME;
//         console.log(res.data());
//     });

//     console.log('B24 SDK is ready!', bx24.isAdmin());

// });
createDeal()
  return  currentUserPromise;
}

export default getCurrentUser;

