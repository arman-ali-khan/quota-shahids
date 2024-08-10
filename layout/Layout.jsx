import Footer from "@/components/sections/footer/Footer"
import Navbar from "@/components/sections/header/Navbar"
import Head from "next/head"

const Layout = ({children,title,description}) =>{
    return <>
    <section>
    <Head>
        <title>{title}</title>
    </Head>
        <div className="mb-20">
            <Navbar />
        </div>
        <div>{children}</div>
        <div>
            <Footer></Footer>
        </div>
    </section>
    </>
}

export default Layout