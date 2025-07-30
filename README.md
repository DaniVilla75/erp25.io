[![Ir a la Web](https://img.shields.io/badge/Ir%20a%20la%20Web-007BFF?style=for-the-badge&logo=link&logoColor=white)](https://www.tuweb.com)
ERP en excel para alumnos de administración

# 📁 Estructura General del Archivo de Excel

Puedes dividir el libro en hojas temáticas:

| Hoja         | Contenido                                                                 |
|--------------|---------------------------------------------------------------------------|
| 🧾 Facturas  | Registro de ventas, compras, cliente/proveedor, ítems e impuestos        |
| 📚 Asientos  | Tabla tipo contabilidad: Fecha, Cuenta, Debe, Haber, Descripción         |
| 📦 Inventario| Productos, unidades, costos, entradas/salidas                            |
| 👥 Empleados | Nombre, tarea, sueldo, fecha de ingreso                                   |
| 📈 Reportes   | Tablas dinámicas + gráficos: ingresos/egresos, balance por cultivo      |

## 🧾 Ejemplo de Tabla para Facturas

```plaintext
| Fecha   | Tipo   | Nº Factura | Cliente/Proveedor | Producto | Cantidad | Precio Unit | Total  | IVA | Total c/IVA |
|---------|--------|------------|-------------------|----------|----------|-------------|--------|-----|-------------|
| 01/08/25| Venta  | 0001       | Molino Tandil     | Trigo    | 1000 kg  | $150        | 150000 | 21% | 181500      |
