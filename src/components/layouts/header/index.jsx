import "./style.scss";
import Container from "@components/layouts/container";

const index = () => {
    return (
        <header className="bg-[#F7F8FA]">
            <Container className="container-fluid">
                <nav className="w-full flex justify-between items-center h-[50px]">
                    <a href="#" className="">Dashboard</a>
                    <a href="#" className="">Profile</a>
                </nav>
            </Container>
        </header>
    );
};

export default index;