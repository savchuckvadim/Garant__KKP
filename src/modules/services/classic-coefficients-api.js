import axios from "axios";
//baseURL: 'https://sheet.best/api/sheets/4d75a8b6-0dbc-44af-8465-9cf163faacf6/'

const instance = axios.create({
    
    baseURL: 'https://script.google.com/macros/s/AKfycbwBFEg5xjuzpLT-BMIH_POrCKV3vpDNPLgNa2xGLLUEI_7541Wd7zsKPKFuEfaSHpvf',
  
})

export const coefficientsAPI = {
    async getCoefficients() {
 
        const response = await instance.get(`/exec`);
        console.log(response.data.data);
        return response.data.data;
            
     
    }
}
