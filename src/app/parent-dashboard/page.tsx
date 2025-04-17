import Candidates from './candidates'
import Trips from './trips'

export default function ParentDashboard() {
  return (
    <>
      <section className='container mx-auto py-20'>
        <Trips />
      </section>
      <section className='container mx-auto py-20'>
        <Candidates />
      </section>
    </>
  )
}
