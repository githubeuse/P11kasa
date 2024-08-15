const path = require("path");

module.exports = {
  entry: "./src/index.js", // Point d'entrée de votre application
  output: {
    filename: "bundle.js", // Nom du fichier de sortie
    path: path.resolve(__dirname, "dist"), // Répertoire de sortie
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Règle pour les fichiers CSS
        use: ["style-loader", "css-loader"], // Utilisation des loaders
      },
      {
        test: /\.scss$/, // Règle pour les fichiers SCSS
        use: ["style-loader", "css-loader", "sass-loader"], // Utilisation des loaders
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Répertoire de contenu
    compress: true, // Compression gzip
    port: 9000, // Port du serveur de développement
  },
};
