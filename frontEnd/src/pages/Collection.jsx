
import CollectionNav from "../components/CollectionNav"
import Footer from "../components/Footer"
import CollectionnavSlide from "../components/CollectionnavSlide"
import CollectionHeader from "../components/CollectionHeader"
import CollectionContainer from "../components/CollectionContainer"


const Collection = () => {

    return (
        <>
            <div className="bg-gray-200">
                <CollectionNav />
                <CollectionHeader />
                <CollectionContainer/>
                <Footer />
                <CollectionnavSlide />
            </div>

        </>
    )
}
export default Collection