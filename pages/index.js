import Layout from "../components/fragments/Layout";
import Navbar from "../components/fragments/Navbar";
import GalleryController from "../components/compositions/GalleryController";

export default function Home() {
  return (
      <Layout>
        <Navbar empty={false}/>
        <GalleryController />
      </Layout>
  )
}
