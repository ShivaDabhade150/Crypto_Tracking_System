import { useState, useEffect } from 'react'
import { NewService } from '../services/NewService.js'
import {HomeNavBar} from '../component/HomeNavBar.jsx'
import {Footer} from '../component/Footer.jsx'
export const NewPage = () => {

  const [news, setNews] = useState([])

  const coin = "crypto"   // 🔥 default keyword (best)

  const fetchData = async () => {
    try {
     

      const response = await NewService({id:coin})
      console.log(response)
      setNews(response)

    } catch (err) {
      console.log(err?.response?.data?.message)
    } 
  }

  // 🔥 AUTO LOAD
  useEffect(() => {
    fetchData()
  }, [])

  return (
    
    <>
     <HomeNavBar />
    <div className="min-h-screen bg-black text-white p-5">

      <h1 className="text-[50px] text-green-400 mb-6">
        📰 Crypto News
      </h1>

     

    

      {/* 🔥 NEWS */}
      <div className="grid md:grid-cols-2 gap-4">

        {news.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:scale-105 transition"
          >
            <img
              src={item.image}
              className="w-full h-100 object-cover rounded-lg mb-2"
            />

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {item.description}
            </p>
          </a>
        ))}

      </div>

    </div>
    <Footer />
    </>
  )
}