# SP Flash Tool

> [!CAUTION]
> **Configura el modo `Download Only` o perderás particiones críticas.**
> ![](https://i.imgur.com/M3aUNBs.png )

> [!IMPORTANT]
> Recuerda desmarcar:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

## Procedimiento

1. Abre la consola en la carpeta de [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
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
7. Extrae tu firmware y carga el archivo scatter:
   ![](https://i.imgur.com/VTwpXzC.png)
8. Coloca tu teléfono en una superficie estable. El proceso toma 15-20 minutos. Haz clic en `Download`. [**¿Sin progreso?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png )
9. Cuando termine debería verse así:
   ![](https://i.imgur.com/qeJWt3a.png )

> [!TIP]
> En Linux, los comandos `mtk` se pueden ejecutar directamente (no se necesita el prefijo `python`).
