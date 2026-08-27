import PageHeader from '../components/PageHeader'
import CommunityMap from '../components/CommunityMap'

export default function Fellowships() {
  return (
    <>
      <PageHeader
        eyebrow="Fellowships"
        title="Find your people. Find your place."
        intro="We gather across Nairobi and beyond throughout the week. Pick a location to see when and where the community meets — then come as you are."
        image="https://t3.ftcdn.net/jpg/18/64/01/66/360_F_1864016611_LAMdBiNtVqLw0MhD4DZZn3g7RWoBvGs4.jpg"
        crumbs={[{ label: 'Fellowships' }]}
      />
      <CommunityMap />
    </>
  )
}
