
# Kasa Application


## Description

Kasa est une application web de location d’appartements entre particuliers.<br>
Elle permet aux utilisateurs de visualiser les offres disponibles (images, équipements, notes de l'hôte, lieu).

## Installation
1. Clonez le dépôt :

```sh
git https://github.com/githubeuse/P11kasa.git
cd p11kasa
```

2. Installez sur votre appareil, Node Version Manager.
Rendez-vous sur ce lien : https://github.com/coreybutler/nvm-windows/releases<br>
Sélectionnez par ex : nvm-setup.exe<br>
Procéder à l'installation complète avec les options par défaut.

3. Redémarrez votre éditeur de code (VS Code par ex)<br>
puis installez la version de node 20.11.1,<br>
basculez sur celle-ci et vérifiez que c'est bien la version node 20.11.1 qui est utilisée<br>
```sh
nvm install 20.11.1
nvm use 20.11.1
node -v
``` 
Vous devriez avoir comme résultat : v20.11.1 pour la commande node-v

4. Vous pouvez alors installer les dépendances
```sh
npm install
``` 


## Scripts

Pour lancer l'application
```sh
npm start
```

Le terminal vous indiquera sur quelle URL l'application se lancera, par ex : http://localhost:3000/