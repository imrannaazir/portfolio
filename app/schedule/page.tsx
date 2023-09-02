import { FC } from 'react'
import Script from 'next/script';
import Container from '@components/container/Container';



interface pageProps {

}

const page: FC<pageProps> = ({ }) => {

    return (
        <Container className='w-full h-full'>
            <div className="w-full h-[42rem]">
                <div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/nayangit000?hide_landing_page_details=1&hide_gdpr_banner=1" ></div>
                <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
            </div>
        </Container>
    )
}
export default page