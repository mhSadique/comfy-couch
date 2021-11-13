import React, { useState } from 'react';
import '../../../styles/AddProduct.css';
const AddProduct = () => {

    const initialState = {
        name: '',
        img: '',
        price: '',
        descriptionShort: '',
        dimensions: [],
        descriptionDetails: [],
    };

    const [productInfo, setProductInfo] = useState(initialState);


    const handleAddNewProduct = (e) => {
        const productInfoRaw = productInfo;
        const demensionsString = productInfoRaw.dimensions;
        const descriptionDetailsString = productInfoRaw.descriptionDetails;
        const dimensionsArray = demensionsString.split(';')
        const descriptionDetailsArray = descriptionDetailsString.split(';');

        const newProductInfo = {
            ...productInfoRaw,
            dimensions: dimensionsArray,
            descriptionDetails: descriptionDetailsArray
        };

        fetch('https://morning-harbor-64345.herokuapp.com/save-new-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                alert(data);
                setProductInfo({
                    name: '',
                    img: '',
                    price: '',
                    descriptionShort: '',
                    dimensions: [],
                    descriptionDetails: [],
                })
            })

        e.preventDefault();
    };


    const onInputChange = (e) => {
        const oldPackageInfo = productInfo;
        const fieldName = e.target.name;
        const newFieldValue = e.target.value;
        const newPackageInfo = { ...oldPackageInfo, [fieldName]: newFieldValue };
        setProductInfo(newPackageInfo);
    };

    return (
        <div className="new-package-form">
            <h1>Add New Product</h1>

            <form onSubmit={handleAddNewProduct}>
                <label htmlFor="name">Name: </label><br />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={productInfo.name}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Image URL: </label><br />
                <input
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    value={productInfo.img}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Price: </label><br />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={productInfo.price}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Short Description: </label><br />
                <input
                    type="text"
                    name="descriptionShort"
                    placeholder="Short Description"
                    value={productInfo.descriptionShort}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Dimensions: </label><br />
                <input
                    type="text"
                    name="dimensions"
                    placeholder="Put a semi-colon ( ; ) between each dimension detail"
                    value={productInfo.dimensions}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Product Details: </label><br />
                <input
                    type="text"
                    name="descriptionDetails"
                    placeholder="Put a semi-colon ( ; ) between each detail"
                    value={productInfo.descriptionDetails}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <button type="submit">Add New Product</button>

            </form>

        </div>
    );
};

export default AddProduct;