import React, { useState } from 'react';
import image from '../images/image1.jpeg';

function DetailProduit_respo() {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('#000000'); // noir par défaut

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
            <div className="left-section">

                <br /><br />
                <h5>Produit</h5>
                <br />
                <h6>Club : Mines IT</h6>
                <br />
                <img src={image} alt="Image" style={{ width: '500px' }} />


            </div>
            <div className="right-section">
                <br /><br /><br /><br /><br /><br />
                <p style={{ width: '500px' }}>Le parfum est une composition olfactive complexe
                    qui peut évoquer des souvenirs, des émotions ou des humeurs.
                    Chaque parfum est unique, avec sa propre combinaison de
                    notes de tête, de cœur et de fond. Les notes de tête
                    sont les premières odeurs perçues lorsque le parfum est appliqué,
                    les notes de cœur sont les notes principales
                </p>

                <div>
                    <p>Taille :</p>
                    <div className="size-buttons">
                        <button className={`size-button ${selectedSize === 'S' ? 'selected-size' : ''}`} onClick={() => handleSizeClick('S')}>S</button>
                        <button className={`size-button ${selectedSize === 'M' ? 'selected-size' : ''}`} onClick={() => handleSizeClick('M')}>M</button>
                        <button className={`size-button ${selectedSize === 'L' ? 'selected-size' : ''}`} onClick={() => handleSizeClick('L')}>L</button>
                    </div>
                </div>
                <br />

                <p>Produits restants : 10</p>


                <p style={{ whiteSpace: 'pre' }}>Prix interne : 50 DH                                   Prix externe : 500 DH</p>

                <button className='modifier'>Modifier</button>
                <button className='supprimer'>Supprimer</button>
            </div>
        </div>
    )
}

export default DetailProduit_respo