import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import CVCard from './CVcard';

function CV() {
  const componentRef = React.useRef();

  const handleDownload = () => {
    const pdfUrl = 'cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div style={{ height: '100vh' }}>
        {/* Contenido de tu CV aquí */}
        <Card
          style={{
            width: '80%',
            maxWidth: 900,
            margin: 'auto',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            borderRadius: '8px',
            backgroundColor: 'white',
            
          }}
          
        >
          <div ref={componentRef} style={{
            padding: '40px',
          }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent
              style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography style={{ fontSize: '40px', marginBottom: '16px' }}>
                JOSUE ISRAEL ESTEBAN
              </Typography>
              <Typography
                style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}
              >
                {' '}
                GUDIÑO HERNANDEZ
              </Typography>
            </CardContent>
            <CardContent
              style={{
                flex: '2',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 100,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginBottom: '20px',
                }}
              >
                <Typography style={{ paddingRight: 5 }}>
                  Juan N Almonte #8, Col. presidentes de México, Iztapalapa. CDMX{' '}
                </Typography>
                <LocationOnIcon style={{ marginRight: '8px' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginBottom: '20px',
                }}
              >
                <Typography style={{ paddingRight: 5 }}>5582987912 </Typography>
                <PhoneIcon style={{ marginRight: '8px' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginBottom: '20px',
                }}
              >
                <Typography style={{ paddingRight: 5 }}>guhejoises@gmail.com</Typography>
                <EmailIcon style={{ marginRight: '8px' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginBottom: '20px',
                }}
              >
                <Typography style={{ paddingRight: 5 }}>
                  Josue Israel Esteban Gudino Hernandez{' '}
                </Typography>
                <FacebookIcon style={{ marginRight: '8px' }} />
              </div>
            </CardContent>
          </div>
          <CVCard />
          </div>
        </Card>
      </div>
      <button
        onClick={handleDownload}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#2196f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: '1000',
        }}
      >
        Descargar
      </button>

    </>
  );
}

export default CV;
