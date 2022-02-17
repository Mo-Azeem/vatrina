import Gallery from "./Gallery";
import EmptyGallery from "./EmptyGallery";
import usePhotos from '../hooks/usePhotos'

export default function GalleryController() {
    const {photos, isLoading, isError} = usePhotos()

    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1 className="text-red-900">ERORR</h1>
    
    if(photos.length == 0) return <EmptyGallery />
    if(photos) return <Gallery photos={photos}/> 
}