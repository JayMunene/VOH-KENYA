import PageHeader from '../components/PageHeader'
import CommunityMap from '../components/CommunityMap'

export default function Fellowships() {
  return (
    <>
      <PageHeader
        eyebrow="Fellowships"
        title="Find your people. Find your place."
        intro="We gather across Nairobi and beyond throughout the week. Pick a location to see when and where the community meets — then come as you are."
        image="https://static.wixstatic.com/media/d185ab_39fc117d8200443a856e766540a184a1~mv2.jpg/v1/fill/w_1345,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d185ab_39fc117d8200443a856e766540a184a1~mv2.jpg"
        crumbs={[{ label: 'Fellowships' }]}
      />
      <CommunityMap />
    </>
  )
}
