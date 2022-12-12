//SASS
import './index.scss';

import { auth } from './Firebase';
import { useState, useEffect } from 'react';

//COMPONENTS
import Nav from './components/Nav';
import User from './components/User';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() =>{
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
  }, []);
  return (
    <div className="App">
      
      <Nav />
      <User user={user} />
      <Main user={user} />
      <Footer />
      
    </div>
  );
}

export default App;
