# Markdown Links




***

## 1. Descripción
Markdown links es una biblioteca para examinar archivos tipo markdown, a través de rutas ingresadas a través de la línea de comando (CLI), las cuales pueden ser archivos unitarios o directorios que contengan archivos con extensión '.md'. Esta nos permite obtener reportes estadísticos de los enlaces encontrados, información sobre el estado de los links a través de peticiones HTTP, así como datos generales.

## 2. Diagrama de Flujo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://raw.githubusercontent.com/StefaniPenaranda/MD-LINKS/LIM018-md-links/diagramaDeFlujo.jpg)

## 2. Resumen del proyecto

Instalación
Para instalar la biblioteca debe ejecutar el siguiente comando:

npm md-links-ory-chacon -g

Guía de uso
Para ejecutar la línea de comandos en la terminal debe utilizar:

md-links [options]

Para visualizar la tabla de ayuda utilice la opción --help o -h luego de una ruta, o ingrese md-links sin ruta ni opciones.
