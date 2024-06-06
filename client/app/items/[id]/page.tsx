import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import BiddingDescription from '@/components/bid/BiddingDescription'
import BiddingProductImage from '@/components/bid/BiddingProductImage'
import BiddingTab from '@/components/bid/BiddingTab'
import PlaceBid from '@/components/bid/PlaceBid'

export default function page() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='w-full'>
          <div className='w-full p-4 flex justify-center'>
            <div className='w-full flex justify-center'>
              <BiddingProductImage />
            </div>
            <div className='w-full'>
              <BiddingDescription />
              <PlaceBid />
            </div>
          </div>
          <BiddingTab />
        </div>
      </div>
    </>
  )
}