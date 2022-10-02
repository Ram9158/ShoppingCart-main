import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const product = useSelector(state => state.allProduct.products)
    const List = product.map((Item) => {
        const { id, title, image, price, category } = Item
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>

                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">${price}</div>
                                <div className="meta">{category}</div>
                            </div>

                        </div>

                    </div>
                </Link>


            </div>

        )

    })
    return (
        <>
            {List}
        </>
    )

}

export default ProductComponent
