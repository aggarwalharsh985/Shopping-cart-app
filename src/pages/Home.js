import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);


    async function fetchProductData() {
        setLoading(true);
        try {
          
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log(data);
            setPosts(data);

        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchProductData()
    },[]);
    


    return(
        <div>
            {
                loading ? 
                <div className="flex justify-center items-center w-full h-screen ">
                    <Spinner />
                </div>:
                posts.length>0 ?
                (
                    <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto   min-h-[60vh] mt-4 ">
                        {
                        posts.map((post) => (
                        <Product key = {post.id} post={post}/>
                        ))
                    }
                    </div>
                ):
                (
                    <div className="flex justify-center items-center">
                        <p>No data found</p>
                    </div>
                )
            }
        </div>
    );
};
export default Home ;