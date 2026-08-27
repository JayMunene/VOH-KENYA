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
        image="https://media.istockphoto.com/id/512421423/photo/group-of-people-holding-cross-and-praying-in-back-lit.jpg?s=612x612&w=0&k=20&c=L8L0zuhWP7_xGGGShvtvAbIVNorin1TJoeDVq3Rl1lU="
        crumbs={[{ label: 'The Digital Altar' }]}
      />
      <DigitalAltar />
    </>
  )
}
