
import MealListAll from "./MeailListAll";
 // Fixed typo from MeailListAll to MealListAll
 import i1 from '../../assets/images/i5.png'
import Headersingle from "../Headersingle/Headersingle";
const MealListAllPage = () => {

    return (
        <>
           <Headersingle title='Portfolio - Grids' bgImages={i1}/>
            <div>

             <MealListAll/> 
            </div>
        </>
    );
}

export default MealListAllPage;
