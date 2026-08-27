import PageHeader from '../components/PageHeader'
import CommunityMap from '../components/CommunityMap'

export default function Fellowships() {
  return (
    <>
      <PageHeader
        eyebrow="Fellowships"
        title="Find your people. Find your place."
        intro="We gather across Nairobi and beyond throughout the week. Pick a location to see when and where the community meets — then come as you are."
        image="https://media.istockphoto.com/id/512421423/photo/group-of-people-holding-cross-and-praying-in-back-lit.jpg?s=612x612&w=0&k=20&c=L8L0zuhWP7_xGGGShvtvAbIVNorin1TJoeDVq3Rl1lU="
        crumbs={[{ label: 'Fellowships' }]}
      />
      <CommunityMap />
    </>
  )
}
