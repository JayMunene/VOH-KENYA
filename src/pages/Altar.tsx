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
        image={wix(PHOTOS.g, 1920, 900)}
        crumbs={[{ label: 'The Digital Altar' }]}
      />
      <DigitalAltar />
    </>
  )
}
