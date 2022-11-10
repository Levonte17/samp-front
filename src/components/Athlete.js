import aseven from '../assets/aseven.png';
import asix from '../assets/asix.png';
import afive from '../assets/afive.png';
import afour from '../assets/afour.png';
import athree from '../assets/athree.png';
import atwo from '../assets/atwo.png';
import a from '../assets/a.png';


function Athlete(props) {
    
    return(
        <div className="athlete">
<h1> 
    OUR ATHLETES
</h1>
       
<div className="athlete-display">

    <div className="athlete2">
        <img src={atwo} />
    </div>

     <div className="athlete3">
        <img src={a} />
    </div>
    <div className="athlete4">
        <img src={afour} />
    </div>

     <div className="athlete4">
        <img src={athree} />
    </div>
    <div className="athlete5">
        <img src={asix} />
    </div>

     <div className="athlete6">
        <img src={afive} />
    </div>


    <div className="athlete7">
        <img src={asix} />
    </div>

     <div className="athlete8">
        <img src={aseven} />
    </div>

    </div>
</div>
    )
};

export default Athlete;