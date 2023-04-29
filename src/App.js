
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
import Admin_accueil from './component/Admin_accueil';

import Profil from './component/Profil';
import Historique from './component/Historique';
import SignIn from './component/Interfaces/SingIn';
import SignUp from './component/Interfaces/SignUp';
import InterfaceClinets from './component/Interfaces/InterfaceClients';
import InterfaceClub from './component/Interfaces/InterfaceClub';





function App() {
  return (
    <div className="App">

     
      {/* partie jihane */}
           {/* <Header />
       <Admin_compte /> 
       <Admin_accueil /> */}

       {/* partie ezzakel */}
       {/* <Header />
         <Profil />   
        <Historique />  */}

      {/* PARTIE YASSINE AHOUFI */}
      {/*<Header />
      <DetailProduit />
      <DetailEvenement />
      <DetailProduit_respo /> 
      {/*END PART YASSINE AHOUFI */}

      {/*Partie Anass Rharib*/}

      {/* <Paiement/>
      <Header />
      <Achats /> */}
      {/*fin */}

      {/* partie billihi
      <SignIn /> 
       <SignUp /> 
       <Header />
      <InterfaceClinets />
       <InterfaceClub />  */}
          
       
           




    </div>
    
  );
}

export default App;

