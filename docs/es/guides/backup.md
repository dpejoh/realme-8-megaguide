# Respaldo

Este método realiza un respaldo del _firmware_ por si el IMEI se borra o el sistema queda bricked.

> [!NOTE]
>
> El respaldo omite `userdata` (archivos personales) por defecto. Los volcados raw no son prácticos de restaurar. También puedes omitir `super` con `--skip userdata,super` si quieres un respaldo más pequeño. Super siempre se puede flashear de nuevo desde un paquete de firmware.
>
> Respaldar los datos personales por separado mediante almacenamiento en la nube o transferencia manual.

## Dependencias

### Windows

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)

## Respaldo

1. Prepara una carpeta donde almacenar las particiones respaldadas. Para este ejemplo usaremos `firmware-backup`.

2. Apaga tu teléfono, mantén presionados ambos botones de volumen.

3. Ejecuta el comando de respaldo:

```bash
python mtk rl --skip userdata "firmware-backup"
```

4. Conecta tu teléfono a la computadora.

![](https://i.imgur.com/wBPSBxg.png)

*Esto es lo que se mostrará mientras se ejecuta el respaldo:*

![](https://i.imgur.com/PTG4sik.png)

5. Después de que el comando termine, revisa la carpeta para asegurarte de que el respaldo se haya realizado en la ubicación correcta y que haya _51 archivos_

![](https://i.imgur.com/HL49pJa.png)

**Listo. Continúa a [Desbloquear Bootloader](/es/guides/unlock).**

## Restauración

1. Flashea un paquete de firmware (ejemplo: [C.18](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link))

2. Restaura todas las particiones:

```bash
python mtk wl (nombre de la carpeta)
```

Para restaurar archivos específicos:

```bash
python mtk w (partición) (nombre del archivo)
```

> [!CAUTION]
>
> Se respaldará un archivo preloader dentro de la carpeta de `mtk client`. Guarda ese archivo lo más seguro posible, ya que es crucial para restaurar el firmware.
>
> **SOLO FLASHEA TU PROPIO FIRMWARE O EL FIRMWARE PROPORCIONADO EN LA GUÍA** (excluye `cdt_engineering` Y `opporeserve2` para esos).
