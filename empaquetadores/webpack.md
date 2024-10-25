# Webpack

Creamos el archivo _package.json_
```npm init```

Instalamos las dependencias de desarrollo
```npm install webpack webpack-cli -D```

Creamos una estructura de archivos:
__/public/index.html__
__/src/index.js__
__/webpack.config.js__

Plugins (segun el proyecto)
```npm i html-webpack-plugin copy-webpack-plugin @babel/core babel-loader - D```

Configuramos [_webpack.config.js_](webpack.config.js)

Paquetes para probar la aplicacion en desarrollo
```npm install webpack-dev-server -D```
```json
  "scripts": {
      "build": "webpack --mode production",
      "start": "webpack-dev-server --open -mode development"
  },
```

Compilamos el proyecto; analiza el proyecto desde el punto de entrada para optimizar el html y lo envia la carpeta indicada _dist_ preparando los plugins y loaders
```npm run build```

Habilitar un entorno de desarrollo local para los cambios en tiempo real
```npm run start```


## Despliegue en github page
El proyecto debe estar alamacenado en un repositorio de github.
Instalmos un paqueete para despligue de paginas estaticas
```npm install gh -pages -D```

Agregar la configuracion al archivo _package.json_ pasra ejecutar los cambios en github
```json
  "scripts": {
    
    "deploy": "gh-page -d dist"
  },
```

Genera lo necesario para enviarlo a producción
```npm run deploy```
En el repositorio veremos una rama llamada _gh-pages_ donde estaran los archivos, en github en configuración > Pages > habilitamos y selecionamos la rama gh-pages, guardamos para que nos entregue un link. Podemos integrar un dominio.


