# Procedimientos para implementación

1. Clonar el repositorio

```
git clone https://github.com/Josue030305P/rest_api_farmacia.git

``` 

2. Reconstruir node_modules
``` 
npm install

``` 

3. Reconstruir el archivo .envb


``` 
DB_HOST= 
DB_PORT=
DB_PASSWORD= 
DB_USER= 
DB_DATABASE= 

``` 

4. Restaure la BD (db> database.sql)

CREATE DATABASE farmacia;
USE farmacia;
CREATE TABLE medicamentos (
    id            INT PRIMARY KEY AUTO_INCREMENT,
    tipo          ENUM('Analgésicos','Laxantes','Antiinfecciosos','Antiinflamatorios') NOT NULL,
    nombre          VARCHAR(120) NOT NULL,
    nomcomercial    VARCHAR(120)NULL,
    presentacion    ENUM('Comprimidos','Grageas','Cápsulas','Polvos','Píldoras') NOT NULL,
    receta          ENUM('S', 'N') NOT NULL, 
    precio          DECIMAL(7,2) NOT NULL 
)ENGINE=InnoDB;


``` 

5. Ejecute el proyecto.

``` 
npm run dev

``` 

6. Autor.
```
    Josué Pilpe
```