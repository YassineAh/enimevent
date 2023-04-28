import React, { useState } from 'react';
import image from '../images/image1.jpeg';

function DetailProduit() {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('#000000'); // noir par défaut

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };
    const buttonStyle = {
        backgroundColor: "#DCDEEF",
        color: "#787B9A",
      };
    
      const selectedButtonStyle = {
        backgroundColor: 'darkblue',
      };
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
            <div className="left-section">

                <br  /><br />
                <p style={{color: "#787B9A" ,fontWeight: "bold", fontSize: "1.2em"}}>Produit</p>
                <br />
                <h6 ><span style={{fontWeight: "bold",color: "#B1B4C9"}}>Club:</span> <span style={{color: "#B1B4C9"}}>Mines IT</span> </h6>
                <br />
                <img src={image} alt="Image" style={{ width: '500px' }} />


            </div>
            <div className="right-section">
                <br /><br /><br /><br /><br /><br />
                <p style={{ width: '500px', background:"#787B9A",color: "white", width: "450px", height: "150px"}}>Le parfum est une composition olfactive complexe
                    qui peut évoquer des souvenirs, des émotions ou des humeurs.
                    Chaque parfum est unique, avec sa propre combinaison de
                    notes de tête, de cœur et de fond. Les notes de tête
                    sont les premières odeurs perçues lorsque le parfum est appliqué,
                    les notes de cœur sont les notes principales
                </p>

                <div>
                    <p>Taille :</p>
                    <div className="size-buttons">
                        <button  className={`size-button ${selectedSize === 'S' ? 'selected-size' : ''}`} onClick={() => handleSizeClick('S')} >S</button>
                        <button className={`size-button ${selectedSize === 'M' ? 'selected-size' : ''}`} onClick={() => handleSizeClick('M')}>M</button>
                        <button className={`size-button ${selectedSize === 'L' ? 'selected-size' : ''}`} onClick={() => handleSizeClick('L')}>L</button>
                    </div>
                </div>
                <br />

                <p>Produits restants : 10</p>


                <p>Prix : 50€</p>
                <button className='acheter'>Procéder au paiement</button>
            </div>
        </div>
    );
}

export default DetailProduit;
