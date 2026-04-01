import { marketViewPageService } from '../services/marketViewPageService.js'
import { useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

import {HomeNavBar} from '../component/HomeNavBar.jsx'

import {Footer} from '../component/Footer.jsx'
export const MarketViewPage = () => {

  const [coin, setCoin] = useState('bitcoin')
  const [input, setInput] = useState('')
  const [chartData, setChartData] = useState([])
  const [chartType, setChartType] = useState('line') // 🔥 new state
  
  const fetchData = async (coinName) => {
    try {
      const response = await marketViewPageService({ id: coinName })

      const formatted = response.prices.map((item) => ({
        time: new Date(item[0]).toLocaleTimeString(),
        price: item[1]
      }))

      setChartData(formatted)

    } catch (err) {
      console.log(err.response?.data?.message)
    }
  }

  useEffect(() => {
    fetchData(coin)
  }, [])

  const handleSearch = () => {
    if (!input) return
    setCoin(input)
    fetchData(input)
  }

  return (
    <>
    
      <HomeNavBar />
      <div className="min-h-screen bg-black text-white p-6">

  {/* TITLE */}
  <h1 className="text-3xl font-bold text-green-400 mb-6">
    📊 Market View
  </h1>

  {/* SEARCH + TABS */}
  <div className="flex flex-wrap gap-4 items-center mb-6">

    {/* SEARCH */}
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search coin..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 w-64 rounded-lg bg-gray-900 border border-gray-700 focus:border-green-400 outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold"
      >
        Search
      </button>
    </div>

    {/* 🔥 TABS (instead of dropdown) */}
    <div className="flex bg-gray-900 rounded-lg overflow-hidden border border-gray-700">

      <button
        onClick={() => setChartType('line')}
        className={`px-4 py-2 ${
          chartType === 'line'
            ? 'bg-green-500 text-black'
            : 'text-gray-300'
        }`}
      >
        Line
      </button>

      <button
        onClick={() => setChartType('area')}
        className={`px-4 py-2 ${
          chartType === 'area'
            ? 'bg-green-500 text-black'
            : 'text-gray-300'
        }`}
      >
        Area
      </button>

      <button
        onClick={() => setChartType('bar')}
        className={`px-4 py-2 ${
          chartType === 'bar'
            ? 'bg-green-500 text-black'
            : 'text-gray-300'
        }`}
      >
        Bar
      </button>

    </div>

  </div>

  {/* COIN TITLE */}
  <h2 className="text-xl text-green-300 mb-4">
    {coin.toUpperCase()} Chart
  </h2>

  {/* 🔥 FULL WIDTH CHART */}
  <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full overflow-x-auto">

    <div className="flex justify-center">

      {chartType === 'line' && (
        <LineChart width={1000} height={400} data={chartData}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line dataKey="price" stroke="#00ff88" dot={false} />
        </LineChart>
      )}

      {chartType === 'area' && (
        <AreaChart width={1000} height={400} data={chartData}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Area dataKey="price" stroke="#00ff88" fill="#00ff88" />
        </AreaChart>
      )}

      {chartType === 'bar' && (
        <BarChart width={1000} height={400} data={chartData}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="price" fill="#00ff88" />
        </BarChart>
      )}

    </div>

  </div>

</div>
      <Footer />
    
</>    
)
}