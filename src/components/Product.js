import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add , remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";



const Product = ({post}) => {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    
    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item add to Cart");
    }
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item remove from Cart");
    }
    
    return (
        <div 
            className=" flex flex-col items-center justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] border
            hover:scale-110  transition duration-300 ease-in gap-3 p-4 m-4 rounded-xl hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] 
            ">
            <div className="">
                <p
                    className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                    {post.title}
                </p>
            </div>
            <div>
                <p
                    className="text-gray-400 font-normal text-sm text-left">
                    {post.description.split(" ").slice(0,10).join(" ") + "..."}
                </p>
            </div>
            <div className="">
                <img alt="" src={post.image} />
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-semibold">
                        ${post.price}
                    </p>
                </div>
                
                {
                    cart.some((p) => p.id === post.id) ? 
                    (<button
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                        text-[12px] p-1 px-3 uppercase 
                        hover:bg-gray-700
                        hover:text-white transition duration-300 ease-in"
                        onClick={removeFromCart}>Remove from cart
                    </button>):

                    (<button 
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                        text-[12px] p-1 px-3 uppercase 
                        hover:bg-gray-700
                        hover:text-white transition duration-300 ease-in"
                        onClick={addToCart}>
                            Add to  cart
                    </button>)
                }
                
            </div>
        </div>
    )
}
export default Product