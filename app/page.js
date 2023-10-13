import Image from 'next/image'
import BarChart from '@/components/barchart'
import LineChart from '@/components/linechart'


export default function Home() {
  return (
    <main className=" h-screen ">
      <BarChart />
      <LineChart />
    </main>
  )
}
