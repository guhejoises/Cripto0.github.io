import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function CVCard() {
  return (
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
            experiencia trabajando como desarrollador de software para sistemas
            de internet, APIs rest y aplicaciones para variados sistemas
            operativos, con manejo de multiples lenguajes y bases de datos (SQL
            y NoSQL) con gran interes en el desarrollo de aplicaciones para
            distintos dispositivos (desktop y mobile). Dedicado y comprometido
            con el trabajo individual y en equipo. Comprometido a aprender y
            actualizar conocimientos requeridos para cada trabajo.
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
              <li>Bases de datos.</li>
              <li>Programación orientada a objetos.</li>
              <li>Estructura de datos.</li>
              <li>Algoritmia y programación estructurada.</li>
              <li>Sistemas operativos.</li>
              <li>Tecnologías para la web.</li>
              <li>Teoría computacional.</li>
              <li>Análisis y diseño orientado a objetos.</li>
              <li>Diseño de sistemas distribuidos</li>
              <li>Ingenieria de software</li>
            </ul>
          </ul>
        </ul>
      </div>
      <div className="cv-section">
        <Typography
          variant="h5"
          style={{
            marginBottom: "16px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          <WorkIcon
            style={{
              fontSize: "1.2em",
              verticalAlign: "middle",
              marginRight: "8px",
              color: "#1976D2",
            }}
          />
          EXPERIENCIA LABORAL
        </Typography>
        <ul>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold", color: "#1976D2" }}
          >
            Practicante Auxiliar en zona de sistemas | Conalep Temixco
          </Typography>
          <ul>
            <ul
              style={{
                paddingLeft: "16px",
                marginBottom: "16px",
                listStyleType: "disc",
              }}
            >
              <li>Atención a usuarios del sistema para gestión de datos.</li>
              <li>Mantenimiento de equipo de cómputo básico.</li>
              <li>Registros de solicitudes y resolución de peticiones.</li>
            </ul>
          </ul>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold", color: "#1976D2" }}
          >
            Carpintero | Negocio propio
          </Typography>
          <Typography variant="subtitle2" style={{ marginBottom: "8px" }}>
            AGO 2016 - ABR 2023
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "16px" }}>
            De familia de carpinteros he aprendido a trabajar desde temprana
            edad la madera y a realizar proyectos pequeños y grandes. Para la
            realización de mi trabajo he desarrollado:
          </Typography>
          <ul>
            <ul
              style={{
                paddingLeft: "16px",
                marginBottom: "16px",
                listStyleType: "disc",
              }}
            >
              <li>
                Capacidad para tratar con proyectos en un tiempo establecido.
              </li>
              <li>Manejo de herramientas.</li>
              <li>Realización de diseños de muebles.</li>
              <li>
                Habilidad para planeación de procesos por tiempo definido.
              </li>
              <li>
                Concentración al realizar tareas que requieren más cuidado.
              </li>
            </ul>
          </ul>
        </ul>
        <ul>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold", color: "#1976D2" }}
          >
            Programador FullStack | WebDeCero
          </Typography>
          <Typography variant="subtitle2" style={{ marginBottom: "8px" }}>
            Abril 2023 - Presente
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "16px" }}>
            Desarrollo como programador en los lenguajes Java (nivel
            intermedio), C# (principiante), PHP (intermedio), Dart
            (principiante), JavaScript (intermedio) y TypeScript (principiante)
            con frameworks Laravel (PHP), Flutter (Dart), Spring (Java), Spring
            Boot (Java) y Material UI (JavaScript).
          </Typography>
          <ul>
            <ul
              style={{
                paddingLeft: "16px",
                marginBottom: "16px",
                listStyleType: "disc",
              }}
            >
              <li>
                Manejo de manejadores de paquetes Maven (Java), Composer (PHP),
                NuGet (C#) y npm (JavaScript).
              </li>
              <li>Gestión de tareas con la herramienta Asana.</li>
              <li>
                Manejo de librerías de comunicación para WebSockets y Socket.IO.
              </li>
              <li>Manejo de librerías nativas para los lenguajes Java y C#.</li>
              <li>Diseño y modelado de diagramas.</li>
              <li>Diseño de wireframes.</li>
              <li>
                Comunicación unidireccional (REST) y bidireccional (sockets).
              </li>
              <li>
                Configuración y gestión de servidores basados en sistemas
                operativos Linux con herramienta Plesk, configuración de
                conexiones SSH y SFTP.
              </li>
              <li>
                Configuración y conexión de bases de datos SQL (MariaDB y MySQL)
                y NoSQL (MongoDB).
              </li>
            </ul>
          </ul>

          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            Proyectos
          </Typography>
          <Typography variant="subtitle1" style={{ fontWeight: "italic" }}>
            Biometrics:
          </Typography>
          <Typography variant="subtitle2" style={{ marginBottom: "8px" }}>
            Fecha - Fecha
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "16px" }}>
            Lideré el desarrollo como programador back-end de un proyecto
            enfocado en el control de asistencia y reconocimiento de individuos
            mediante datos biométricos. Implementé métodos de pago y
            suscripciones para los usuarios. Utilicé Laravel y PHP para la
            creación de la API, Java para la extracción de datos biométricos, C#
            para la comunicación con terminales de pago, y Flutter para el
            desarrollo del front-end junto con React. Configuré APIs para la
            gestión de solicitudes, administración de bases de datos y
            conexiones de programas mediante peticiones REST y comunicación
            bidireccional con sockets. Además, participé en el diseño y modelado
            de diagramas, diseño de wireframes y la configuración y gestión de
            servidores basados en sistemas operativos Linux con herramienta
            Plesk.
          </Typography>
        </ul>
      </div>

      <div className="cv-section">
        <Typography
          variant="h5"
          style={{
            marginBottom: "16px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          <TrendingUpIcon
            style={{
              fontSize: "1.2em",
              verticalAlign: "middle",
              marginRight: "8px",
              color: "#1976D2",
            }}
          />
          HABILIDADES Y CONOCIMIENTOS ADICIONALES
        </Typography>
        <ul>
          <Typography variant="subtitle1">Lenguajes:</Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>Java (Intermedio)</li>
              <li>C# (Principiante)</li>
              <li>PHP (Intermedio)</li>
              <li>Dart (Principiante)</li>
              <li>JavaScript (Intermedio)</li>
              <li>TypeScript (Principiante)</li>
            </ul>
          </ul>
          <Typography variant="subtitle1">Frameworks:</Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>Laravel (PHP)</li>
              <li>Flutter (Dart)</li>
              <li>Spring (Java)</li>
              <li>Spring Boot (Java)</li>
              <li>Material-UI (JavaScript)</li>
            </ul>
          </ul>
          <Typography variant="subtitle1">Manejadores de paquetes:</Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>Maven (Java)</li>
              <li>Composer (PHP)</li>
              <li>NuGet (C#)</li>
              <li>npm (JavaScript)</li>
            </ul>
          </ul>
          <Typography variant="subtitle1">Gestión de tareas:</Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>Asana</li>
            </ul>
          </ul>
          <Typography variant="subtitle1">
            Librerías de comunicación:
          </Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>WebSocket</li>
              <li>Socket.IO</li>
            </ul>
          </ul>
          <Typography variant="subtitle1">Librerías nativas:</Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </ul>
          <Typography variant="subtitle1">
            Diseño y modelado de diagramas:
          </Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>Diagrama de clases</li>
              <li>Diagrama de casos de uso</li>
              <li>Diagrama de Gantt</li>
              <li>Diagrama de flujo</li>
              <li>Diagrama de objetos</li>
              <li>Deployment Diagram</li>
              <li>Component Diagram</li>
            </ul>
          </ul>
          <Typography variant="subtitle1">Otros:</Typography>
          <ul>
            <ul style={{ paddingLeft: "16px", marginBottom: "8px" }}>
              <li>Diseño de wireframes</li>
              <li>
                Comunicación unidireccional (REST) y bidireccional (sockets)
              </li>
              <li>
                Configuración y gestión de servidores: Sistemas operativos Linux
                con Plesk, Configuración de conexiones SSH y SFPT
              </li>
              <li>
                Configuración y conexión de bases de datos: SQL (MariaDB y
                MySQL), NoSQL (MongoDB)
              </li>
              <li>Configuración de firewall y CORS para servidores</li>
            </ul>
          </ul>
        </ul>
      </div>

      <div className="cv-section">
        <Typography
          variant="h5"
          style={{
            marginBottom: "16px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          <StarIcon
            style={{
              fontSize: "1.2em",
              verticalAlign: "middle",
              marginRight: "8px",
              color: "#1976D2",
            }}
          />
          APTITUDES
        </Typography>
        <ul>
          <ul
            style={{
              paddingLeft: "16px",
              marginBottom: "16px",
              listStyleType: "disc",
            }}
          >
            <li>
              <span className="cv-icon"></span> Compromiso
            </li>
            <li>
              <span className="cv-icon"></span> Trabajo en equipo
            </li>
            <li>
              <span className="cv-icon"></span> Proactividad
            </li>
            <li>
              <span className="cv-icon"></span> Adaptabilidad
            </li>
            <li>
              <span className="cv-icon"></span> Trabajo bajo presión
            </li>
            <li>
              <span className="cv-icon"></span> Resolución de problemas
            </li>
            <li>
              <span className="cv-icon"></span> Capacidad de análisis
            </li>
          </ul>
        </ul>
      </div>
    </CardContent>
  );
}

export default CVCard;
