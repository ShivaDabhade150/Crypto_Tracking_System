import { HomeNavBar } from "../component/HomeNavBar.jsx"
import { Footer } from "../component/Footer.jsx"

export const AboutUsPage = () => {

  return (
    <div className="min-h-screen bg-black text-white">

      <HomeNavBar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 🔥 TITLE */}
        <h1 className="text-3xl font-bold text-green-400 mb-6">
          About Crypto Intelligence
        </h1>

        {/* 🔥 INTRO */}
        <p className="text-gray-300 leading-relaxed mb-8">
          Crypto Intelligence is a modern crypto analytics platform designed to provide
          real-time insights into cryptocurrency markets. It helps users track prices,
          visualize trends, search coins, and stay updated with the latest crypto news.
        </p>

        {/* 🔥 FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-green-400 transition">
            <h3 className="text-green-400 font-semibold mb-2">📊 Market Analysis</h3>
            <p className="text-gray-400 text-sm">
              Interactive charts and real-time market data for better decision making.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-green-400 transition">
            <h3 className="text-green-400 font-semibold mb-2">🔍 Smart Search</h3>
            <p className="text-gray-400 text-sm">
              Search coins, categories, exchanges, and NFTs easily in one place.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-green-400 transition">
            <h3 className="text-green-400 font-semibold mb-2">📰 Latest News</h3>
            <p className="text-gray-400 text-sm">
              Stay updated with real-time crypto news and market trends.
            </p>
          </div>

        </div>

        {/* 🔥 MISSION */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 mb-10">
          <h2 className="text-xl text-green-400 font-semibold mb-3">
             Our Mission
          </h2>
          <p className="text-gray-400">
            Our mission is to simplify cryptocurrency data and make it accessible
            for everyone — from beginners to advanced traders — through a clean,
            interactive, and user-friendly platform.
          </p>
        </div>

        {/* 🔥 TECH STACK */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl text-green-400 font-semibold mb-3">
             Technologies Used
          </h2>

          <ul className="text-gray-400 space-y-2">
            <li> React.js (Frontend)</li>
            <li> Node.js + Express (Backend)</li>
            <li> CoinGecko API (Market Data)</li>
            <li> GNews API (Crypto News)</li>
            <li> Tailwind CSS (Styling)</li>
          </ul>
        </div>

      </div>

      <Footer />

    </div>
  )
}