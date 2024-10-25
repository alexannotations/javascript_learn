// constante que pertenece a node
const path = require('path')
// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// configuracion para el modulo
module.exports = {
    // punto de entrada del archivo principal de JS
    entry: './src/index.js',
    // punto de salida como un objeto
    output: {
        // donde esta el directorio base, y se creara una carpeta _dist_ 
        // donde se envian los archivos preparados
        path: path.resolve(__dirname, 'dist'),
        // el archivo resultante, puede ser cualquiera
        filename: 'main.js'
    },
    // identifica las diferentes extensones a trabajar ['.jsx','.mjs','ts']
    resolve: {
        extensions: ['.js']
    },
    // array de reglas a aplicar
    module: {
        // babel loader para utilizar las ventajas de javascript moderno
        rules: [ 
            // plugins o recursos clave para webpack (trabajar imagenes, configuraciones)
            // objeto para ignorar o archivos necesarios
            {
                // regex utilizar js
                test: /\.js?$/,
                // excluimos
                exclude: /node_modules/,
                // 
                use: {
                    // uso del loader instalado para el navegador
                    loader: 'babel-loader',
                }
            }
        ]
    },
    // array de plugins
    plugins: [
        // instancia de HtmlWebpackPlugin con su configuracion
        new HtmlWebpackPlugin({
            // activa el valor
            inject: true,
            // base template
            template: './public/index.html',
            // se copia a la carpeta de _dist_
            filename: './index.html',
        })
    ]
}