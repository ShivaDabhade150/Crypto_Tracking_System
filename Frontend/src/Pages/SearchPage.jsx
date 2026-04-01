import { useState } from 'react'
import { Footer } from "../component/Footer.jsx"
import { HomeNavBar } from "../component/HomeNavBar.jsx"
import searchService from "../services/searchService.js"

export const SearchPage = () => {

  const [searchData, setSearchData] = useState('')
  const [responce, setResponce] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChanges = (e) => {
    setSearchData(e.target.value)
  }

  const handleClick = async () => {
    try {
      setLoading(true)
      const resData = await searchService({ search: searchData })
      setResponce(resData)
    } catch (err) {
      console.log(err?.response?.data?.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">

      <HomeNavBar />

      {/* 🔍 Search Bar */}
      <div className="flex justify-center items-center gap-3 px-4 py-6">

        <input
          type="text"
          placeholder="Search crypto..."
          value={searchData}
          onChange={handleChanges}
          className="w-full max-w-xl h-12 px-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
        />

        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 px-6 h-12 rounded-lg font-semibold transition"
        >
          Search
        </button>

      </div>

      {/* 🔄 Loading */}
      {loading && (
        <p className="text-center text-green-400 font-semibold">Loading...</p>
      )}

      {/* ❌ No Data */}
      {!loading && responce?.coins?.length === 0 && (
        <p className="text-center text-red-400">No Data Found</p>
      )}

      {/* 🔥 Main Content */}
      <div className="flex flex-col items-center w-full gap-8 px-4 pb-10">

        {/* 🔥 Coins */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-green-400 mb-3">Coins</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {responce?.coins?.slice(0, 10).map((coin) => (
              <div
                key={coin.id}
                className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition cursor-pointer border border-gray-700"
              >
                <p className="font-bold text-lg">{coin.name}</p>
                <p className="text-gray-400 uppercase">{coin.symbol}</p>
                <p className="text-green-400 font-semibold">
                  Rank: {coin.market_cap_rank}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Categories */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-green-400 mb-3">Categories</h2>

          <div className="flex flex-wrap gap-2">
            {responce?.categories?.map((cat) => (
              <span
                key={cat.id}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-500 hover:text-black transition"
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>

        {/* 🔥 Exchanges */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-green-400 mb-3">Exchanges</h2>

          <div className="flex flex-wrap gap-4">
            {responce?.exchanges?.map((ex) => (
              <div
                key={ex.id}
                className="flex items-center gap-3 bg-gray-900 px-4 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 transition border border-gray-700"
              >
                <img src={ex.thumb} className="w-8 h-8 rounded-full" />
                <p className="font-medium">{ex.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 NFTs */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-green-400 mb-3">NFTs</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {responce?.nfts?.slice(0, 10).map((nft) => (
              <div
                key={nft.id}
                className="bg-gray-900 p-3 rounded-xl shadow hover:shadow-lg hover:scale-105 transition text-center border border-gray-700"
              >
                <img
                  src={nft.thumb}
                  className="mx-auto w-16 h-16 rounded-lg"
                />
                <p className="text-sm mt-2 text-gray-300">{nft.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}