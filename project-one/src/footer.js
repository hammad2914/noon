import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';



function footer() {

    return (

        <div style={{paddingBottom:'30px'}}>
            <table style={{ width: '100%', fontSize: '13px', fontWeight: '500', marginTop: '20px' }}>
                <tr style={{ fontWeight: '800' }}>
                    <th>ELECTRONICS</th>
                    <th>FASHION</th>
                    <th>HOME & KITCHEN</th>
                    <th>BEAUTY</th>
                    <th>BABY & TOYS</th>
                    <th>TOP BRANDS</th>
                    <th>DAILY GROCERIES</th>
                </tr>
                <tr>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                </tr>
                <tr>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                </tr>
                <tr>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                </tr>
                <tr>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                </tr>
                <tr>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                </tr>
                <tr>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                </tr>
                <tr>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td></td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td>Noon Shopping</td>
                    <td></td>
                </tr>


            </table>

                <Typography sx={{fontWeight:'600',marginTop:'40px',textTransform:'uppercase'}}>Connect with us</Typography>
                <Button sx={{backgroundColor:'yellow',color:'black',marginLeft:'5px',borderRadius:'48%',padding:'10px ',}} >< FacebookIcon/></Button>
                <Button sx={{backgroundColor:'yellow',color:'black',marginLeft:'5px',borderRadius:'48%',padding:'10px ',}} >< TwitterIcon/></Button>
                <Button sx={{backgroundColor:'yellow',color:'black',marginLeft:'5px',borderRadius:'48%',padding:'10px ',}} >< InstagramIcon/></Button>
                <Button sx={{backgroundColor:'yellow',color:'black',marginLeft:'5px',borderRadius:'48%',padding:'10px ',}} >< LinkedInIcon/></Button>
        
        </div>
    )

}

export default footer;