import { useState } from "react"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"
import { InnerContainer } from "@layouts/InnerContainer"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn"
import { HeroSection } from "@components/compound/HeroSection"
import { InputField } from "@components/atomic/fields/InputField"
import { TextareaField } from "@components/atomic/fields/TextareaField"
import { HeadingWithLine } from "@components/compound/headings/HeadingWithLine"

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
    {
        icon: ReactIcons.CALENDER,
        days: [
            'Monday 9:00am to 6:00pm',
            'Tuesday 9:00am to 6:00pm',
            'Wednesday 9:00am to 6:00pm',
            'Thursday 9:00am to 6:00pm',
            'Friday 9:00am to 6:00pm',
        ]
    },
]

const Contact = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
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

            {/* Contact Detail Section */}
            <section className="sectionStyle innerContainerPadding">
                <HeadingWithLine
                    title={'Visit Our Main Office'}
                />

                <div className="flex gap-15">
                    <div className="flex flex-col gap-5">
                        {contactDetailData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2.5"
                            >
                                <span>{item.icon}</span>

                                {item.text && (
                                    <p>{item.text}</p>
                                )}

                                <div className="flex flex-col">
                                    {item.days?.map((day, index) => (
                                        <p key={index} className="">{day}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <iframe
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.407416802165!2d67.0068853451034!3d24.84993103634587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06edc3d50f%3A0x1394ba9b7eea13fa!2sUni%20Tower%2C%20702%20Uni%20Tower%20I.I%20Chundrigar%20Rd%2C%20Seari%20Quarters%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688807417429!5m2!1sen!2s"
                        className="w-full h-full"
                    />
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="sectionStyle innerContainerPadding">
                <HeadingWithLine
                    title={"Contact Us"}
                />

                <div className="flex flex-col gap-3.5">
                    <InputField
                        inputStyleClass='p-1.5 border rounded-md border-gray-400'
                        inputData={{
                            type: 'text',
                            name: 'name',
                            required: true,
                            placeholder: 'Enter your name',
                            value: userInfo.name,
                            onChange: e => setUserInfo(prev => ({ ...prev, name: e.target.value })),
                        }}
                    />

                    <InputField
                        inputStyleClass='p-1.5 border rounded-md border-gray-400'
                        inputData={{
                            type: 'email',
                            name: 'email',
                            required: true,
                            placeholder: 'Enter your email',
                            value: userInfo.email,
                            onChange: e => setUserInfo(prev => ({ ...prev, email: e.target.value }))
                        }}
                    />

                    <InputField
                        inputStyleClass='p-1.5 border rounded-md border-gray-400'
                        inputData={{
                            type: 'text',
                            name: 'subject',
                            required: true,
                            placeholder: 'Enter the subject',
                            value: userInfo.subject,
                            onChange: e => setUserInfo(prev => ({ ...prev, subject: e.target.value }))
                        }}
                    />

                    <TextareaField
                        textareaStyleClass="p-1.5 border rounded-md resize-none border-gray-400"
                        textareaData={{
                            rows: 8,
                            name: 'message',
                            required: true,
                            placeholder: 'Enter your message',
                            value: userInfo.message,
                            onChange: e => setUserInfo(prev => ({ ...prev, message: e.target.value }))
                        }}
                    />
                </div>

                <div className="flex items-center justify-center gap-3.5">
                    <BasicBtn
                        btnData={{
                            text: 'Reset',
                            onClick: () => setUserInfo({
                                name: '',
                                email: '',
                                number: '',
                                subject: '',
                                message: ''
                            })
                        }}
                    />

                    <BasicBtn
                        btnData={{
                            text: 'Submit',
                            onClick: () => console.log('Form submitted')
                        }}
                    />
                </div>
            </section>
        </InnerContainer>
    )
}

export default Contact