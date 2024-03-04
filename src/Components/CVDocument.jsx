import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

function CVDocument() {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: 20,
            fontSize: 12,
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,
        },
        header: {
            fontSize: 20,
            marginBottom: 10,
            fontWeight: 'bold',
        },
        text: {
            marginBottom: 10,
        },
    });

    return (
        <PDFDownloadLink document={
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.header}>JOSUE ISRAEL ESTEBAN GUDIÑO HERNANDEZ</Text>
                        <Text style={styles.text}>Juan N Almonte #8, Col. presidentes de México, Iztapalapa. CDMX</Text>
                        <Text style={styles.text}>5582987912</Text>
                        <Text style={styles.text}>guhejoises@gmail.com</Text>
                        <Text style={styles.text}>Josue Israel Esteban Gudino Hernandez</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.header}>PERFIL PROFESIONAL</Text>
                        <Text style={styles.text}>
                            Estudiante de Ingeniería en sistemas computacionales, con gran interés en acceder al mercado laboral para aplicar de una manera práctica los conocimientos aprendidos y por aprender. En busca de una oportunidad para adquirir experiencia profesional en el campo de diseño y desarrollo de páginas Web. Sin experiencia profesional, pero con grandes deseos de adquirir nuevas habilidades/conocimientos. Comprometido a aprender y actualizar conocimientos requeridos para cada trabajo.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.header}>EDUCACIÓN</Text>
                        <Text style={styles.text}>Técnico en informática. | Conalep Temixco</Text>
                        <Text style={styles.text}>Estudiante de ingeniería en sistemas computacionales | Escuela Superior de Computo (ESCOM IPN)</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.header}>EXPERIENCIA LABORAL</Text>
                        <Text style={styles.text}>Practicante Auxiliar en zona de sistemas | Conalep Temixco</Text>
                        <Text style={styles.text}>Carpintero | Negocio propio</Text>
                        <Text style={styles.text}>Programador FullStack | WebDeCero</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.header}>HABILIDADES Y CONOCIMIENTOS ADICIONALES</Text>
                        <Text style={styles.text}>Lenguajes: Java (Intermedio), C# (Principiante), PHP (Intermedio), Dart (Principiante), JavaScript (Intermedio), TypeScript (Principiante)</Text>
                        <Text style={styles.text}>Frameworks: Laravel (PHP), Flutter (Dart), Spring (Java), Spring Boot (Java), Material-UI (JavaScript)</Text>
                        <Text style={styles.text}>Manejadores de paquetes: Maven (Java), Composer (PHP), NuGet (C#), npm (JavaScript)</Text>
                        <Text style={styles.text}>Gestión de tareas: Asana</Text>
                        <Text style={styles.text}>Librerías de comunicación: WebSocket, Socket.IO</Text>
                        <Text style={styles.text}>Librerías nativas: Java, C#</Text>
                        <Text style={styles.text}>Diseño y modelado de diagramas: Diagrama de clases, Diagrama de casos de uso, Diagrama de Gantt, Diagrama de flujo, Diagrama de objetos, Deployment Diagram, Component Diagram</Text>
                        <Text style={styles.text}>Otros: Diseño de wireframes, Comunicación unidireccional (REST) y bidireccional (sockets), Configuración y gestión de servidores: Sistemas operativos Linux con Plesk, Configuración de conexiones SSH y SFPT, Configuración y conexión de bases de datos: SQL (MariaDB y MySQL), NoSQL (MongoDB), Configuración de firewall y CORS para servidores</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.header}>APTITUDES</Text>
                        <Text style={styles.text}>Compromiso, Trabajo en equipo, Proactividad, Adaptabilidad, Trabajo bajo presión, Resolución de problemas, Capacidad de análisis</Text>
                    </View>
                </Page>
            </Document>
        } fileName="cv.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar PDF')}
        </PDFDownloadLink>
    );
}

export default CVDocument;
