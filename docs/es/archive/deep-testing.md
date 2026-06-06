# YA NO FUNCIONA, REALME HA ELIMINADO EL R8 DE LOS SERVIDORES

> [!Warning]
> **Este método ya no funciona. Estos pasos se mantienen solo como referencia.**

¿Preguntas? Envía un mensaje a [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) en Telegram o inicia una nueva [Discusión en GitHub](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

¿Ya está desbloqueado? Salta a [Instalar una Recovery y ROM personalizada](/es/guides/custom-rom).

**Aviso:** SIN GARANTÍA, según lo permitido por la ley. Windows 7 no es compatible.

## Requisitos previos

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [adb tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- Firmware: [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- APK: [Deep Testing](https://drive.google.com/file/d/1pESMmJef6Gm9YlJAE7OA_DDNnhFn3Jpz/view?usp=sharing)

> [!TIP]
> En Linux, los comandos `mtk` se pueden ejecutar directamente (no se necesita el prefijo `python`).

## Respaldar tus particiones del sistema

> [!CAUTION]
> ¿YA HAS HECHO EL RESPALDO? SI NO, SIGUE LA [Guía de respaldo](/es/guides/backup)

## Desbloqueo

### Instalación de requisitos previos

1. **Mediatek USB**
   1. **Extrae** y entra en la carpeta del controlador [Mediatek USB](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing).
   2. Encuentra el archivo **.inf**, haz clic derecho y presiona instalar
   ![](https://i.imgur.com/niVRaOn.png)
2. Instala [USBDk](https://github.com/daynix/UsbDk/releases/)
3. Instala [Python desde python.org](https://www.python.org/downloads/) (o [Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5) como alternativa)

### Flashear RUI3 C.18

Sigue el procedimiento de [SP Flash Tool](/es/reference/flash-tool), con estos cambios:

- **Firmware:** Usa el [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- **Archivo scatter:** Carga `MT6785_Android_scatter.txt` de la carpeta del firmware

> [!CAUTION]
> **Recuerda tener el modo `Download Only`** o perderás particiones críticas.

Cuando termines, **BORRA el teléfono.** Mantén **Vol- + Encendido**, entra a recovery, selecciona **Format Data**.

### Desbloqueando el bootloader con Deep Testing

1. Descarga e instala la aplicación deep testing, presiona "Apply Now" y acepta el acuerdo, deberías ver esto ahora:
![](https://i.imgur.com/MTeSOl3.png =300x)

2. Cierra la aplicación y desliza para quitarla de recientes. Abre la aplicación nuevamente y presiona Query verification status. Ahora deberías ver esto:
![](https://i.imgur.com/FEN05v9.png =300x)

3. Presiona "Start deep testing" y el dispositivo se reiniciará a modo fastboot:
![](https://i.imgur.com/G6NeOCQ.png =300x)

4. El dispositivo se reiniciará a modo fastboot. Para desbloquear el bootloader, conecta el dispositivo a una PC y ejecuta:

```bash
fastboot flashing unlock
```

Deberías ver esto:
![](https://i.imgur.com/iYp4XAP.png =600x)

5. Presiona `Volume up` y el bootloader se desbloqueará.

## Instalar una Recovery y ROM Personalizada

Ve a la [Guía de ROM Personalizada](/es/guides/custom-rom).

## Root

Ve a [Root](/es/guides/rooting).
