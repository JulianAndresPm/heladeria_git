SELECT * FROM db_ice.usuarios 
WHERE usuario = 'admin' and password ='admin123*';

-- TABLA USUARIOS

CREATE TABLE usuarios (
  id INT(10) NOT NULL,
  usuario VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  nombres VARCHAR(40) NOT NULL,
  apellidos VARCHAR(70) NOT NULL,
  fechaNac VARCHAR(60) NOT NULL,
  telefono VARCHAR(60) NOT NULL,
  correo VARCHAR(60) NOT NULL
);

ALTER TABLE usuarios ADD PRIMARY KEY (id);
ALTER TABLE usuarios MODIFY id INT(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
INSERT INTO db_ice.usuarios(usuario,password,nombres,apellidos,fechaNac,telefono,correo) 
	VALUES('prueba','prueba123*','prueba','prueba',0,0,'');

-- TABLA CARRITO COMPRAS
CREATE TABLE carrito(
	id_usuario INT(10) not null,
    id_producto INT(10) not null,
    cantidad INT(4) not null
);

ALTER TABLE carrito ADD PRIMARY KEY (id_usuario,id_producto);

ALTER TABLE carrito ADD CONSTRAINT FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE carrito ADD CONSTRAINT FOREIGN KEY(id_producto) REFERENCES productos(id)
ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO db_ice.carrito(id_usuario,id_producto,cantidad) 
	VALUES(2,1,3);
    
select * from carrito;


-- TABLA PRODUCTOS
CREATE TABLE productos(
	id INT(10),
    NombreProducto VARCHAR(70),
    disponibilidad INT(1),
    stock INT(4)
);

ALTER TABLE productos ADD PRIMARY KEY (id);
ALTER TABLE productos MODIFY id INT(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
INSERT INTO db_ice.productos(NombreProducto,disponibilidad,stock) 
	VALUES('Cokies & Cream',1,300);
ALTER TABLE productos ADD COLUMN precioxUni INT(10);


select * from productos;


CREATE TABLE 



