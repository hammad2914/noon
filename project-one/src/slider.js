import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


function slider() {

    return (
       <div style={{display:'flex'}}>
         <div id="carouselExampleIndicators" class="carousel slide" style={{width:'70vw'}}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/81981ffd-8789-43a2-90f1-e07f6603430c.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/48c051cc-142e-48f6-aae0-5a380b7179c8.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/0dfabc82-efb6-4f59-a390-e489b986da0c.jpg" class="d-block w-100" alt="..." />
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div style={{width:'30vw',display:'flex'}}>
            <img width={205} src='https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png'/>
            <img width={205} src='https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png' />
        </div>
       </div>
    )

}

export default slider;