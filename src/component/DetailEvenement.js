import React, { useState } from 'react';
import image from '../images/image2.jpeg';

function DetailEvenement() {
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
                <h5>Evenement</h5>
                <br />
                <h6>Club : Mines IT</h6>
                <br />
                <img  alt="Image" style={{ width: '500px' }} />


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


                <br />

                <p>Tickets restants : 100</p>


                <p>Prix : 100 DH</p>
                <button className='acheter'>Procéder au paiement</button>
            </div>
        </div>
    )
}

export default DetailEvenement