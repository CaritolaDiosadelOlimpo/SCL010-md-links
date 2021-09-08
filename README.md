# __***MD LINKS***__

Es un leguaje de marcado ligero muy popular entre desarrolladores, muy utilizado en  plataformas que manejan texto plano en la web (GitHub, foros, blogs, ...). ... Estos archivos Markdown normalmente contienen links (vínculos), y desgraciadamente a veces estos links están rotos o ya no son válidos

## Introducción
MD LINKS es una librería ejecutable que busca resolver las necesidades de encontrar, leer, extraer y dar los estados de vínculos. 
Exploré el lado back-end con Node JS para este proyecto.


## _Instalacion_ 


### npm i cari-md-links
    
  https://www.npmjs.com/package/cari-md-links 
  
  *Para descargar las dependencias de la App debes ejecutar este comando en tu terminal.*




## Dependencias Necesarias 

#### 

  ```fix 
  async,    axios,    commander,  eslint,    eslint-plugin-jestesm,    fetch,   file-system,   filehound,   jest, markdown-link,   markdown-link-extractor,   read,    test,    testing,    validador-mdlinks 
```
<br/>

**Módulo commander.js**  Utilizada para agregar opciones al paquete de manera que el usuario pueda usarlas de forma más amigable y así tener una guía de lo que hace                          el programa Utilizando danisalermi/md-links -help 

**Módulo chalk** La misma se utilizó para colocar colores a las respuestas del paquete por consola. Ejemplo: Estad-sticas-colores

**Módulo filehound**  Ayuda a encontrar todos los archivos con extensiones permitidas para archivos markdown dentro de un directorio.

**Módulo fetch**  Hace las consultas al servidor http de los links encontrados.


### Archivos del proyecto

- `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
- `index.js`: Desde este archivo debes exportar una función (`mdLinks`).
- `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
- `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
- `.eslintrc` con configuración para linter. Este archivo no
  se debe cambiar.
- `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
- `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu inplementación debe pasar estos tets.
  `jest` librería  necesaria para ejecutar los test unitarios


#### Opciones 
##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para 
averiguar si el link funciona o no. Si el link resulta en una redirección a una 
URL que responde ok, entonces consideraremos el link como ok. 
Esta opción nos devuelve los estados de links encontrados dentro del directorio.  
 
código 200: estado Ok, el Link se encuentra funcional 
código 500: estado ERR, el link presenta un error del servidor  
código 404: estado de error interno 
código 300: error de redireccionamiento, error de proxy 

<img src="https://i.ibb.co/4tQyzWh/estado-Links.png" alt="estado-Links" border="0">

##### `--stats`
Opción que entregas las estadísticas de los links, que pueden ser de tres tipos: 

+links Totales 
+links Rotos 
+links Únicos (links que no se repiten al llamarlos en la pagina)


<img src="https://i.ibb.co/stckFvN/Captura-de-pantalla-de-2019-09-26-01-48-21.png" alt="Captura-de-pantalla-de-2019-09-26-01-48-21" border="0">



También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación. Al ejecutar ambas opciones en las estadísticas se agregan los Links rotos.

<img src="https://i.ibb.co/r6ZPrVZ/Captura-de-pantalla-de-2019-09-26-02-18-42.png" alt="Captura-de-pantalla-de-2019-09-26-02-18-42" border="0">

### `README.md`

Para correr y ver los estados de los links debes ejecutar el comando desde la terminal 
Ej: $ md-links README.md -v (validate)
    $ md-links README.md -v -s (stats)



