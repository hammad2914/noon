
import "./App.css";
import Category from "./category";
import NavBar from "./navbar";
import Banner from "./banner.avif";
import Imagecat from "./cat";
import Slider from "./slider";
import Megadeals from "./megadeals"
import Card from "./card.js";
import Slider1 from "./slider1";
import { Button } from '@mui/material';
import {Typography} from "@mui/material";
import Footer from "./footer.js";



function App() {
  const list1 = [
    {
      image: 'https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif',
      details: 'iPhone 14 Pro Max 256GB Deep Purple 5G ',
      price: '5199.00',
      rating: '4.2',
      sales: '146'
    },
    {
      image: 'https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif',
      details: 'PlayStation 5 Console With Controller',
      price: '2089.00',
      rating: '4.0',
      sales: '886'
    },
    {
      image: 'https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif',
      details: 'Bluetooth Full Touch Call Smartwatch Black',
      price: '24.00',
      rating: '3.2',
      sales: '4146'
    },
    {
      image: 'https://f.nooncdn.com/products/tr:n-t_240/v1664110823/N39674788A_1.avif',
      details: '24V Electric Drifting Scooter 68.5X54X21cm',
      price: '309.00',
      rating: '3.9',
      sales: '1462'
    },
    {
      image: 'https://f.nooncdn.com/products/tr:n-t_240/v1653053749/N52535496A_1.avif',
      details: 'Galaxy S22 Ultra Dual SIM 12GB RAM 256GB ',
      price: '3099.00',
      rating: '4.1',
      sales: '96'
    },
    {
      image: 'https://f.nooncdn.com/products/tr:n-t_240/v1669221709/N30107462A_1.avif',
      details: 'Grand Theft Auto V - (Intl Version) PS4/PS5',
      price: '60.00',
      rating: '4.6',
      sales: '9644'
    }
  ]
  

  return (
    <div className="App">
      <NavBar />
      <Category />
      <img style={{ marginTop: '20px' }} width={'100%'} src={Banner} />
      <Slider />
      <Imagecat />
      <Megadeals />
      <h4 style={{ padding: '30px 0px 10px 20px', color: '#3f3e40', textAlign: 'left', fontWeight: '600' }}>Recommended for you</h4>
      <div className="card-container" style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', backgroundColor: '#dceaee'
      }}>
        {list1.map((x, i) => {
          return <Card image={x.image} details={x.details} price={'$' + x.price} rating={x.rating} sales={'(' + x.sales + ')'}></Card>
        })}
      </div>

      <div className="deals" style={{ backgroundColor: '#fff0be', paddingBottom: '8px' }}>
        <h2 style={{ fontWeight: '800', padding: '7px' }}>DEALS ONLY ON NOON</h2>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
          <img width={320} src="https://f.nooncdn.com/mpcms/EN0001/assets/9fbda093-4eb3-4b5f-b4b8-71ba21fefd66.png" />
          <img width={320} src="https://f.nooncdn.com/mpcms/EN0001/assets/80726706-0b9d-427a-8131-04ffab6fa7a3.png" />
          <img width={320} src="https://f.nooncdn.com/mpcms/EN0001/assets/18e6dbd1-8920-40c3-a1ea-a1c206d2847e.png" />
          <img width={320} src="https://f.nooncdn.com/mpcms/EN0001/assets/3ea0eb71-8eaf-4cd5-9e9d-45382d7ba8ad.png" />
        </div>
      </div>
      <Slider1 />
      <img style={{ width: '96vw' }} src="https://f.nooncdn.com/mpcms/EN0001/assets/7f9ef85c-e278-440f-9dda-a2873a872a5e.jpg" />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4 style={{ padding: '30px 0px 10px 20px', color: '#3f3e40', textAlign: 'left', fontWeight: '600' }}>Treanding Deals in Electronics</h4>
        <Button variant="outlined" size="small" sx={{ color: 'black', padding: '0px 15px', height: '40px', borderColor: 'black', fontWeight: '600', margin: '25px 15px 0px 0px' }}>VIEW ALL</Button>
      </div>
      <div className="card-container" style={{
        display: 'flex',
        flexWrap: 'wrap', justifyContent: 'space-evenly'
      }}>
        {list1.map((x, i) => {
          return <Card image={x.image} details={x.details} price={'$' + x.price} rating={x.rating} sales={'(' + x.sales + ')'}></Card>
        })}
      </div>

      <img style={{ width: '96vw' }} src="https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif" />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4 style={{ padding: '30px 0px 10px 20px', color: '#3f3e40', textAlign: 'left', fontWeight: '600' }}>Clearence deals</h4>
        <Button variant="outlined" size="small" sx={{ color: 'black', padding: '0px 15px', height: '40px', borderColor: 'black', fontWeight: '600', margin: '25px 15px 0px 0px' }}>VIEW ALL</Button>
      </div>
      <div className="card-container" style={{
        display: 'flex',
        flexWrap: 'wrap', justifyContent: 'space-evenly'
      }}>
        {list1.map((x, i) => {
          return <Card image={x.image} details={x.details} price={'$' + x.price} rating={x.rating} sales={'(' + x.sales + ')'}></Card>
        })}
      </div>

      <div className="Dicount-deals" style={{ backgroundColor: '#cccfd1', paddingBottom: '20px' }}>

        <h1 style={{ color: 'yellow', fontWeight: '800', backgroundColor: 'black', textAlign: 'left', padding: '5px 30px' }}>50-80% OFF</h1>
        <Button variant="contained" sx={{ fontSize: '18px', fontWeight: '600', backgroundColor: 'white', color: 'black', padding: '7px 25px', position: 'relative', float: 'right', bottom: '32px', right: '30px' }}>SHOP NOW</Button>
        <h2 style={{ textAlign: 'left', fontWeight: '800', color: 'black', padding: '0px 30px' }}>WOMEN'S FASHION</h2>
        <div className="cards" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0002/assets/49e75f3c-9a36-415b-b8d7-e8c8ae5d3935.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0002/assets/d90bded8-b5c1-4568-8fde-954fbd45209e.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0002/assets/aa68e7fc-af1d-4505-b259-c07df4a2e17f.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0002/assets/082497d2-c025-4899-8e18-be47058122e7.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0002/assets/c6ccf853-57a2-4db3-8504-a52106b033bf.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0002/assets/fcbe5805-4060-4bad-bc3e-e2c4fd793ae8.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0002/assets/2f62d319-46bd-4edb-aee4-0a9cbc179983.png" />
        </div>

      </div>
      <div className="Dicount-deals" style={{ backgroundColor: '#cccfd1', paddingBottom: '20px' }}>

        <h1 style={{ color: 'yellow', fontWeight: '800', backgroundColor: 'black', textAlign: 'left', padding: '5px 30px' }}>50-80% OFF</h1>
        <Button variant="contained" sx={{ fontSize: '18px', fontWeight: '600', backgroundColor: 'white', color: 'black', padding: '7px 25px', position: 'relative', float: 'right', bottom: '32px', right: '30px' }}>SHOP NOW</Button>
        <h2 style={{ textAlign: 'left', fontWeight: '800', color: 'black', padding: '0px 30px' }}>MEN'S FASHION</h2>
        <div className="cards" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/7d28bb5c-d91f-4502-b697-821b5122c602.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/2f8fb241-c795-4fa1-bf9c-8e324aa13947.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/292c46ea-5dd6-45e2-9d67-1d859c2a096e.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/083d80cd-97f2-4e02-99eb-cca3249dfd02.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/10af1000-28ba-4a13-b7b3-09193aa9f7c1.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/2dab9287-80b7-4283-8d7e-af19cbda00b0.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/4a37271a-8874-4f00-ad4f-c7024963078a.png" />
        </div>

      </div>

      <div className="Dicount-deals" style={{ backgroundColor: '#cccfd1', paddingBottom: '20px' }}>

        <h1 style={{ color: 'yellow', fontWeight: '800', backgroundColor: 'black', textAlign: 'left', padding: '5px 30px' }}>50-80% OFF</h1>
        <Button variant="contained" sx={{ fontSize: '18px', fontWeight: '600', backgroundColor: 'white', color: 'black', padding: '7px 25px', position: 'relative', float: 'right', bottom: '32px', right: '30px' }}>SHOP NOW</Button>
        <h2 style={{ textAlign: 'left', fontWeight: '800', color: 'black', padding: '0px 30px' }}>KID'S FASHION</h2>
        <div className="cards" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/2a31766f-66b2-47ee-bbd6-fde9f51f7a57.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/d10bc7dd-e6b6-49c7-a284-df840480856d.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/1c2c6d3d-b143-4ab9-a360-db57985041c1.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/f915d216-aa0f-4290-a129-e3e6986f00f8.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/132ba8ff-8caa-47b0-9640-c46c94ce379b.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/ebea4373-9a70-405e-80b1-0c85425e6ae5.png" />
          <img width={180} src="https://f.nooncdn.com/mpcms/EN0001/assets/26f2807b-d8a8-4494-869c-2eb4e559287f.png" />
        </div>

      </div>

      <img style={{ width: '96vw' }} src="https://f.nooncdn.com/mpcms/EN0001/assets/6e50943a-e936-495c-873c-86feef76f8f0.png" />

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <img style={{ width: '96vw' }} src="https://f.nooncdn.com/mpcms/EN0001/assets/139f8735-8378-436c-a658-9e2f2ea7ebba.gif" />

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>

      <div className="sub-category">
        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
        <Typography  sx={{fontWeight:'700',fontSize:'30px',color: 'black'}}>Electronics</Typography>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',fontWeight:'700',fontSize:'18px',borderRadius:'0px',padding:'8px 30px'}}>VIEW ALL</Button>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png'/>
            <img src='https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png'/>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png"/>
        </div>
      </div>
      <img style={{ width: '96vw',marginTop:'10px' }} src="https://f.nooncdn.com/mpcms/EN0001/assets/8e4d7b89-40cf-4e18-a38d-c4f74927f5d4.jpg" />

      <img style={{ width: '50vw',marginTop:'5px' }} src="https://tpc.googlesyndication.com/simgad/3025859249776391002" />

        <Footer/>








    </div>


  );
}

export default App;

