import type React from "react"
import {  Instagram, Youtube, MessageCircle } from "lucide-react"
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa"

interface SocialMediaData {
  id: string
  platform: string
  icon: React.ReactNode
  followers: string
  clicks: number
  shares: number
  comments: number
  earnings: number
}

interface SocialMediaCardsProps {
  data?: SocialMediaData[]
}

const SocialMediaCards: React.FC<SocialMediaCardsProps> = ({
  data = [
    {
      id: "1",
     
      icon: <FaFacebook  className="w-8 h-8 text-white"  />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
    {
      id: "2",
   
      icon: <Instagram className="w-8 h-8 text-white" />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
    {
      id: "3",
     
      icon: <FaYoutube className="w-8 h-8 text-white"  />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
    {
      id: "4",
     
      icon: <FaDiscord className="w-8 h-8 text-white" />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
  ],
}) => {
  return (
    <div className="bg-black min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[35px] max-w-2xl mx-auto text-white text-center mb-8 sm:mb-12 lg:mb-16">
              See Views, Click Conversion
            </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 justify-items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-[305px] bg-[#3E1017] border border-red-500 rounded-[10.62px] pt-5 pr-5 pb-5 pl-[25px] flex flex-col gap-[10px] hover:bg-[#9B1548] transition-colors duration-300"
              style={{
                minHeight: "213.8px",
              }}
            >
              {/* Icon and Platform */}
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                
              </div>

              {/* Followers Count */}
              <div className="mb-4">
                <div className="text-white text-[31px] ">{item.followers}</div>
                
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 text-[16px]">
                <div className="text-gray-300 flex">
                     <div>Clicks:</div>
                  <div className="text-white  ml-0.5">{item.clicks}</div>
                 
                </div>
                <div className="text-gray-300 flex">
                    <div>Shares:</div>
                  <div className="text-white font-medium ml-0.5">{item.shares}</div>
                  
                </div>
                <div className="text-gray-300 flex">
                    <div>Comments:</div>
                  <div className="text-white font-medium ml-0.5">{item.comments}</div>
                 
                </div>
                <div className="text-gray-300 flex">
                    <div>Earnings:</div>
                  <div className="text-white font-medium ml-0.5">{item.earnings}</div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      
        
      </div>
    </div>
  )
}

export default SocialMediaCards

  

