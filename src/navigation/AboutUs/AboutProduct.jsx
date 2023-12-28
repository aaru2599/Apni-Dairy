import React, { useEffect, useState } from 'react'

const AboutProduct = () => {
    const [products, setProducts] = useState([])
    const styles = {
        hoverStyle: {
          color: 'grey',
          backgroundColor:"white",
          hover: { color: 'blue !important' },
        }
      };

    useEffect(() => {
        fetch('src/utils/aboutproduct.json')
            .then(response => response.json())
            .then(data => (setProducts(data.aboutProduct)));
        console.log("products", products);

        // console.log(products);
    }, [])
    console.log("newproducts", products);
    return (
        <div style={{ height: "90vh", backgroundImage: "url(https://sktperfectdemo.com/themepack/dairy/wp-content/uploads/2020/06/sec2-bg.png) " }}>
            <div className='text-center my-5'>
                <div style={{ paddingTop: "5rem" }}>
                    <div className='fs-5  fw-bolder text-info-emphasis '>What we </div>
                    <h1 className='fw-bold'>Produce</h1>
                </div>
            </div>
            <div className=' text-center  '>
                <div className='d-flex justify-content-center gap-4'>
                    {
                        products.map((product, index) =>
                            <div style={styles.hoverStyle} key={index}>

                                <div><img src={product.pImage} alt="" /></div>
                                <h3 style={{ fontFamily: "Playfair Display Sans-serif", fontWeight: "bold" }}>{product.pName}</h3>
                            </div>
                        )

                    }
                </div>
            </div>
            {/* <div >
             
            </div> */}
        </div>
    )
}

export default AboutProduct