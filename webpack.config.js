// Nos permite acceder a donde estamos en las carpetas. Ya sea en local o en la Nube.
const path = require("path");

// Archivo necesario para trabajar con html
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Paquete webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Objeto donde se encuentra la configuración. Modulo para exportar
module.exports = {
  // Punto de entrada. De aquí parte el desarrollo.
  entry: "./src/index.js",

  // Donde se envía el proyecto estructurado y compilado listo para producción.
  output: {
    // Creamos el lugar donde se exportara el proyecto
    path: path.resolve(__dirname, "dist"),
    // nombre del archivo final para producción
    filename: "main.js",
  },
  //   Extensiones que vamos a utilizar
  resolve: {
    extensions: [".js"],
  },
  //   Se crea un modulo con las reglas necesarias que vamos a utilizar
  module: {
    rules: [
      {
        //   Estructura de babel, Nos permite identificar los archivos según se
        //   encuentran en nuestro entorno
        test: /\.js?$/,
        exclude: /node_modules/,
        //   Utilizar un loader como configuración establecida
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    // Instancia para trabajar con los archivos html
    new HtmlWebpackPlugin({
      //   Como vamos a injectar un valor a un archivo html
      inject: true,
      //   Dirección donde se encuentra el template principal
      template: "./public/index.html",
      //   El nombre donde se encontrara el archivo
      filename: "./index.html",
    }),

    new CopyWebpackPlugin({
        patterns: [{ from: "./src/styles/styles.css", to: "" }],
      })
  ]
};
