import { useState, useEffect } from "react";


const Main = ({  newProductNr, setNewProductNr, setCartEmpty, productNr, price, newPrice, setNewPrice, setProductNr, handleCartClose }) => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 720);
    const [XLScreen, setXLScreen] = useState(window.innerWidth >= 1440);
    var [imgNr, setImgNr] = useState(1);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(require(`../images/image-product-1.jpg`));


    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 720);
            setXLScreen(window.innerWidth >= 1440);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const handleLightbox = (e) =>{
        setLightboxOpen(!lightboxOpen);   
    }

    useEffect(() => {       
        if(lightboxOpen){
            const imgLightbox = document.querySelector('.img-lightbox');
            imgLightbox.style.width = "100vw";
            imgLightbox.style.height = "100vh";
        }

    }, [lightboxOpen]);
    
    


    const handlePriceUp = (e) => {
        setProductNr(prev => {          
                const newNr = prev + 1;
                return newNr;
        
            
        });
        
        
       
    }




    const handlePriceDown = (e) => {
         setProductNr(prev => {
            if (prev > 1) {
                const newNr = prev - 1;
                return newNr;
            }
            else {                
                return prev;
            }

        }); 

    }

    

    const handleImgNext = (e) => {
        const productImg = document.querySelector('.product-img');
        const lightboxProductImg = document.querySelector('.product-img-lightbox'); 

        setImgNr(prevImgNr => {
            const newImgNr = prevImgNr + 1;
            if (newImgNr > 4) {
                return 1;
            }
            return newImgNr;
        });

        if (lightboxOpen){
            lightboxProductImg.src = require(`../images/image-product-${imgNr}.jpg`);
        }
        else{
            productImg.src = require(`../images/image-product-${imgNr}.jpg`);
        }    
     }

    const handleImgPrev = (e) => {
        const productImg = document.querySelector('.product-img');
        const lightboxProductImg = document.querySelector('.product-img-lightbox');
        setImgNr(prevImgNr => {
            const newImgNr = prevImgNr - 1;
            if (newImgNr < 1) {
                return 4;
            }
            return newImgNr;
        });

        if (lightboxOpen){
            lightboxProductImg.src = require(`../images/image-product-${imgNr}.jpg`);
        }
        else{
            productImg.src = require(`../images/image-product-${imgNr}.jpg`);
        }
    }
    useEffect(()=>{
        setNewPrice((newProductNr-1)*price)
    },productNr);
    

    const handlePurchase = (e) => {
        setCartEmpty(false);
        setNewPrice(current =>  ((productNr)*price));
        setNewProductNr(productNr);
    }

    


    const handleThumbnail = (e) => {
        const productImg = document.querySelector('.product-img');
        const lightboxProductImg = document.querySelector('.product-img-lightbox');

        const thumbnailNr = e.target.id;
      
        if(lightboxOpen){
            lightboxProductImg.src = require(`../images/image-product-${thumbnailNr}.jpg`); 
        }
        else{
            productImg.src = require(`../images/image-product-${thumbnailNr}.jpg`);
        }
        
         setCurrentImg(require(`../images/image-product-${thumbnailNr}.jpg`));

    }
    return (
        <main>
            <div className="main-container" onClick={handleCartClose}>
            <div className="product-container">
                <div className="product-img-container">
                    {!isLargeScreen &&
                        <div className="arrow-container">
                            <div className="arrow arrow-prev" onClick={handleImgPrev}>
                                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd" /></svg>
                            </div>
                            <div className="arrow arrow-next" onClick={handleImgNext}>
                                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd" /></svg>
                            </div>
                        </div>}
                    <img className="product-img" onClick={() => {if(isLargeScreen){handleLightbox()}}} src={require("../images/image-product-1.jpg")} alt="product-1" />
                    {isLargeScreen &&
                        <div className="thumbnail-container">
                            <img className="product-img thumbnail thumbnail-img-1" id="1"  onClick={handleThumbnail} src={require("../images/image-product-1-thumbnail.jpg")} alt="product-1" />
                            <img className="product-img thumbnail thumbnail-img-2" id="2"  onClick={handleThumbnail} src={require("../images/image-product-2-thumbnail.jpg")} alt="product-1" />
                            <img className="product-img thumbnail thumbnail-img-3" id="3"  onClick={handleThumbnail} src={require("../images/image-product-3-thumbnail.jpg")} alt="product-1" />
                            <img className="product-img thumbnail thumbnail-img-4" id="4"  onClick={handleThumbnail} src={require("../images/image-product-4-thumbnail.jpg")} alt="product-1" />

                        </div>
                    }

                    {isLargeScreen && lightboxOpen &&
                        <div className="lightbox img-lightbox">
                            <div className="lightbox-img-box">
                            <svg className=" lightbox-close" onClick={handleLightbox}  width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>
                            <div className="thumbnail-container lightbox-thumbnail-container">
                            <img className="product-img thumbnail thumbnail-img-1" id="1"  onClick={handleThumbnail} src={require("../images/image-product-1-thumbnail.jpg")} alt="product-1" />
                            <img className="product-img thumbnail thumbnail-img-2" id="2"  onClick={handleThumbnail} src={require("../images/image-product-2-thumbnail.jpg")} alt="product-1" />
                            <img className="product-img thumbnail thumbnail-img-3" id="3"  onClick={handleThumbnail} src={require("../images/image-product-3-thumbnail.jpg")} alt="product-1" />
                            <img className="product-img thumbnail thumbnail-img-4" id="4"  onClick={handleThumbnail} src={require("../images/image-product-4-thumbnail.jpg")} alt="product-1" />

                        </div>

                            </div>
                            <img className="product-img product-img-lightbox" id="product-img-lightbox" src={currentImg} alt="product-1" />
                            <div className="arrow-container">
                                <div className="arrow arrow-prev" onClick={handleImgPrev}>
                                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd" /></svg>
                                </div>
                                <div className="arrow arrow-next" onClick={handleImgNext}>
                                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd" /></svg>
                                </div>
                            </div>
                        </div>

                    }

                </div>

                <div className="product-info-container">
                    <div className="text-container">
                        <h3 className="company-label">Sneaker Company</h3>
                        <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                        <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                    </div>
                    <div className="price-box">
                        <h2 className="current-price">${price}.00</h2>
                        <h3 className="sale">50%</h3>
                        <h3 className="prev-price">$250.00</h3>

                    </div>
                    <div className="buy-product-container">
                        <div className="buy-product">
                            <div className="buy-icon icon-minus" onClick={handlePriceDown}></div>
                            { <p className="number-of-products">{productNr}</p> }
                            {}

                            <div className="buy-icon icon-plus"  onClick={handlePriceUp}></div>

                        </div>
                        <button className="btn main-btn" type="submit" onClick={handlePurchase}>
                            <svg className="cart-icon" width="22 " height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" /></svg>
                            Add to cart
                        </button>
                    </div>
                </div>
                

            </div>

        </div>

        </main>

    );
}

export default Main;
