import Typography from "@mui/material/Typography";
import DevicesIcon from "@mui/icons-material/Devices";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Fab from "@mui/material/Fab";
// import './css/Services.css'
import 'aos/dist/aos.css';
import DrawIcon from '@mui/icons-material/Draw';
import CardStyle from "./Styles/CardStyle";
export default function Cardcontent() {
  return (
    <>
   <CardStyle>
        <Fab
          style={{
            backgroundColor: "#593ea3",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DevicesIcon  />
        </Fab>
        <Typography variant="h6" style={{ color: 'white', marginBottom: "10px", fontFamily:'Helvetica, Arial'}}>
        Attention to Detail
        </Typography>
        <Typography variant="body1" style={{ color: 'white',fontFamily:'Helvetica, Arial' }}>
       Diligent attention to detail ensures high-quality results.
        </Typography>
        </CardStyle>
        <CardStyle>
                  <Fab
          style={{
            backgroundColor: "#593ea3",
            color: "white",
            marginBottom: "20px",
          }}
        >
        <ScreenSearchDesktopIcon />
        </Fab>
        <Typography variant="h6" style={{ color: 'white', marginBottom: "10px", fontFamily:'Helvetica, Arial'}}>
        Time Management
        </Typography>
        <Typography variant="body1" style={{ color: 'white',fontFamily:'Helvetica, Arial' }}>
        I effectively manage my time to deliver high-quality results efficiently.
        </Typography>
        </CardStyle>
        <CardStyle>
        <Fab style={{ backgroundColor: '#593ea3', color:'white', marginBottom: '20px' }}>
                  <DrawIcon />
                  </Fab>
                  <Typography variant='h6' style={{ color: 'white' , marginBottom: '10px' ,fontFamily:'Helvetica, Arial'}}>
                  Adaptability
                  </Typography>

<Typography variant='body1' style={{  color: 'white',fontFamily:'Helvetica, Arial'  }}>
I adapt to changing project needs easily, ensuring success in dynamic environments.
      </Typography>

        </CardStyle>
        </>
  );
}


