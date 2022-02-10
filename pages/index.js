import Layout from "../components/fragments/Layout";
import Navbar from "../components/fragments/Navbar";
import EmptyGallery from "../components/compositions/EmptyGallery";

export default function Home() {
  return (
      <Layout>
        <Navbar />
        <EmptyGallery />
        
      </Layout>
  )
}
