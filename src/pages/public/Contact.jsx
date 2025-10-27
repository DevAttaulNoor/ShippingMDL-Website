import { useState } from "react"
import { Routes } from "@constants/Routes"
import { ReactIcons } from "@constants/ReactIcons"
import { InnerContainer } from "@layouts/InnerContainer"
import { BasicBtn } from "@components/atomic/buttons/BasicBtn"
import { HeroSection } from "@components/compound/HeroSection"
import { InputWithLabel } from "@components/compound/InputWithLabel"
import { TextareaField } from "@components/atomic/fields/TextareaField"

const contactDetailData = [
    {
        icon: ReactIcons.Building,
        text: 'Suite no 909, 9th floor, Uni Tower, Seari Quarters, I.I Chundrigar Road, Karachi, Sindh, Pakistan',
    },
    {
        icon: ReactIcons.Mail,
        text: 'info@meagencies.net',
    },
    {
        icon: ReactIcons.Phone,
        text: '0213-2414943',
    },
    {
        icon: ReactIcons.Days,
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
            <section className="flex flex-col innerContainerPadding gap-10">
                <h1 className="text-center text-5xl font-semibold">Visit Our Main Office</h1>

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
                        allowfullscreen=""
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.407416802165!2d67.0068853451034!3d24.84993103634587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06edc3d50f%3A0x1394ba9b7eea13fa!2sUni%20Tower%2C%20702%20Uni%20Tower%20I.I%20Chundrigar%20Rd%2C%20Seari%20Quarters%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688807417429!5m2!1sen!2s"
                        className="w-full h-full"
                    />
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="flex flex-col innerContainerPadding gap-10">
                <h1 className="text-center text-5xl font-semibold">Contact Us</h1>
                <p class="text-center text-2xl font-medium">If you our having trouble please don’t hasitate to Contact us!</p>

                <div class="flex gap-10">
                    <div className="flex flex-col gap-5">
                        <InputWithLabel
                            labelData={{
                                htmlFor: 'name',
                                text: 'Name:'
                            }}
                            inputData={{
                                type: 'text',
                                name: 'name',
                                required: true,
                                placeholder: 'Enter name',
                                value: userInfo.name,
                                onChange: e => setUserInfo(prev => ({ ...prev, name: e.target.value }))
                            }}
                        />

                        <InputWithLabel
                            labelData={{
                                htmlFor: 'email',
                                text: 'Email:'
                            }}
                            inputData={{
                                type: 'email',
                                name: 'email',
                                required: true,
                                placeholder: 'Enter email',
                                value: userInfo.email,
                                onChange: e => setUserInfo(prev => ({ ...prev, email: e.target.value }))
                            }}
                        />

                        <InputWithLabel
                            labelData={{
                                htmlFor: 'number',
                                text: 'Number:'
                            }}
                            inputData={{
                                type: 'number',
                                name: 'number',
                                required: true,
                                placeholder: 'Enter number',
                                value: userInfo.number,
                                onChange: e => setUserInfo(prev => ({ ...prev, number: e.target.value }))
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <InputWithLabel
                            labelData={{
                                htmlFor: 'subject',
                                text: 'Subject:'
                            }}
                            inputData={{
                                type: 'text',
                                name: 'subject',
                                required: true,
                                placeholder: 'Enter subject',
                                value: userInfo.subject,
                                onChange: e => setUserInfo(prev => ({ ...prev, subject: e.target.value }))
                            }}
                        />

                        <TextareaField
                            textareaData={{
                                rows: 8,
                                name: 'message',
                                required: true,
                                placeholder: 'Enter message',
                                value: userInfo.message,
                                onChange: e => setUserInfo(prev => ({ ...prev, message: e.target.value }))
                            }}
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <BasicBtn
                            btnData={{
                                text: 'Reset',
                                onClick: () => setUserInfo('')
                            }}
                            btnStyleClass="w-fit basicBtnStyle"
                        />

                        <BasicBtn
                            btnData={{
                                text: 'Submit',
                                onClick: () => console.log('Form submitted')
                            }}
                            btnStyleClass="w-fit basicBtnStyle"
                        />
                    </div>
                </div>
            </section>
        </InnerContainer>
    )
}

export default Contact