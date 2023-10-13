import { useEffect, useState } from 'react'
import axios from 'axios'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    (async () => {
      const res = await axios({
        method: 'GET',
        url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
      })

      setData(res.data[currency])

      // console.log(data)
    })()
  }, [currency])
  
  return data
}

export default useCurrencyInfo
