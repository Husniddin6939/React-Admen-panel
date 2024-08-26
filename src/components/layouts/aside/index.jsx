import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import {navigation} from "@mocks/navigation"

const index = () => {
    return (
        <aside className="w-[15%] min-h-screen">
            <nav>
                <ul className="list">
                    {
                       navigation.length && navigation.map((item)=>
                       <li key={item}>
                            
                            <NavLink to={item.path} className="item">
                            <i className={`bi ${item.icon}`}></i>  <span>{item.name}</span>
                                </NavLink></li>) 
                    }
                </ul>
                <Link to="/login">
                    <button className="px-3 py-1 absolute bottom-[100px] left-4 rounded-md bg-[#F7F8FA] border block mx-auto">Exit</button>
                </Link>
            </nav>
        </aside>
    );
};

export default index;