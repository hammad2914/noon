import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Typography from '@mui/material/Typography';



function Category(){


    return(
        <div style={{display:'flex',justifyContent:'space-around',padding:'15px 15px ', height:'30px'}}>
            <Typography variant='p' sx={{fontWeight:'700',color:'blue',position:'relative',bottom:'4px',fontSize:'15px'}}>ALL CATEGORIES <ArrowDropDownOutlinedIcon fontSize='large' sx={{position:'relative',}}/></Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>ELECTRONICS</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>MEN</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>WOMEN</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>HOME</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>BEAUTY & FREGURANCE</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>BABY & TOYS</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>SPORTS</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>BESTSELLERS</Typography>
            <Typography variant='p' sx={{fontWeight:'700',padding:'0px 15px',fontSize:'15px'}}>SALE ON NOON</Typography>
        </div>
    )
}

export default Category;