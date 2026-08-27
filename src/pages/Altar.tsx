import PageHeader from '../components/PageHeader'
import DigitalAltar from '../components/DigitalAltar'
import { wix, PHOTOS } from '../lib/data'

export default function Altar() {
  return (
    <>
      <PageHeader
        eyebrow="The Digital Altar"
        title="Testimonies & prayer."
        intro="See what God is doing in our community — then share a testimony or lift up a prayer request of your own. Our team prays over every request."
        image="https://t3.ftcdn.net/jpg/18/64/01/66/360_F_1864016611_LAMdBiNtVqLw0MhD4DZZn3g7RWoBvGs4.jpg"
        crumbs={[{ label: 'The Digital Altar' }]}
      />
      <DigitalAltar />
    </>
  )
}
