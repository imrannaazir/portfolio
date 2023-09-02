'use client'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FC } from 'react'
import HumanImage from '../../../public/about/about.webp'

interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {

    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '.4 1']
    })
    const scaleTranslate = useTransform(scrollYProgress, [0, 1], ['20%', '0%'])
    useMotionValueEvent(scaleTranslate, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })



    return <motion.section style={{ opacity: scrollYProgress, translateY: scaleTranslate }
    } ref={ref} className='my-8 lg:my-16 backdrop-blur-[10px]' id='about'>
        <div className="bg-opacity-0 rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20 aboutMe">
            <div className="px-1 mx-auto max-w-7xl sm:px-8">
                <div className="items-center py-6 md:flex ">
                    <div className="flex-1 mx-5 font-sans text-white lg:mb-0 aboutText">
                        <h1 className="my-5 text-3xl font-bold lg:5xl">About Me</h1>
                        <p className="font-light leading-relaxed tracking-wide opacity-75 ">This is Raqib Nur, a Web Application Developer residing in Dhaka, Bangladesh. Even if it sounds humorous, I went to Madrasa and returned as a programmer! ✌<br /><br />I consider myself to be completely blessed as I get to inspect and build websites for a living. Of my intense interest in the Web Platform &amp; SaaS products, I plan to build results-driven digital products for my clients while becoming part of meaningful businesses along the way.<br /><br />I&apos;ve built numerous websites and worked closely with the founders of the companies. Besides, I&apos;ve also committed my time to 3 companies part-time to help them hire and manage their own technical team, and I am here today to become a part of your journey.<br /><br />Recently, I&apos;ve co-founded an eCommerce Development Company: The Run Digital, where we help entrepreneurs fix their web goals and help them achieve them with our web-based solutions. We are, after all, KPI-driven.</p>

                        <div className="flex my-5 space-x-4 align-middle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer" stroke-width="2" href="http://facbook.com/mdraqibnur"><g clip-path="url(#clip0_65_70)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z"></path></g><defs><clipPath id="clip0_65_70"><rect width="24" height="24"></rect></clipPath></defs></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer" stroke-width="2" href="https://github.com/Raqibnur"><g clip-path="url(#clip0_100_4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></g><defs><clipPath id="clip0_100_4"><rect width="24" height="24"></rect></clipPath></defs></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer" stroke-width="2" href="https://nur-tech.slack.com"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.066 1a2.2 2.2 0 1 0 .001 4.4h2.2V3.2a2.202 2.202 0 0 0-2.2-2.2zm0 5.867H3.2a2.2 2.2 0 0 0 0 4.4h5.866a2.2 2.2 0 1 0 0-4.4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23 9.066a2.2 2.2 0 0 0-4.4 0v2.2h2.2a2.2 2.2 0 0 0 2.2-2.2zm-5.867 0V3.2a2.2 2.2 0 0 0-4.4 0v5.866a2.2 2.2 0 1 0 4.4 0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.933 23a2.2 2.2 0 1 0 0-4.4h-2.2v2.2c-.001 1.213.984 2.198 2.2 2.2zm0-5.868H20.8a2.2 2.2 0 0 0 0-4.4h-5.866a2.2 2.2 0 0 0-.001 4.4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 14.933a2.2 2.2 0 0 0 4.4 0v-2.2H3.2a2.2 2.2 0 0 0-2.2 2.2zm5.867 0v5.866a2.2 2.2 0 0 0 4.4.001v-5.866a2.2 2.2 0 0 0-4.4-.001z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer" stroke-width="2" href="https://dribbble.com/raqibnur"><g clip-path="url(#clip0_67_12)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12c6.612 0 12-5.375 12-12S18.612 0 12 0zm7.926 5.531a10.202 10.202 0 0 1 2.317 6.378c-.338-.065-3.722-.755-7.132-.325-.079-.17-.144-.352-.222-.534a30.53 30.53 0 0 0-.676-1.484c3.774-1.536 5.492-3.748 5.713-4.035zM12 1.771c2.603 0 4.985.975 6.794 2.576-.182.26-1.731 2.33-5.375 3.696-1.68-3.084-3.54-5.61-3.827-6A10.424 10.424 0 0 1 12 1.77zm-4.36.962c.273.365 2.095 2.903 3.8 5.922-4.79 1.276-9.02 1.25-9.475 1.25.664-3.176 2.812-5.818 5.675-7.172zm-5.896 9.28v-.312c.443.013 5.414.078 10.53-1.458.299.573.572 1.158.832 1.744-.13.039-.273.078-.403.117-5.284 1.705-8.096 6.364-8.33 6.755a10.226 10.226 0 0 1-2.629-6.846zM12 22.256c-2.369 0-4.555-.807-6.286-2.16.182-.378 2.264-4.387 8.043-6.404.026-.013.04-.013.065-.026 1.445 3.735 2.03 6.872 2.187 7.77-1.237.534-2.59.82-4.009.82zm5.714-1.757c-.104-.625-.651-3.618-1.992-7.302 3.215-.507 6.026.326 6.378.443-.443 2.85-2.083 5.31-4.386 6.859z"></path></g><defs><clipPath id="clip0_67_12"><rect width="24" height="24"></rect></clipPath></defs></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer" stroke-width="2" href="https://www.linkedin.com/in/raqib-nur-b09621175"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802A2.573 2.573 0 0 1 4.57 7.1a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer" stroke-width="2" href="https://twitter.com/04a736dd4b484be"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer" stroke-width="2" href="https://www.instagram.com/raqibnur"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066 1.172.053 1.972.24 2.672.511.733.277 1.398.71 1.948 1.27.56.549.992 1.213 1.268 1.947.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268-.7.272-1.5.458-2.67.512-1.174.054-1.548.066-4.536.066-2.988 0-3.362-.013-4.535-.066-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268 5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948 5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.073.049-1.655.228-2.043.379-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.073.228 1.655.379 2.043.176.477.457.91.822 1.265.355.365.788.646 1.265.822.388.151.97.33 2.043.379 1.16.053 1.507.064 4.445.064 2.938 0 3.285-.011 4.445-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.437 1.265-.822.365-.355.646-.788.822-1.265.151-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.073-.228-1.655-.379-2.043-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986 3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996 5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89 1.337 1.337 0 0 0 1.89 1.89z"></path></svg></div>
                    </div>

                    {/* image div here  */}
                    <div className="text-center aboutText">
                        <Image
                            src={HumanImage}
                            alt='image-not-available'
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
}

export default About