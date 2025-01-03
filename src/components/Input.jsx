import React, {useId} from 'react'

function Input({
label,
amount, 
onAmountChange,
currencyOptions=[], 
selectCurrency= "usd",
onCurrencyChange, 
amountDisable=false,
currencyDisable = false

}) {
  const amountInputId = useId();
  return (
    <div className='w-full flex p-3 bg-white text-md rounded-md justify-center items-center' >
      <div className="mb-2">
        <label htmlFor={amountInputId} className='text-gray-600'>{label}</label>
        <input className='w-full py-1.5 bg-transparent' type="number" id={amountInputId} value={amount} disabled={amountDisable} onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}/>
      </div>
      <div  className="rightcontainer w-1/2 flex flex-wrap justify-end pb-3 text-right">
        <p className=' mb-3 w-full text-gray-600 '>currency type</p>
        <select className='outline-none cursor-pointer bg-slate-100' onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} value={selectCurrency}>
          {currencyOptions.map((currency, index)=>(
            <option key={index} value={currency}>
                {currency}
          </option>
        ))}
        </select>
      </div>
    </div>
  )
}

export default Input
