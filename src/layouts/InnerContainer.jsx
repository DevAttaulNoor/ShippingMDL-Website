import { Footer } from "@components/compound/innercontainer-related/Footer"
import { Header } from "@components/compound/innercontainer-related/Header"
import { BottomBar } from "@components/compound/innercontainer-related/BottomBar"
import { Newsletter } from "@components/compound/innercontainer-related/Newsletter"

export const InnerContainer = ({ children }) => {
    return (
        <div className="innerContainerStyle">
            <Header />

            {children}

            <div className="flex flex-col">
                <Newsletter />
                <Footer />
                <BottomBar />
            </div>
        </div>
    )
}