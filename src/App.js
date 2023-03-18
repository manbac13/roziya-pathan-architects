
import './App.css';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';

function App() {

  const [background, setBackground] = useState("#fff");
  const [color, setColor] = useState("#121212");
  const [iconBack, setIconBack] = useState("#121212");
  const [iconColor, setIconColor] = useState("#fff")

  const sendEmail = () => {
    window.location = "mailto:rpa.workspace@gmail.com"
  }

  const openInstagram = () => {
    window.open("https://www.instagram.com/ar_roziya/?igshid=ZmZhODViOGI%3D")
  }

  const toggleTheme = () => {
    if (background === "#fff" && color === "#121212") {
      setBackground("#121212");
      setColor("#fff");
      setIconBack("#fff");
      setIconColor("#121212")
    }
    else {
      setBackground("#fff");
      setColor("#121212");
      setIconBack("#121212");
      setIconColor("#fff")
    }
  }

  document.body.style = `background-color: ${background}`

  return (
    <>
    
        <table align='center'>
          <tbody>
            <tr height="43.5%" >
              <td valign='bottom'>
                <div onClick={toggleTheme} style={{ color: color }} className='title_name' align="center">ROZIYA PATHAN ARCHITECTS</div>
              </td>
            </tr>

            <tr height="32%">
              <td valign='bottom'>
                <div className='services' align="center">
                  <div className="service_name first_service" style={{ color: color }}>architecture</div>
                  <div className="service_name bar" style={{ color: color }}>|</div>
                  <div className="service_name " style={{ color: color }}>interiors</div>
                  <div className="service_name bar" style={{ color: color }}>|</div>
                  <div className="service_name " style={{ color: color }}>design</div>
                  <div className="service_name bar" style={{ color: color }}>|</div>
                  <div className="service_name" style={{ color: color }}>landscape</div>
                </div>
              </td>
            </tr>

            <tr height="20%">
              <td valign='top'>
                <div className='info_div' align="center" style={{ color: color }}>
                  <div >mail: rpa.workspace@gmail.com</div>
                  <div className='info_flexing' >
                    <div>
                      India: lane-B1, shanti nagar, kharadi, pune- 411014,
                    </div>

                    <div>
                      &nbsp;# 91 9975109810
                    </div>
                  </div>
                </div>
                <div className='contacts' align="center">
                  <a href='tel:9975109810'>
                    <PhoneIcon className="contact_icon" sx={{ color: iconColor, backgroundColor: iconBack, borderRadius: "50%", padding: "2px", marginInline: "7px", cursor: "pointer" }} />
                  </a>

                  <MailIcon onClick={sendEmail} sx={{ color: iconColor, backgroundColor: iconBack, borderRadius: "50%", padding: "2px", marginInline: "7px", cursor: "pointer" }} />
                  <a href='https://www.instagram.com/ar_roziya/?igshid=ZmZhODViOGI%3D' target="_blank">
                    <InstagramIcon sx={{ color: iconColor, backgroundColor: iconBack, borderRadius: "50%", padding: "2px", marginInline: "7px", cursor: "pointer" }} />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

    </>
  );
}

export default App;
