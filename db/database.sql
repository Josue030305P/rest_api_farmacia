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


INSERT INTO medicamentos (tipo, nombre, nomcomercial, presentacion, receta, precio) VALUES
('Analgésicos', 'Paracetamol', 'Panadol', 'Comprimidos', 'S', 2.50),
('Analgésicos', 'Ibuprofeno', 'Advil', 'Grageas', 'S', 3.00),
('Laxantes', 'Lactulosa', NULL, 'Polvos', 'N', 1.50),
('Antiinfecciosos', 'Amoxicilina', NULL, 'Cápsulas', 'S', 4.00),
('Antiinflamatorios', 'Diclofenaco', NULL, 'Píldoras', 'S', 5.00);

SELECT * FROM medicamentos;


SELECT * FROM medicamentos WHERE receta = 'N';
