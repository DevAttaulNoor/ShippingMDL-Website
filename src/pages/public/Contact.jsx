import { useState } from "react"
import { Link } from "react-router"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"
import { InnerContainer } from "@layouts/InnerContainer"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn"
import { HeroSection } from "@components/compound/HeroSection"
import { InputField } from "@components/atomic/fields/InputField"
import { DetailWithImageLayout } from "@layouts/DetailWithImageLayout"
import { TextareaField } from "@components/atomic/fields/TextareaField"
import { HeadingWithLine } from "@components/compound/headings/HeadingWithLine"
import { ImageSection } from "@components/compound/detailsection-related/ImageSection"
import { DetailSection } from "@components/compound/detailsection-related/DetailSection"

const contactDetailData = [
    {
        icon: ReactIcons.BUILDING,
        text: 'Suite no 909, 9th floor, Uni Tower, Seari Quarters, I.I Chundrigar Road, Karachi, Sindh, Pakistan',
    },
    {
        icon: ReactIcons.MAIL,
        text: 'info@meagencies.net',
    },
    {
        icon: ReactIcons.PHONE,
        text: '0213-2414943',
    },
]

const Contact = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        subject: '',
        message: '',
    });

    return (
        <InnerContainer>
            {/* Hero Section */}
            <HeroSection
                heroData={{
                    bgImage: '/images/components/heroSection/contact.png',
                    title: 'Contact Us'
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.CONTACT.path,
                        title: Routes.CONTACT.title
                    },
                ]}
            />

            {/* Why Contact us Section */}
            <section className="innerContainerPadding">
                <DetailWithImageLayout
                    rightsideData={
                        <ImageSection
                            imageData={{
                                src: '/images/components/detailSection/how-to-contact.png',
                                alt: 'Image of about our company'
                            }}
                        />
                    }

                    leftsideData={
                        <DetailSection
                            detailData={{
                                title: 'How to Contact Us',
                                description: [
                                    'We provide multiple ways for you to reach our logistics experts, ensuring you always receive timely, accurate, and professional support. Whether you need shipment guidance, documentation help, or a customized logistics solution, our team is ready to assist through the channel most convenient for you:'
                                ],
                                list: [
                                    'Speak directly with our support team for quick assistance, shipment inquiries, or immediate guidance.',
                                    'Send us your detailed requirements, documents, or quote requests and get a fast, professional response.',
                                    'Connect instantly for real-time answers, shipment updates, and quick clarifications.',
                                    'Share your shipment details through our online form and receive a tailored quote with route recommendations.',
                                    'Meet our team in person for consultations, documentation help, or business discussions.',
                                ]
                            }}
                        />
                    }
                />
            </section>

            {/* Contact Detail Section */}
            <section className="flex flex-col gap-6 innerContainerPadding xs:gap-8 sm:gap-10 md:flex-row md:gap-0">
                <div className="flex flex-col p-4 gap-4 rounded-2xl text-white bg-custom-blue sm:p-6 md:w-1/2 md:p-8 md:rounded-r-none md:rounded-l-2xl xl:p-10 2xl:p-12">
                    <HeadingWithLine
                        title={"Get in Touch"}
                    />

                    <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col items-center gap-3.5 xs:flex-row">
                            <InputField
                                inputStyleClass='w-full basicTextInputStyle'
                                inputData={{
                                    type: 'text',
                                    name: 'firstName',
                                    required: true,
                                    placeholder: 'First Name',
                                    value: userInfo.firstName,
                                    onChange: e => setUserInfo(prev => ({ ...prev, firstName: e.target.value })),
                                }}
                            />

                            <InputField
                                inputStyleClass='w-full basicTextInputStyle'
                                inputData={{
                                    type: 'text',
                                    name: 'lastName',
                                    required: true,
                                    placeholder: 'Last Name',
                                    value: userInfo.lastName,
                                    onChange: e => setUserInfo(prev => ({ ...prev, lastName: e.target.value })),
                                }}
                            />
                        </div>

                        <InputField
                            inputStyleClass='basicTextInputStyle'
                            inputData={{
                                type: 'email',
                                name: 'email',
                                required: true,
                                placeholder: 'Email Address',
                                value: userInfo.email,
                                onChange: e => setUserInfo(prev => ({ ...prev, email: e.target.value }))
                            }}
                        />

                        <InputField
                            inputStyleClass='basicTextInputStyle'
                            inputData={{
                                type: 'text',
                                name: 'subject',
                                required: true,
                                placeholder: 'Subject Line',
                                value: userInfo.subject,
                                onChange: e => setUserInfo(prev => ({ ...prev, subject: e.target.value }))
                            }}
                        />

                        <TextareaField
                            textareaStyleClass="basicTextInputStyle resize-none"
                            textareaData={{
                                rows: 8,
                                name: 'message',
                                required: true,
                                placeholder: 'Drop Your Message...',
                                value: userInfo.message,
                                onChange: e => setUserInfo(prev => ({ ...prev, message: e.target.value }))
                            }}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            id="agree"
                            name="agree"
                            type="checkbox"
                            className="w-4 h-4 cursor-pointer accent-custom-green"
                        />

                        <div className="text-sm font-light opacity-75">
                            I’ve read and agree with {' '}
                            <Link
                                to={Routes.TERMS_CONDITION.path}
                                className="underline hover:text-custom-green"
                            >
                                terms
                            </Link>
                            {' '} & {' '}
                            <Link
                                to={Routes.PRIVACY_POLICY.path}
                                className="underline hover:text-custom-green"
                            >
                                privacy policy
                            </Link>
                            .
                        </div>
                    </div>

                    <BasicBtn
                        btnStyleClass="rounded-md text-white bg-custom-green"
                        btnData={{
                            onClick: () => { console.log("form submitted") },
                            text: 'Send Message',
                            icon: ReactIcons.SEND_WITH_CHECK
                        }}
                    />
                </div>

                <div className="sectionStyle p-4 rounded-2xl bg-custom-green sm:p-6 md:w-1/2 md:p-8 md:rounded-r-2xl md:rounded-l-none xl:p-10 2xl:p-12">
                    <iframe
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.407416802165!2d67.0068853451034!3d24.84993103634587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06edc3d50f%3A0x1394ba9b7eea13fa!2sUni%20Tower%2C%20702%20Uni%20Tower%20I.I%20Chundrigar%20Rd%2C%20Seari%20Quarters%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688807417429!5m2!1sen!2s"
                        className="w-full h-full border-2 rounded-2xl border-white"
                    />

                    <div className="flex flex-col gap-5 text-white">
                        {contactDetailData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3.5"
                            >
                                <span className="text-xl rounded-md p-2 bg-custom-blue">
                                    {item.icon}
                                </span>

                                <p className="font-light">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </InnerContainer>
    )
}

export default Contact