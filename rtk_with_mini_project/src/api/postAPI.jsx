import axios from 'axios'

const currency = `USD`

const baseURL = `https://v6.exchangerate-api.com/v6/40771a7cc83e3f4c0ca87b79/latest/${currency}`




export const callAPI = () => {
    return axios.get(baseURL)
    .then((res)=>(res.data.conversion_rates
    ))
       
}




const api = axios.create({
    baseURL,

})

export const currencyConverter = async (fromCurrency,toCurrency,amount) => {
    const res = await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
    // const respon = await axios.get(baseURL)
    // const resp = await respon.json()
    // console.log(resp);
    


    // console.log(respon);
    
    console.log(res);
    // return respon
    
}

