import Layout from "../components/fragments/Layout";
import Navbar from "../components/fragments/Navbar";
import EmptyGallery from "../components/compositions/EmptyGallery";
import UploadDialog from "../components/compositions/UploadDialog";
import Gallery from "../components/compositions/Gallery";
import ImageViewer from "../components/compositions/ImageViewer";
export default function Home() {
  return (
      <Layout>
        <Navbar empty={false}/>
        {/* <EmptyGallery /> */}
        <Gallery />
        {/* <UploadDialog /> */}
        {/* <ImageViewer /> */}
      </Layout>
  )
}
