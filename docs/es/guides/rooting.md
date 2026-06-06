# Root

> [!IMPORTANT]
> Usa solo **un** método: [Magisk](#con-magisk) o [KernelSU](#con-kernelsu).

## Con Magisk

### Necesitarás

### Windows

- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

### Linux

- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

> [!TIP]
> En Linux, los comandos `mtk` se pueden ejecutar directamente (no se necesita el prefijo `python`).

1. Abre la consola en la carpeta de MTK Client.
2. Lee la partición boot:

```bash
python mtk r boot boot.img
```

Apaga tu dispositivo, mantén presionados ambos **Vol+, Vol-** y conecta el dispositivo a la computadora.
3. Se creará un archivo `boot.img` en la carpeta. Enciende tu dispositivo y copia el archivo a este.
4. Navega a donde descargaste el archivo apk de Magisk Manager e instálalo.
5. Abre Magisk Manager y haz clic en instalar junto a `Magisk`.
![](https://i.imgur.com/CAbHxPv.png =400x)

6. Selecciona `Select and patch a file`. Se abrirá el selector de archivos, busca y selecciona el `boot.img` que extrajiste. Luego presiona `let's go`.
![](https://i.imgur.com/4m7CJfB.png)

7. Cuando veas esta pantalla, el parcheo está completo y se te dará la ruta del archivo `.img` parcheado. Copia ese archivo a tu computadora en la carpeta `platform-tools`.
   ![](https://i.imgur.com/D9qyjbGm.png)

8. Conecta tu teléfono a tu computadora y habilita USB debugging en tu teléfono.
9. En la carpeta `platform-tools` abre un Símbolo del sistema y verifica la conexión del dispositivo:

```bash
adb devices
```

Acepta USB Debugging en tu teléfono. Luego reinicia al bootloader:

```bash
adb reboot bootloader
```

El teléfono se reiniciará en una pantalla de `fastboot_unlock_verify ok`.

10. Flashea la imagen boot parcheada:

```bash
fastboot flash boot magisk_patched-xxxxx.img
```

Reemplaza `magisk_patched-xxxxx.img` con el nombre real de tu archivo. Luego reinicia:

```bash
fastboot reboot
```

11. El teléfono se reiniciará y ahora tienes root con Magisk.

> **Nota:** Recibirás un aviso para reiniciar y completar la instalación.

### Para eliminar el root de Magisk

Selecciona `Uninstall > Complete uninstall` en la aplicación Magisk Manager.

## Con KernelSU

> [!WARNING]
> **Solo funciona en ROMs personalizadas.**

> [!IMPORTANT]
> Si mantienes tu teléfono conectado mientras se reinicia con KSU, entrará en bootloop e irá a recovery. Desconecta tu teléfono antes de reiniciar.

### Necesitarás


- [KernelSU zip](https://github.com/HowWof/KernelSU_Builder/releases/latest)
- [KSU manager APK](https://github.com/tiann/KernelSU/releases/download/v1.0.0/KernelSU_v1.0.0_11874-release.apk)

> [!TIP]
> Hay versiones más recientes de KernelSU en el [grupo de Telegram](https://t.me/Realme8AOSPGroup).

1. Reinicia a recovery:

```bash
adb reboot recovery
```

2. En recovery selecciona `Apply update > Apply from ADB` y haz sideload:

```bash
adb sideload kernelsu.zip
```

> **Si recibes un error "Signature verification error"** continúa de todas formas, el paquete se flasheará igualmente, esto aplica para cualquier otro ZIP que flashees.

3. Cuando termine, presiona `Reboot system now`. Tu teléfono se reiniciará. Navega a donde descargaste el archivo apk de KernelSU Manager e instálalo.
4. La aplicación debería mostrarse así indicando que todo se ha realizado correctamente:
![](https://i.imgur.com/XhOFSXP.png)

### Para eliminar el root de KernelSU

Extrae el `custom-rom.zip` que descargaste para flashear la ROM, busca y mueve el `boot.img` a la carpeta donde está adb y ejecuta:

```bash
adb reboot bootloader
fastboot flash boot boot.img
```
