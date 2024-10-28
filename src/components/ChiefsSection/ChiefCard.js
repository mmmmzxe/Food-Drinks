
import Slider from 'react-slick/lib/slider';
import './Chief.scss'

export default function ChiefCard({chief}) {
  
    return (
      
        <div className="chief-card">
           <div className='imag'>
           <img src={chief.img} alt="" />
           </div>
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
              
            </div>
        </div>
    )
}