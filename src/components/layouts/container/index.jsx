import "./style.scss";

const index = ({children, className}) => {
    return (
        <div className={'container' + className && className}>
            {children && children}
        </div>
    );
};

export default index;