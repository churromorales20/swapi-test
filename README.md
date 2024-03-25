Guía de Uso de la Aplicación
Configuración Local:
Configuración de DynamoDB
Para configurar DynamoDB localmente, siga los siguientes pasos:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.UsageNotes.html#DynamoDBLocal.Endpoint

Descargue y configure DynamoDB local
Ejecute DynamoDB local en su máquina.
Verifique que DynamoDB local esté en funcionamiento en la dirección y puerto especificados.

Ejecución Local
Para ejecutar la aplicación localmente, siga estos pasos:

Configure DynamoDB local siguiendo los pasos anteriores.
Ejecute npm run build para compilar la aplicación.
Ejecute serverless offline para ejecutar la aplicación localmente.
Acceda a la aplicación localmente desde su navegador o cliente HTTP.

Ejecución de Pruebas Unitarias
Para ejecutar las pruebas unitarias de la aplicación, ejecute npm run test 


Configuración de DynamoDB en AWS:
Para configurar DynamoDB en AWS, siga estos pasos:

Acceda a la consola de AWS y cree una tabla DynamoDB con la configuración necesaria.
Obtenga las credenciales y la región de AWS para acceder a la tabla DynamoDB.
Despliegue en AWS
Para desplegar la aplicación en AWS, siga estos pasos:

Asegúrese de tener configuradas las credenciales de AWS en su entorno local.
Ejecute npm run deploy para desplegar la aplicación en AWS.
Verifique que la aplicación se haya desplegado correctamente accediendo a la URL proporcionada por Serverless Framework.
Ejecución Local
Para ejecutar la aplicación localmente, siga estos pasos: