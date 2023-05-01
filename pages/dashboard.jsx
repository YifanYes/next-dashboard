import BarChart from '@/components/BarChart'
import Header from '@/components/Header.jsx'
import RecentOrders from '@/components/RecentOrders'
import Sidebar from '@/components/Sidebar'
import TopCards from '@/components/TopCards'

const dashboard = () => {
  return (
    <>
      <Sidebar>
        <div className="bg-gray-100 min-h-screen">
          <Header />
          <TopCards />
          <div className="grid p-4 md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart />
            <RecentOrders />
          </div>
        </div>
      </Sidebar>
    </>
  )
}

export default dashboard
