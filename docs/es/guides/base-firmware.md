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

1. Abre la consola en la carpeta de [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
   ![](https://i.imgur.com/RJtobaI.png)
2. Envía el payload:

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. Apaga tu teléfono, mantén presionados ambos **Vol+, Vol-** y conecta el cable USB.
4. MTK Client detectará el dispositivo en modo BROM:
   ![](https://i.imgur.com/lr7HIN0.png)
5. Ejecuta SP Flash tool (`flash_tool.exe` en Windows, `flash_tool` en Linux)
6. Haz clic en `Options > Option...`, selecciona el **Puerto COM** correcto, habilita UART, configura la velocidad de baudios a **921600**.
   ![](https://i.imgur.com/hnMsyeN.png)
7. Obtén el firmware **C.18** o **F.11** y descomprímelo
8. Carga el scatter file del firmware:
   ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> Recuerda desmarcar:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

> [!CAUTION]
> Configura el modo en **`Download Only`** o perderás particiones críticas.
> ![](https://i.imgur.com/M3aUNBs.png =300x)

9. Coloca tu teléfono en una superficie estable. El proceso toma 15-20 minutos. Haz clic en `Download`. [**¿Sin progreso?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png =300x)
10. Cuando termine, debería verse así:
    ![](https://i.imgur.com/qeJWt3a.png =200x)

> [!TIP]
> Revisa la [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) si algo no funciona.

11. **BORRA el teléfono por seguridad.** Mantén **Vol- + Encendido**, entra a recovery, selecciona **Format Data**.

> [!IMPORTANT]
> **Solo continúa después de haber flasheado el firmware base elegido.**
