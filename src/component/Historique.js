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
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      // Faites ici votre traitement de recherche, en utilisant la valeur de searchTerm
      console.log(`Recherche en cours avec le terme : ${searchTerm}`);
    };
    return (<div>
            <h5>Produit</h5>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Rechercher..." />
            <button style={{ marginLeft:'20px' }} onClick={handleSearch} >Rechercher</button>
            </div>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-arround', textAlign: 'left' }}>
            <div className="left-section">

                <br /><br />
            
                
                <br />
                <h6>Club : Mines IT</h6>
                <br />
                <img src={image} alt="Image" style={{ width: '300px' }} />


            </div>
            <div className="right-section" style={{ marginLeft:'30px' }}>
                <br /><br /><br /><br /><br /><br />
                <p style={{ width: '500px' }}>Le parfum est une composition olfactive complexe
                    qui peut évoquer des souvenirs, des émotions ou des humeurs.
                    
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

                <div className="container" style={{ display: 'flex', justifyContent: 'space-arround', textAlign: 'left' }}>
                <p>Prix : 50€</p>
                
                <p  style={{ marginLeft:'200px' }}>Date d'achat : 20/03/2023</p>
                
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default DetailProduit;
