# Flashear Firmware Base (C.18 o F.11)

> [!NOTE]
> Algunas ROMs personalizadas incluyen el firmware base en el zip. Si la tuya lo incluye, salta esta guía y ve directamente a [instalar la ROM personalizada](/es/guides/custom-rom).

Hay **dos opciones de firmware base** para ROMs personalizadas:

|      Base       | Notas                                   |
| :-------------: | :-------------------------------------- |
| **C.18 (RUI3)** | Requerido para todas las ROMs basadas en RUI3 |
| **F.11 (RUI4)** | Requerido solo para ROMs antiguas basadas en RUI4 |

Ambos usan los mismos pasos de flasheo. Solo el archivo de firmware en sí es diferente.

## Dependencias

### Windows

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- Firmware: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) o [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

### Linux

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- Firmware: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) o [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

> [!TIP]
> En Linux, los comandos `mtk` se pueden ejecutar directamente (no se necesita el prefijo `python`).

## Flasheo

Sigue el procedimiento de [SP Flash Tool](/es/reference/flash-tool), luego:

**Firmware:** Usa **C.18** o **F.11**
**Archivo scatter:** Carga el archivo scatter del firmware que descargaste

> [!TIP]
> Revisa la [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) si algo no funciona.

**BORRA el teléfono.** Mantén **Vol- + Encendido**, entra a recovery, selecciona **Format Data**.

> [!IMPORTANT]
> **Solo continúa después de haber flasheado el firmware base elegido.**
