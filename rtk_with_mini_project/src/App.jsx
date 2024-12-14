import { useState } from "react"
import { currencyConverter } from "./api/postAPI";
import { callAPI } from "./api/postAPI";

function App() {

  const [isLoading,setIsLoading] = useState(false)
  const [ amount,setAmount ] = useState(0)
  const [ fromCurrency,setFromCurrency ] = useState('USD');
  // console.log(currencyConverter());
  // const data = callAPI

  // console.log(data['AMD']);
  

  
  



  return (


    <>
      <section className="currency-converter" >
        <div className="currency-div" >
      <h1> Hii There ! I'm Prannav Sirsufale </h1>
        <h1>currency converter</h1>
        <hr />
        <div>
          <label >
            Amount :
            <input type="text" />
          </label>
        </div>

      <section className="currency-selector" >
        <label >
            From : 
            <select>
            {
              ['INR','USD','EUR','GBP','AUD'].map((currency ,index)=>(
                <option key={index} value={currency}> {currency} </option>
              ))
            }

            </select>

        </label>
        <label >
            To :  
            <select>
            {
              ['USD','EUR','INR','GBP','AUD'].map((currency ,index)=>(
                <option key={index} value={currency}> {currency} </option>
              ))
            }

            </select>

        </label>

      </section>


      <button disabled={isLoading || amount <= 0} > { isLoading ? 'converted': 'converting...'} </button>

        </div>
      </section>

    </>
  )
}

export default App
