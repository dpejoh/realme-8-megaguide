# SP Flash Tool

> [!CAUTION]
> **Defina o modo `Download Only` ou você perderá partições críticas.**
> ![](https://i.imgur.com/M3aUNBs.png )

> [!IMPORTANT]
> Lembre-se de desmarcar:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

## Procedimento

1. Abra o console na pasta do [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
   ![](https://i.imgur.com/RJtobaI.png)
2. Envie o payload:

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. Desligue o telefone, segure ambos **Vol+, Vol-** e conecte o cabo USB.
4. O MTK Client detectará o dispositivo em modo BROM:
   ![](https://i.imgur.com/lr7HIN0.png)
5. Execute o SP Flash tool (`flash_tool.exe` no Windows, `flash_tool` no Linux)
6. Clique em `Options > Option...`, selecione a **COM Port** correta, habilite UART, defina a taxa de transmissão para **921600**.
   ![](https://i.imgur.com/hnMsyeN.png)
7. Extraia sua firmware e carregue o arquivo scatter:
   ![](https://i.imgur.com/VTwpXzC.png)
8. Coloque o telefone em uma superfície estável. O processo leva 15-20 minutos. Clique em `Download`. [**Sem progresso?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png )
9. Quando terminar deve ficar assim:
   ![](https://i.imgur.com/qeJWt3a.png )

> [!TIP]
> No Linux, os comandos `mtk` podem ser executados diretamente (sem o prefixo `python`).
