import Typography from '@mui/material/Typography';

function topdeals() {


    return (
        <div className='main' style={{ display: 'flex', justifyContent: 'space-evenly',marginTop:'10px',backgroundColor:'whitesmoke' }}>
            <div style={{ width: '32vw',backgroundColor:'white' }}>
                <Typography sx={{ fontWeight: '700', color: 'black',padding:'7px 20px',textAlign:'left' }}>
                    More Reasons to Shop
                </Typography>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <img width={190} height={190}style={{marginBottom:'15px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png' />
                    <img width={190} height={190}style={{marginBottom:'15px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png' />
                    <img width={190} height={190}style={{marginBottom:'15px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/d60b456a-31f4-4ce8-a090-766dae3738f0.png' />
                    <img width={190} height={190} src='https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png' />
                </div>
            </div>
            <div style={{  width: '32vw', backgroundColor: '#fff0be' }}>
                <Typography sx={{ fontWeight: '800', color: 'black',padding:'7px 20px',textAlign:'left' }}>MEGA DEALS OF THE DAY</Typography>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                <img width={190} height={190}style={{marginBottom:'15px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/d4e20692-d629-4822-8a29-b1ef3d557d12.png' />
                <img width={190} height={190}style={{marginBottom:'15px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/998d4bc9-7e29-40a3-8faf-a89505387029.png' />
                <img width={190} height={190}style={{marginBottom:'15px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/8a2236d1-d4f1-4816-874a-160172929de3.png' />
                <img width={190} height={190}style={{marginBottom:'15px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/bda99deb-b7cf-46fd-8c71-05e084f4a600.png' />
                </div>
            </div>
            <div style={{ display: 'block', width: '32vw',backgroundColor:'white' }}>
                <Typography sx={{ fontWeight: '700', color: 'black',padding:'7px 20px',textAlign:'left' }}>In focus</Typography>
                <img src='https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png' />
                <img style={{padding:'10px 0px'}} src='https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png' />
            </div>
        </div>
    )
}

export default topdeals;