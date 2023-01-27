import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


function slider1() {

    return (
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style={{padding:'10px 0px'}}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8429c515-26fc-4661-a8a8-7453682483b9.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/ac73d559-9560-4d40-9e0a-61670d1814a3.png" class="d-block w-100" alt="..."/>
          </div>
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        
       
    )

}

export default slider1;