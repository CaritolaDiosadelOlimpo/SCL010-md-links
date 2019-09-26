# Markdown Links
Es un leguaje de marcado ligero muy popular entre desarrolladores, muy utilizado en  plataformas que manejan texto plano en la web (GitHub, foros, blogs, ...). ... Estos archivos Markdown normalmente contienen links (vínculos), y desgraciadamente a veces estos links están rotos o ya no son válidos

## Introducción
Este es un proyecto que busca resolver las necesidades de encontrar, leer, estraer y dar los estados de los vinculos, creando un software que desde su nacimiento que satisface la necesidad del usuario.

# Instalacion 

npm i cari-md-links   /debes ejecutar este comando en tu terminal para instalar las                               dependencias de la aplicación. 

#Dependencias Necesarias 

    "commander": "^3.0.0",  Libreria utilizada para agregar opciones al paquete.

    "eslint": "^6.2.1",     

    "eslint-plugin-jest": "^22.15.2",
    
    "fetch": "^1.1.0",

    "file-system": "^2.2.2",

    "filehound": "^1.17.3", Libreria que encuentra los archivos con extension .md dentro del                                  directorio. 

    "jest": "^24.9.0",

    "markdown-link": "^0.1.1",

    "markdown-link-extractor": "^1.2.1",
    
    "node-fetch": "^2.6.0",
    
    "test": "^0.6.0",
    
    "validador-mdlinks": "^1.0.2"

    Módulo commander.js. Esta fue utilizada para agregar opciones al paquete de manera que usuario pudiera pasarlas de manera más amigable y tener una guía de lo que hace el programa Utilizando danisalermi/md-links -help
Módulo chalk. La misma se utilizò para colocar colores a las respuestas del paquete por consola. Ejemplo: Estad-sticas-colores
Módulo filehound, para poder encontrar todos los archivos con extensiones permitidas para archivos markdown dentro de un directorio.
Módulo fetch. Para poder hacer las consultas al servidor http de los links encontrados.

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
  `jest` libreria necesaria para ejecutar los test unitarios


##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.



### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.
Esta opcion nos devuelve los estados de links encontrados dentro del directorio 
 
codigo 200 : estado Ok, el Link se encuentra funcional
codigo 500 : estado ERR, el link presenta un error del servidor 

codigo 404 : estado de error interno
codigo 300 : error de redireccionamiento, error de proxy


##### `--stats`

Opcion que entregas las estadisticas de los links, que pueden ser de tres tipos:

+links Totales 
+links Rotos 
+links Unicos (links que no se repiten al llamarlos en la pagina)



También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.


### `README.md`

Para correr y ver los estados de los links debes ejecutar el comando desde la terminal 
Ej: $ md-links README.md -v (validate)
    $ md-links README.md -v -s (stats)



