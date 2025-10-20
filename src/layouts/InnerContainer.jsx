import { Footer } from "@components/universal/container-related/Footer"
import { Header } from "@components/universal/container-related/Header"
import { Newsletter } from "@components/universal/container-related/Newsletter"

export const InnerContainer = ({ children }) => {
    return (
        <div className="flex flex-col gap-12">
            <Header />

            {children}

            <div className="flex flex-col">
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}