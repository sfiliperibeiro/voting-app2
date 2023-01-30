import Product from "./Product";

const ProductsList = ({productList}) =>{

    const handleUpVote = () =>{};

    return (
        <div className="ui unstackable items">
            {productList.length === 0 && <p>No products available</p>}
            {productList.map((product) =>{
                return <Product product={product} handleUpVote ={handleUpVote}
                 />
            })}
            
        </div>
    );
};

export default ProductsList;