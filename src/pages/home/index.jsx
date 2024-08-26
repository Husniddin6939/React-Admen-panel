import { useEffect, useState } from "react";
import "./style.scss";
import { postAPI } from "@service/posts";




const index = () => {
  const [posts, setPosts]=useState([]);
  const [load, setLoad]=useState(true)
  
  useEffect(()=>{
    async function fetchData(){
      const response = await postAPI.getAll();
      console.log(response.data);
      
    }
    fetchData()
      
  }, [])




  return (
    <div>
      <ul>
        {/* {
          posts && posts.map(post=>(
            <li key={post.id} className="border p-2 m-2">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={(()=>getPostsById(post.id))} className="px-3 py-2 bg-slate-200 activ:bg-slate-400">getById</button>
            </li>
          ))
        } */}
      </ul>
    </div>
  );
};

export default index;