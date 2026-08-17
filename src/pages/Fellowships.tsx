import PageHeader from '../components/PageHeader'
import CommunityMap from '../components/CommunityMap'
import { wix, PHOTOS } from '../lib/data'

export default function Fellowships() {
  return (
    <>
      <PageHeader
        eyebrow="Fellowships"
        title="Find your people. Find your place."
        intro="We gather across Nairobi and beyond throughout the week. Pick a location to see when and where the community meets — then come as you are."
        image={wix(PHOTOS.c, 1920, 900)}
        crumbs={[{ label: 'Fellowships' }]}
      />
      <CommunityMap />
    </>
  )
}
