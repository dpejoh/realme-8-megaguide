# Parchar LK

> [!Warning]
> **Necesario para acceso fastboot y eliminar las advertencias de dm-verity / orange state.**

Asegúrate de que tu bootloader esté desbloqueado primero. Consulta la guía de [Desbloquear Bootloader](/es/guides/unlock) si aún no lo has hecho.

## Parchar y flashear

1. Abre una consola en la carpeta de [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Apaga tu teléfono, mantén presionados ambos **Vol+, Vol-**, y conecta el cable USB
3. Lee la partición lk actual:

```bash
python mtk r lk lk.bin
```

El archivo `lk.bin` aparecerá en la carpeta de MTK Client.

4. Ve a [lkpatcher.cxwof.dev](http://lkpatcher.cxwof.dev/), sube tu `lk.bin`, y descarga `lk-patched.bin`. Muévelo a la carpeta de MTK Client.
5. Flashea el lk parcheado:

```bash
python mtk w lk lk-patched.bin
```

> [!IMPORTANT]
> Revisa [Parchado manual](https://github.com/driedpampas/realme-8-megaguide/wiki/Patching-LK-(local)) si el sitio web no funciona.

> [!TIP]
> Revisa la [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ#4-i-patched-my-lk-but-the-phone-still-says-fastboot_verify_fail) si algo no funciona.

## Siguientes pasos

- [Instalar una ROM Personalizada y Recovery](/es/guides/custom-rom)
- [Hacer root a tu dispositivo](/es/guides/rooting)
