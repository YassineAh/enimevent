
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';
import Header from './component/Header';
import DetailProduit from './component/DetailProduit';
import DetailEvenement from './component/DetailEvenement';
import DetailProduit_respo from './component/DetailProduit_respo';

import Paiement from './component/Paiement'
import Achats from './component/Achats';
import Admin_compte from './component/Admin_compte';
import SignIn from './component/Interfaces/SingIn'
import SignUp from './component/Interfaces/SignUp'
import InterfaceClinets from './component/Interfaces/InterfaceClients'
import InterfaceClub from './component/Interfaces/InterfaceClub'



function App() {
  return (
    <div className="App">

      {/* <Header/>
      <DetailProduit/>

      <Admin_compte /> */}



      {/* PART YASSINE AHOUFI */}
      {/*<Header />
      <DetailProduit />
      <DetailEvenement />
      <DetailProduit_respo /> 
      {/*END PART YASSINE AHOUFI */}

      {/*Partie Anass Rharib*/}
      {/* <Paiement/>
      <br /><br />
      <Achats /> */}
      {/*fin */}
      <SignIn />
      <SignUp />
      <InterfaceClinets />
      <InterfaceClub />






    </div>
    
  );
}

export default App;

