import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useReactToPrint } from "react-to-print";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import { List, ListItem, ListItemText } from "@mui/material";

function AboutMe() {
  const componentRef = React.useRef();

  return (
    <>
      <Card
        style={{
          width: "90%",
          margin: "auto",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <div
          ref={componentRef}
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CardContent
              style={{
                flex: "2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography style={{ fontSize: "70px", marginBottom: "18px" }}>
                JOSUE ISRAEL ESTEBAN
              </Typography>
              <Typography
                style={{
                  fontSize: "70px",
                  fontWeight: "bold",
                  marginBottom: "18px",
                }}
              >
                {" "}
                GUDIÑO HERNANDEZ
              </Typography>
            </CardContent>
            <CardContent
              style={{
                flex: "2",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="Perfil.jpg"
                  alt="Imagen"
                  style={{
                    width: "200px",
                    height: "auto",
                    float: "right",
                    padding: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <Typography style={{ paddingRight: 5 }}>
                  Juan N Almonte #8, Col. presidentes de México, Iztapalapa.
                  CDMX{" "}
                </Typography>
                <LocationOnIcon style={{ marginRight: "8px" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <a href="https://wa.me/+525582987912">
                  <Typography style={{ paddingRight: 5 }}>
                    5582987912{" "}
                  </Typography>
                </a>
                <PhoneIcon style={{ marginRight: "8px" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <Typography style={{ paddingRight: 5 }}>
                  guhejoises@gmail.com
                </Typography>
                <EmailIcon style={{ marginRight: "8px" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <a href="https://www.facebook.com/GudisGH/">
                  <Typography style={{ paddingRight: 5 }}>
                    Josue Israel Esteban Gudino Hernandez{" "}
                  </Typography>
                </a>
                <FacebookIcon style={{ marginRight: "8px" }} />
              </div>
            </CardContent>
          </div>
          <CardContent>
            <div className="cv-header">
              <Typography
                variant="h5"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                <PersonIcon
                  style={{
                    fontSize: "1.2em",
                    verticalAlign: "middle",
                    marginRight: "8px",
                    color: "#1976D2",
                  }}
                />
                PERFIL PROFESIONAL
              </Typography>
              <ul>
                <Typography>
                  Estudiante de Ingeniería en sistemas computacionales, con
                  experiencia trabajando como desarrollador de software para
                  sistemas de internet, APIs rest y aplicaciones para variados
                  sistemas operativos, con manejo de multiples lenguajes y bases
                  de datos (SQL y NoSQL) con gran interes en el desarrollo de
                  aplicaciones para distintos dispositivos (desktop y mobile).
                  Dedicado y comprometido con el trabajo individual y en equipo.
                  Comprometido a aprender y actualizar conocimientos requeridos
                  para cada trabajo.
                </Typography>
              </ul>
            </div>
            <div className="cv-section">
              <br></br>
              <Typography
                variant="h5"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                <BookIcon
                  style={{
                    fontSize: "1.2em",
                    verticalAlign: "middle",
                    marginRight: "8px",
                    color: "#1976D2",
                  }}
                />
                EDUCACIÓN
              </Typography>
              <ul>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bold",
                    color: "#1976D2",
                    marginBottom: "8px",
                  }}
                >
                  Técnico en informática. | Conalep Temixco
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "16px" }}>
                  Donde aprendí conocimiento técnico en:
                </Typography>
                <ul>
                  <ul
                    style={{
                      paddingLeft: "16px",
                      marginBottom: "16px",
                      listStyleType: "disc",
                    }}
                  >
                    <li>Bases de datos.</li>
                    <li>Programación orientada a objetos.</li>
                    <li>Programación estructurada.</li>
                    <li>Mantenimiento de cómputo básico.</li>
                    <li>Redes de computadoras.</li>
                    <li>Diseño y elaboración de páginas web básicas.</li>
                    <li>Programación básica.</li>
                    <li>Manejo de sistemas operativos.</li>
                  </ul>
                </ul>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", color: "#1976D2" }}
                >
                  Estudiante de ingeniería en sistemas computacionales | Escuela
                  Superior de Computo (ESCOM IPN)
                </Typography>
                <Typography variant="subtitle1" style={{ marginBottom: "8px" }}>
                  AGOSTO 2017 - PRESENTE
                </Typography>
                <Typography variant="body1">
                  Estudiante de ingeniería en sistemas. Durante la carrera he
                  concluido los cursos de:
                </Typography>
                <ul>
                  <ul
                    style={{
                      paddingLeft: "16px",
                      marginBottom: "16px",
                      listStyleType: "disc",
                    }}
                  >
                    <li>ANALISIS VECTORIAL</li>
                    <li>CALCULO</li>
                    <li>MATEMATICAS DISCRETAS</li>
                    <li>ALGORITMIA Y PROGRAMACION ESTRUCTURADA</li>
                    <li>FISICA</li>
                    <li>INGENIERIA ETICA Y SOCIEDAD</li>
                    <li>ECUACIONES DIFERENCIALES</li>
                    <li>ALGEBRA LINEAL</li>
                    <li>CALCULO APLICADO</li>
                    <li>ESTRUCTURAS DE DATOS</li>
                    <li>COMUNICACION ORAL Y ESCRITA</li>
                    <li>ANALISIS FUNDAMENTAL DE CIRCUITOS</li>
                    <li>MATEMATICAS AVANZADAS PARA LA INGENIERIA</li>
                    <li>FUNDAMENTOS ECONOMICOS</li>
                    <li>FUNDAMENTOS DE DISEÑO DIGITAL</li>
                    <li>TEORIA COMPUTACIONAL</li>
                    <li>BASES DE DATOS</li>
                    <li>PROGRAMACION ORIENTADA A OBJETOS</li>
                    <li>ELECTRONICA ANALOGICA</li>
                    <li>REDES DE COMPUTADORAS</li>
                    <li>DISEÑO DE SISTEMAS DIGITALES</li>
                    <li>PROBABILIDAD Y ESTADISTICA</li>
                    <li>SISTEMAS OPERATIVOS</li>
                    <li>ANALISIS Y DISEÑO ORIENTADO A OBJETOS</li>
                    <li>TECNOLOGIAS PARA LA WEB</li>
                    <li>ADMINISTRACION FINANCIERA</li>
                    <li>ARQUITECTURA DE COMPUTADORAS</li>
                    <li>COMPILADORES</li>
                    <li>INGENIERIA DE SOFTWARE</li>
                    <li>INSTRUMENTACION</li>
                    <li>TEORIA DE COMUNICACIONES Y SEÑALES</li>
                    <li>APLICACIONES PARA COMUNICACIONES EN RED</li>
                    <li>INTRODUCCION A LOS MICROCONTROLADORES</li>
                    <li>ANALISIS DE ALGORITMOS</li>
                    <li>WEB APPLICATION DEVELOPMENT</li>
                    <li>IT GOVERNANCE</li>
                    <li>METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES</li>
                    <li>LIDERAZGO Y DESARROLLO PROFESIONAL</li>
                    <li>ADMINISTRACION DE SERVICIOS EN RED</li>
                    <li>DESARROLLO DE SISTEMAS DISTRIBUIDOS</li>
                  </ul>
                </ul>
              </ul>
            </div>
            <div className="cv-section">
              <br></br>
              <Typography
                variant="h5"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                <BookIcon
                  style={{
                    fontSize: "1.2em",
                    verticalAlign: "middle",
                    marginRight: "8px",
                    color: "#1976D2",
                  }}
                />
                Hobbies
              </Typography>
              <ul>
                <li>Carpinteria/Lauderia</li>
                <Typography>
                  De familia de carpinteros y lauderos, disfruto creando muebles
                  y restaurando instrumentos musicales.
                </Typography>
                <img
                  src="Carpinteria.jpeg"
                  alt="Imagen"
                  style={{
                    width: "200px",
                    height: "auto",
                    padding: "10px",
                  }}
                />
                <li>Musica (guitarra)</li>
                <Typography>
                  De familia amante de la musica aprendi a tocar la guitarra.
                  Actualmete soy miembro de la tuna de la Escuela Superior de
                  Computo
                </Typography>
                <img
                  src="Musica.jpeg"
                  alt="Imagen"
                  style={{
                    width: "200px",
                    height: "auto",
                    padding: "10px",
                  }}
                />
                <li>Videojuegos</li>
                <Typography>
                  Com todo buen informatico el gusto por los videojuegos vive en
                  mi
                </Typography>
                <img
                  src="Videojuegos.jpeg"
                  alt="Imagen"
                  style={{
                    width: "200px",
                    height: "auto",
                    padding: "10px",
                  }}
                />
              </ul>
            </div>
            <div>
              <Typography
                variant="h5"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                <BookIcon
                  style={{
                    fontSize: "1.2em",
                    verticalAlign: "middle",
                    marginRight: "8px",
                    color: "#1976D2",
                  }}
                />
                Criptografia
              </Typography>
              <Typography variant="h5">Algoritmo RSA</Typography>
              <Typography variant="body1">
                RSA es un algoritmo de cifrado asimétrico ampliamente utilizado
                para la seguridad de datos en internet. Fue inventado en 1977
                por Ron Rivest, Adi Shamir y Leonard Adleman, quienes lo
                nombraron por sus iniciales. RSA se basa en la dificultad
                computacional de factorizar números enteros grandes en sus dos
                factores primos, que es la base de la seguridad del algoritmo.
              </Typography>
              <Typography variant="h5">Whitfield Diffie</Typography>
              <Typography variant="body1">
                Whitfield Diffie es un criptógrafo y experto en seguridad
                informática estadounidense. Es conocido por su papel en el
                desarrollo de la criptografía de clave pública y por ser uno de
                los pioneros en el campo de la seguridad informática. Junto con
                Martin Hellman, Diffie desarrolló el concepto de intercambio de
                clave de Diffie-Hellman, que permitió a dos partes comunicarse
                de forma segura sobre un canal inseguro sin compartir una clave
                previamente acordada.
              </Typography>
              <Typography variant="h5">Evento importante</Typography>
              <Typography variant="body1">
                En 1997, el algoritmo RSA fue desafiado por la llegada de un
                método de factorización más eficiente, el método de los cuerpos
                de números algebraicos de Lenstra, Lenstra y Lovász (LLL). Este
                evento mostró la importancia de seguir desarrollando algoritmos
                de cifrado más seguros y eficientes para mantener la seguridad
                de la información en un mundo digital en constante evolución.
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
}

export default AboutMe;
