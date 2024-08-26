import { useHref, useNavigate } from "react-router";
import { useEffect } from "react";
import { Outlet } from "react-router";
import "./style.scss";
import { Header, Section, Aside, Footer } from "@components/layouts";

const index = () => {

    const href=useHref();
    const navigate=useNavigate();

    useEffect(()=>{
        let isAuth=localStorage.getItem("token");
        if(!isAuth){
            navigate("/login")
        }
    }, [href])

    return (
        <>

        <Header/>

            <Section className="flex">

                <Aside />

                <Section className="p-2">
                    <div className="border rounded-lg border-slite-800 border-dashed p-4">
                        <Outlet/>
                    </div>
                </Section>

            </Section>

            <Footer />
        </>
    );
};

export default index;