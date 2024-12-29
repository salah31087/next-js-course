import React from 'react'


export default function Product({ params }) {
    //   const product = products.find(product => product.id === params.productId)
    const id = params.productId

    return (
        <div>
            <p>product details {id}</p>
        </div>
    )
}
