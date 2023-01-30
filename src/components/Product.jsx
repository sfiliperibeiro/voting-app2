const Product = ({product, handleUpVote}) =>{

    const {
        id,
        title,
        description,
        url,
        votes,
        submitterAvatarUrl: avatar, //alteração do nome da const
        productImageUrl
    } = product;

    return(

        <div className="item">
        <div className="image">
            <img src={productImageUrl} alt="Product" />
        </div>

        <div className="middle aligned content">
            <div className="header">
                <a onClick={handleUpVote}>
                    <i className="large caret down icon"></i>
                </a>
                {votes}
                <a onClick={handleUpVote}>
                    <i className="large caret up icon"></i>
                </a>
            </div>

            <div className="description">
                <a href={url}>{title}</a>
                <p>{description}</p>
            </div>

            <div className="extra">
                <span>Submitted by: </span>
                <img src={avatar} alt="Avatar" className="ui avatar image" />
            </div>
        </div>
     </div>

    );


    
};

export default Product;