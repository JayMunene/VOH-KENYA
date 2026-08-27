import PageHeader from '../components/PageHeader'
import CommunityMap from '../components/CommunityMap'

export default function Fellowships() {
  return (
    <>
      <PageHeader
        eyebrow="Fellowships"
        title="Find your people. Find your place."
        intro="We gather across Nairobi and beyond throughout the week. Pick a location to see when and where the community meets — then come as you are."
        image="https://static.vecteezy.com/system/resources/previews/046/744/770/large_2x/group-of-crowd-of-christians-raise-their-hands-in-the-air-worshiping-the-cross-religion-concept-of-faith-and-prayer-with-bright-sunset-free-photo.jpg"
        crumbs={[{ label: 'Fellowships' }]}
      />
      <CommunityMap />
    </>
  )
}
