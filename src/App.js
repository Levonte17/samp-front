//SASS
import './index.scss';

import { auth } from './Firebase';
import { useState, useEffect } from 'react';

//COMPONENTS
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() =>{
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
  }, []);
  return (
    <div className="App">
      
      <Nav user={user} />
      <Main user={user} />
      <Footer />
      
    </div>
  );
}

export default App;
