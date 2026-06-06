# Flash da Firmware Base (C.18 ou F.11)

> [!NOTE]
> Algumas ROMs personalizadas incluem a firmware base no zip. Se a sua incluir, pule este guia e vá direto para [instalar a ROM personalizada](/pt-BR/guides/custom-rom).

Existem **duas opções de firmware base** para ROMs personalizadas:

|      Base       | Observações                                  |
| :-------------: | :------------------------------------------- |
| **C.18 (RUI3)** | Necessária para todas as ROMs baseadas em RUI3 |
| **F.11 (RUI4)** | Necessária apenas para ROMs antigas baseadas em RUI4 |

Ambas usam os mesmos passos de flash. Apenas o arquivo da firmware em si é diferente.

## Dependências

### Windows

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- Firmware: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) ou [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

### Linux

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- Firmware: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) ou [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

> [!TIP]
> No Linux, os comandos `mtk` podem ser executados diretamente (sem o prefixo `python`).

## Flashing

1. Abra o console na pasta do [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
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
6. Clique em `Options > Option...`, selecione a **COM Port** correta, habilite UART, configure a taxa de transmissão (baud rate) para **921600**.
   ![](https://i.imgur.com/hnMsyeN.png)
7. Obtenha a firmware **C.18** ou **F.11** e descompacte-a
8. Carregue o scatter file da firmware:
   ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> Lembre-se de desmarcar:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

> [!CAUTION]
> Configure o modo para **`Download Only`** ou você perderá partições críticas.
> ![](https://i.imgur.com/M3aUNBs.png =300x)

9. Coloque o telefone em uma superfície estável. O processo leva de 15 a 20 minutos. Clique em `Download`. [**Sem progresso?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png =300x)
10. Quando terminar, deve ficar assim:
    ![](https://i.imgur.com/qeJWt3a.png =200x)

> [!TIP]
> Consulte o [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) se algo não funcionar.

11. **LIMPE (WIPE) o telefone por segurança.** Segure **Vol- + Power**, entre na recovery, selecione **Format Data**.

> [!IMPORTANT]
> **Continue somente após fazer flash da firmware base escolhida.**
