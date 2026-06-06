# Instalar una Recovery y ROM Personalizada

## Dependencias

### Windows

- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [QcomMtk Driver](https://www.mediafire.com/file/nninaiiqy1e5csa/New+QcomMtk_Driver_Setup_V2.0.1.1_GsmMafia.Com.exe)
- [vbmeta image](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!TIP]
> Si recibes un error: `fastboot: usage: unknown reboot target recovery` prueba este instalador de ADB [ADB and Fastboot ++](https://github.com/K3V1991/ADB-and-FastbootPlusPlus/releases/download/v1.0.8/ADB-and-Fastboot++_v1.0.8.exe)

### Linux

- android-tools (gestor de paquetes o [descargar](https://dl.google.com/android/repository/platform-tools-latest-linux.zip))
- `libusb`
- [vbmeta image](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!IMPORTANT]
> Tu bootloader debe estar desbloqueado y tu dispositivo debe estar en **firmware base C.18 (RUI3)** o **F.11 (RUI4)** antes de instalar una ROM personalizada. Consulta la [guía de desbloqueo](/es/guides/unlock) si aún no lo has hecho.
>
> Sigue la [Guía de Firmware Base](/es/guides/base-firmware) para flashear C.18 o F.11.
>
> **Nota:** algunas ROMs personalizadas incluyen el firmware base en el zip. Si la tuya lo incluye, salta el paso del firmware base y flashea la ROM directamente.

- ROMs: [grupo de Telegram](https://t.me/Realme8AOSPGroup)
- GApps: [MindTheGApps A13](https://androidfilehost.com/?fid=4279422670115734716) (si es necesario)
- Recovery: [Página de Recuperaciones](/es/reference/recoveries)

## Reiniciar a fastboot

Tu dispositivo debe estar encendido.

1. Abre una ventana de símbolo del sistema / terminal en la carpeta **platform-tools**.
2. **En tu teléfono**, habilita Opciones de Desarrollador y activa USB Debugging.
3. Verifica la conexión del dispositivo:

```bash
adb devices
```

Verás `Allow USB Debugging for ...` en el teléfono, marca `Always allow...` y presiona `Allow`.

4. Reinicia al bootloader:

```bash
adb reboot bootloader
```

El teléfono se reiniciará en una pantalla que dice `fastboot_unlock_verify ok`.

> [!TIP]
> Revisa la [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) si algo no funciona o tienes preguntas.

## Instalar recovery personalizada y hacer sideload de la ROM personalizada

> [!TIP]
> Si estás cambiando entre ROMs personalizadas, salta el paso 2.
> Si la recovery requerida no ha cambiado, puedes saltar el paso 3.

1. Mueve los archivos `recovery.img` y `vbmeta.img` a la carpeta **platform-tools**.
2. Flashea vbmeta:

```bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

Debería mostrar:
![](https://i.imgur.com/MZZyTBc.png)

3. Flashea la recovery:

```bash
fastboot flash recovery recovery.img
```

![](https://i.imgur.com/t7wYi3R.png)

El teléfono debería mostrar `USB Transmission ok`.

4. Reinicia a recovery:

```bash
fastboot reboot recovery
```

![](https://i.imgur.com/1zwXUmj.png)

5. En recovery, ve a `Factory reset > Format data/factory reset > Format data`. **Después** del factory reset, regresa y selecciona `Apply update > Apply from ADB`. Verifica la conexión del dispositivo:

```bash
adb devices
```

Deberías ver esto:
![](https://i.imgur.com/MoiIS9k.png)

6. Haz sideload de la ROM personalizada:

```bash
adb sideload custom-rom.zip
```

Reemplaza `custom-rom.zip` con el nombre real del archivo. Por ejemplo, yo flasheé LeafOS 2:
![](https://i.imgur.com/QZqi1e1.png)

7. **SOLO** haz este paso en ROMs personalizadas **SIN GAPPS / GMS** (revisa la descripción de la ROM para confirmar). Selecciona `Apply update > Apply from ADB` nuevamente y haz sideload de GApps:

```bash
adb sideload gapps.zip
```

Reemplaza `gapps.zip` con el nombre real del paquete.
![](https://i.imgur.com/DUEMXrn.png)

> **Si recibes un error "Signature verification error" en tu teléfono**, haz clic en `Yes` para continuar de todas formas, esto aplica igual para cualquier otro ZIP que flashees.

8. Una vez terminado, en la recovery regresa a `Reboot system now`. El teléfono se reiniciará en tu ROM Personalizada.

> [!TIP]
> Revisa la [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) si algo no funciona o tienes preguntas.
