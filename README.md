# Patrón de diseño Factory en API con Express en Typescript

Proyecto backend simple utilizando ExpressJS con TypeScript, implementando el patrón de diseño Factory para simular el uso de dos métodos de pago diferentes: Flow y Transbank. La selección del método de pago esta determinada por el campo payment_method incluido en el body de la solicitud.


# Manual de despliegue local de la aplicación (Linux)

## Requisitos Previos

### 1. Instalar Node.js y npm

```bash
sudo apt update
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - 
sudo apt install nodejs
```
```bash
sudo apt install npm
```
Comprobamos si se instalaron correctamente:

```bash
node -v  
npm -v   
```

### (Opcional) 2. Instalar Git  

```bash
sudo apt install git
git --version  # Verificar versión de Git
```

Altenativamente descargar .zip del repositorio y extraer.

## Pasos de despliegue

### 1. Clonar el Repositorio

```bash
git clone https://github.com/FederalTN/DesafioTI.git
cd DesafioTI
```


### 2. Instalar Dependencias

```bash
npm install
```

### (Opcional) 3. Crear el Archivo .env
Crea un archivo .env en el directorio con el siguiente contenido (XXXX: puerto a elecciòn):

```
PORT= XXXX 

```
Alternativamente por defecto se ejecutara en el puerto 3000


### 4. Ejecutar el Proyecto
Compilamos y iniciamos el servidor
```bash
npm run build
npm run start
```

O ejecutar directamente sin compilar (utilizando TypeScript Node Dev):

```bash
npm run dev
```

### 5. Verificar API
Una vez se este ejecutando el servidor con el mensaje (por ejemplo utilizando el puerto 3000)

"Servidor corriendo en http://localhost:3000"

Puedes realizar una solicitud POST a http://localhost:3000/pay con el siguiente cuerpo (utilizando Postman o similar):

```
{
  "payment_method": "FLOW",
  "amount": 100,
  "service": "Suscripcion"
}
```

Alternativamente si se dispone de curl instalado en nuestro sistema se puede utilizar:

```
curl -X POST http://localhost:3000/pay -H "Content-Type: application/json" -d '{"payment_method": "FLOW", "amount": 100, "service": "streaming"}'
```

### 6. Detener el servidor
Detener el servidor en la terminal que se ejecuta
```
Ctrl + C
```


