import { HomeNavBar } from "../component/HomeNavBar.jsx";
import { coinListService } from "../services/coinListService.js";
import { useState, useEffect } from "react";
import {Footer} from '../component/Footer.jsx'
export const Home = () => {
  const [coin, setCoin] = useState([]);

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // API call
  const getList = async () => {
    const res = await coinListService();
    setCoin(res);
  };

  useEffect(() => {
    getList();
  }, []);

  // ✅ Pagination Logic
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = currentPage * itemsPerPage;

  const currentItems = coin.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(coin.length / itemsPerPage);

  return (
    <>
      <HomeNavBar />

      <div className="p-5">
        {/* Table */}
        <div className="overflow-x-auto shadow-xl rounded-2xl">
          <table className="min-w-full bg-white text-sm text-left">
            
            {/* Header */}
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3">Coin</th>
                <th className="p-3">Name</th>
                <th className="p-3">Symbol</th>
                <th className="p-3">Price</th>
                <th className="p-3">Rank</th>
                <th className="p-3">24h High</th>
                <th className="p-3">24h Low</th>
                <th className="p-3">Change %</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {currentItems.map((data) => (
                <tr
                  key={data.id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="p-3">
                    <img src={data.image} alt="" className="w-8 h-8" />
                  </td>

                  <td className="p-3 font-semibold">{data.name}</td>

                  <td className="p-3 uppercase text-gray-600">
                    {data.symbol}
                  </td>

                  <td className="p-3 font-medium">
                    ${data.current_price}
                  </td>

                  <td className="p-3">{data.market_cap_rank}</td>

                  <td className="p-3 text-green-600">
                    ${data.high_24h}
                  </td>

                  <td className="p-3 text-red-600">
                    ${data.low_24h}
                  </td>

                  <td
                    className={`p-3 font-semibold ${
                      data.price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {data.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Pagination Buttons */}
        <div className="flex justify-center gap-2 mt-5 flex-wrap">
          
          {/* Prev */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};