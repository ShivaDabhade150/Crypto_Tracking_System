import { HomeNavBar } from "../component/HomeNavBar.jsx";
import { Footer } from '../component/Footer.jsx'
import { coinListService } from "../services/coinListService.js";
import { useState, useEffect } from "react";

export const Home = () => {
  const [coin, setCoin] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getList = async () => {
    const res = await coinListService();
    setCoin(res);
  };

  useEffect(() => {
    getList();
  }, []);

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = currentPage * itemsPerPage;

  const currentItems = coin.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(coin.length / itemsPerPage);

  return (
    <>
      <HomeNavBar />

      <div className="min-h-screen bg-black text-white p-5">

        {/* 🔥 TITLE */}
        <h1 className="text-3xl font-bold text-green-400 mb-6">
          Crypto Market
        </h1>

        {/* TABLE */}
        <div className="overflow-x-auto shadow-xl rounded-2xl bg-gray-900">
          <table className="min-w-full text-sm text-left">

            {/* HEADER */}
            <thead className="bg-gray-800 text-green-400">
              <tr>
                <th className="p-3">Coin</th>
                <th className="p-3">Name</th>
                <th className="p-3">Symbol</th>
                <th className="p-3">Price</th>
                <th className="p-3">Rank</th>
                <th className="p-3">Change %</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {currentItems.map((data) => (
                <tr
                  key={data.id}
                  className="border-b border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="p-3">
                    <img src={data.image} alt="" className="w-8 h-8" />
                  </td>

                  <td className="p-3 font-semibold text-white">
                    {data.name}
                  </td>

                  <td className="p-3 uppercase text-gray-400">
                    {data.symbol}
                  </td>

                  <td className="p-3 font-medium text-green-300">
                    ₹{data.current_price}
                  </td>

                  <td className="p-3 text-gray-300">
                    {data.market_cap_rank}
                  </td>

                  <td
                    className={`p-3 font-semibold ${
                      data.price_change_percentage_24h > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {data.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* 🔥 PAGINATION */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">

          {/* PREV */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50"
          >
            Prev
          </button>

          {/* PAGE NUMBERS */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50"
          >
            Next
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
};