import { useState, useCallback } from 'react'
import {Input} from "./components/index"
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  function swap() {
    if(convertedAmount==0)return;
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount)
  }
function convert(){
  setConvertedAmount(amount*currencyInfo[to])
}

  return (
    <>
     <div  className="w-full h-screen flex flex-wrap justify-center items-center  bg-slate-500">
      <div className="w-full flex flex-wrap justify-center items-center">
    <form onSubmit={
      (e)=>{ e.preventDefault();
       convert()
    }} >
     <div className="">
      <Input currencyOptions={currencyOptions} label="from" amount={amount} onCurrencyChange={(value)=>{setFrom(value)}} onAmountChange={(value)=>{setAmount(value)}} selectCurrency={from} />
     </div>
     <div className=''>
      <button
      type='button'
      onClick={swap}
      className='bg-emerald-700 p-2 text-white rounded-lg m-2 hover:bg-emerald-800'
      >
        Swap
      </button>
      <div className="">
        <Input label="to" currencyOptions={currencyOptions} amount={convertedAmount} onCurrencyChange={(value)=>{setTo(value)}} selectCurrency={to} amountDisable />
      </div >
      <button type="submit" className="bg-slate-800 p-2 text-white rounded-lg m-2 hover:bg-slate-900" >
         Convert { }{from} to {to}
       </button>
     </div>
    </form>
   </div>
   </div>
    </>
  )
}

export default App