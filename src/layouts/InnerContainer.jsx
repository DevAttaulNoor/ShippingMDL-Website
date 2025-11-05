import { Footer } from "@components/compound/container-related/Footer"
import { Header } from "@components/compound/container-related/Header"
import { BottomBar } from "@components/compound/container-related/BottomBar"
import { Newsletter } from "@components/compound/container-related/Newsletter"

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