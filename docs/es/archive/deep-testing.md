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
3. Instala [Python desde Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)

### Flashear RUI3 C.18

1. **Extrae** y entra en la carpeta del [archivo MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Abre la consola en la carpeta de [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
![](https://i.imgur.com/RJtobaI.png)

3. Instala las dependencias y envía el payload:

```bash
python -m pip install -r requirements.txt
python mtk payload
```

Debería verse así:
![](https://i.imgur.com/WSQsVj1.png)

4. Asegúrate de que tu teléfono esté apagado, mantén presionados ambos **Vol+, Vol-** y conecta el cable USB. Verás algo como esto:
![](https://i.imgur.com/lr7HIN0.png)

5. El teléfono ahora está en modo BROM. Ejecuta [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing) `flash_tool.exe`

6. Haz clic en `Options > Option...` y asegúrate de que el **Puerto COM** correcto esté seleccionado, UART habilitado y la velocidad de baudios configurada a **921600**.

![](https://i.imgur.com/hnMsyeN.png)

7. Obtén el [Firmware C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download) y descomprímelo
8. Carga `MT6785_Android_scatter.txt` desde la carpeta del firmware
   ![](https://i.imgur.com/8APQvkx.png)

> [!CAUTION]
> **Recuerda tener el modo `Download Only`** o perderás particiones críticas.

![](https://i.imgur.com/M3aUNBs.png =300x)

9. Este proceso tomará hasta 15-20 minutos. Para comenzar, haz clic en `Download` ([**¿Sin progreso? Haz clic aquí**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)). Asegúrate de no desconectar tu teléfono.
![](https://i.imgur.com/uSXflCJ.png =300x)

10. Si todo sale bien, debería verse así:
![](https://i.imgur.com/qeJWt3a.png =200x)

11. Antes de hacer cualquier cosa, **BORRA el teléfono por seguridad.** Mantén presionados **Vol- y el botón de encendido**, en Recovery selecciona wipe data, y luego selecciona **Format Data**.

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
