---
template: BlogPost
path: /dev-tools-parte-2-wsl2
date: 2022-05-15T07:45:45.672Z
title: 'DEV Tools parte 2: WSL 2'
metaDescription: 'Linux, Developer tools, Windows, Setup'
thumbnail: /assets/Screenshot2022-05-14.jpg
---
<!--StartFragment-->

Usar Linux en nuestro PC tiene algunos problemas principales que con el tiempo se han ido solucionando, pero que pueden quitarnos de la mente la idea de una PC o laptop con **Linux**. Entre los desafios principales de tener Linux, fuera de su curva de aprendizaje y dificultad de configuración, además de la resistencia al cambio si venimos de Windows son:

* Dificultad para encontrar o usar algunos drivers.
* Compatibilidad con aplicaciones.
* Compatibilidad con juegos.
* Demasiadas distribuciones entre las cuales elegir.

Es este caso si no queremos instalar Linux y contamos con una PC con Windows 10 u 11, tenemos a mano el subsistema de Linux para Windows o WSL. Mientras escribo este articulo estamos en la versión 2 del mismo el cual ya incorpora un Kernel de Linux propio, lo que a diferencia de la primera versión le otorga un mayor rendimiento y compatibilidad con aplicaciones nativas. Cabe mencionar que en Windows 11 ya se pueden instalar apps graficas como el explorador de archivos Nautilus, VLC para reproducir videos o música o también GIMP para edición de imágenes.

Uno de los puntos fuertes de **WSL 2** es su versatilidad y por lo cual recomiendo tanto aprender a usar Linux y el Bash desde Windows, así pues, yo uso WSL 2 todo el tiempo. Ahora veamos como instalar WSL y WSL 2.

Lo primero será verificar que tengamos Windows 10 en su versión 2004 o superior, o **Windows 11**.\
Una vez verificada la versión, se deberá abrir **PowerShell** como administrador y se correrá el siguiente comando:

```shell
$ wsl --install
```

Este comando automáticamente descargará el Kernel de Linux más reciente, instalara por defecto WSL 2 y también **Ubuntu** por defecto, para que podamos iniciar rápido nuestro ambiente de desarrollo.

En caso que como yo no desees tener Ubuntu como distribución si no cualquier otra, en mi caso he elegido Debian como base. Se deberá usar el siguiente comando:

```shell
$ wsl --install -d Debian
```

La distro **Debian** puede cambiar por cualquiera en la siguiente lista:

| NAME         | FRIENDLY NAME                    |
| ------------ | -------------------------------- |
| Ubuntu       | Ubuntu                           |
| Debian       | Debian GNU/Linux                 |
| kali-linux   | Kali Linux Rolling               |
| openSUSE-42  | openSUSE Leap 42                 |
| SLES-12      | SUSE Linux Enterprise Server v12 |
| Ubuntu-16.04 | Ubuntu 16.04 LTS                 |
| Ubuntu-18.04 | Ubuntu 18.04 LTS                 |
| Ubuntu-20.04 | Ubuntu 20.04 LTS                 |

Las cuales también puedes consultar con el comando, lo cual sería una gran idea, debido a que WSL 2 crece en funciones, características y distribuciones cada cierto tiempo.

```shell
$ wsl --list --online
```

Una vez finalizada la instalación se nos pedirá que creemos un usuario y una contraseña para poder usar comandos con sudo. 

Como paso siguiente usaremos el siguiente comando para actualizar nuestra distro, que los paquetes por defecto y las listas de paquetes queden actualizadas.

```shell
$ sudo apt update && apt upgrade
```

Una vez terminado este proceso ya solo faltará instalar los lenguajes de programación, herramientas y entornos que vayamos a usar en nuestro día a día.

En una siguiente entrega de DEV Tools veremos como configurar y hacer lucir mejor Windows Terminal, para tener nuestra terminal luzca como la de los programadores de las peliculas.
