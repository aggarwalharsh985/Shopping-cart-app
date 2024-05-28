import React from "react";


const Product = ({post}) => {
    return (
        <div>
            <div>
                {post.title}
            </div>
            <div>
                {post.description}
            </div>
            <div>
                <img alt="" src={post.image} />
            </div>
            <div>
                {post.price}
            </div>
            <button>
                {
                    true? (<p>Remove item</p>):(<p>Add to cart</p>)
                }
            </button>
        </div>
    )
}
export default Product