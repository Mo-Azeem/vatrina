import Layout from "../components/fragments/Layout";
import Navbar from "../components/fragments/Navbar";
import EmptyGallery from "../components/compositions/EmptyGallery";
import UploadDialog from "../components/compositions/UploadDialog";
import Gallery from "../components/compositions/Gallery";

export default function Home() {
  return (
      <Layout>
        <Navbar empty={true}/>
        <Gallery />
        <UploadDialog />        
      </Layout>
  )
}
