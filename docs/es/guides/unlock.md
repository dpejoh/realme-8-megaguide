# Desbloquear Bootloader

> [!Warning]
> Lee cada paso para evitar brickear el dispositivo. Windows 7 no es compatible. Si estás en RUI4, actualiza a F.09 o superior primero.

¿Preguntas? [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) en Telegram o [GitHub Discussions](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

¿Ya está desbloqueado? Salta a [Parchar LK](/es/guides/patching-lk) (acceso fastboot) o [ROM Personalizada](/es/guides/custom-rom).

> [!CAUTION]
> **Haz un respaldo primero.** Sigue la [Guía de respaldo](/es/guides/backup) antes de continuar.

El desbloqueo oficial de Realme (Deep Testing) ya no funciona. Esta guía utiliza MTK Client para desbloquear mediante modo BROM. Funciona en cualquier firmware.

> [!TIP]
> Salta a [Parchar LK](/es/guides/patching-lk) o [ROM Personalizada](/es/guides/custom-rom) si tu bootloader ya está desbloqueado.

## Dependencias

### Windows

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- firmware: [A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link), [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [A.19 RUI2 firmware](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)
- [C.18 RUI3 firmware](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)

### Instalación de dependencias

#### Windows

Instala [Python desde Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5). Instala el controlador USB Mediatek y USBDk. Descarga y extrae [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763), luego ejecuta en un Símbolo del sistema:

```bash
pip3 install -r requirements.txt
```

#### Linux

Instala `libusb` y `python` desde tu gestor de paquetes (asegúrate de que Python >= 3.9). Descarga y extrae [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip), luego ejecuta:

```bash
python -m pip install -r requirements.txt
```

## Degradar a RUI2

1. **Extrae** y entra en la carpeta del [archivo MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Después de la extracción, ve a la carpeta 2 niveles hacia adentro para encontrar el archivo `Requirements.txt`. Ahora abre la consola en esa carpeta:
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
5. El teléfono ahora está en modo BROM. Ejecuta SP Flash tool (`flash_tool.exe` en Windows, `flash_tool` en Linux)
6. Haz clic en `Options > Option...` y asegúrate de que el **Puerto COM** correcto esté seleccionado, UART habilitado y la velocidad de baudios configurada a **921600**.
	![](https://i.imgur.com/hnMsyeN.png)
7. Obtén el [Firmware A.19 RUI2 de Haadi](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) y descomprímelo
8. Carga `scatter.txt` del Firmware de Haadi
    ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> **Recuerda desmarcar:**
> | opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
> | --- | --- |
> | <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

> [!CAUTION]
> **Recuerda tener el modo `Download Only`** o perderás particiones críticas.
>    ![](https://i.imgur.com/M3aUNBs.png =300x)

9. Evita mover tu teléfono para no desconectar nada. Este proceso tomará hasta 15-20 minutos. Para instalar A.19 en tu teléfono, haz clic en `Download`.
	![](https://i.imgur.com/uSXflCJ.png =300x)
10. Si todo sale bien, debería verse así:
	![](https://i.imgur.com/qeJWt3a.png =200x)
11. Antes de hacer cualquier cosa, **BORRA el teléfono por seguridad.** Mantén presionados **Vol- y el botón de encendido**, en Recovery selecciona wipe data, y luego selecciona **Format Data**.

## Desbloqueando el bootloader

1. Abre la consola en la carpeta de [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Reinicia tu dispositivo, apágalo y mantén presionados ambos **Vol+, Vol-**. **No sueltes los botones hasta que el comando termine.**
3. Borra datos (esto borra tu dispositivo):

```bash
python mtk e metadata,userdata,md_udc
```

Debería verse así:
   ![](https://i.imgur.com/HfPsrpU.png)
4. Desbloquea el bootloader:

```bash
python mtk da seccfg unlock
```

Debería verse así:
   ![](https://i.imgur.com/Su8RtHk.png)
5. Reinicia:

```bash
python mtk reset
```

O mantén todos los botones físicos hasta que el teléfono se reinicie.

> [!IMPORTANT]
> **El primer inicio tomará entre 5 y 20 minutos.**
> **Verás advertencias de `dm-verity corruption` y `orange state`. Presiona el *Botón de Encendido* para continuar. Esto es normal y se solucionará en el paso de [parchado de LK](/es/guides/patching-lk).**

6. Configura tu teléfono y habilita **Opciones de Desarrollador** y verifica que el bootloader esté desbloqueado en `OEM unlocking`

> [!TIP]
> Revisa la [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) si algo no funciona o tienes preguntas.

> [!TIP]
> Tu bootloader ahora está desbloqueado. Puedes flashear **cualquier firmware que quieras** en este punto: RUI2 (A.19), RUI3 (C.18), RUI4 (F.11), o ir directamente a una ROM personalizada.
>
> **Si quieres una ROM personalizada:** debes estar en el firmware base **C.18 (RUI3)** o **F.11 (RUI4)**.

## Flashear firmware base

Algunas ROMs personalizadas incluyen el firmware base en el zip. Si la tuya lo incluye, salta esto y ve directamente a [Parchar LK](/es/guides/patching-lk).

De lo contrario, sigue la [Guía de Firmware Base](/es/guides/base-firmware) para flashear **C.18 (RUI3)** o **F.11 (RUI4)**.

## Siguientes pasos

- [Parchar LK para acceso fastboot](/es/guides/patching-lk)
- [Instalar una ROM Personalizada y Recovery](/es/guides/custom-rom)
- [Hacer root a tu dispositivo](/es/guides/rooting)
