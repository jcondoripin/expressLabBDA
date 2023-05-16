conn = new Mongo();
db = conn.getDB("myappdb");

db.usuarios.insert(
  [
   {nombre: 'Jaime', apellido: 'Farfan', email: 'jfarfan@abc.com', estado:'A', created_at: new Date('01/23/2020')}
  ]
);
db.productos.insert(
  [
    {nombre: 'Producto1', costo: 12, descripcion: 'descp1', stock: 50}
  ]
);
db.empleados.insert(
  [
    {nombre: 'emp1', apellido: 'lastemp1', sueldo: 12, cargo: 'gerente', dni: '61257146', telefono: '999999999'}
  ]
);
