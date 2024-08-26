import "./style.scss";

const index = () => {
    return (
        <footer className="bg-[#F7F8FA] p-2">
            <p className="text-center">
                {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default index;