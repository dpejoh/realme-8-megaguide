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

## Flash

Siga o procedimento do [SP Flash Tool](/pt-BR/reference/flash-tool), depois:

**Firmware:** Use **C.18** ou **F.11**
**Arquivo scatter:** Carregue o scatter file da firmware que você baixou

> [!TIP]
> Consulte o [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) se algo não funcionar.

**LIMPE (WIPE) o telefone.** Segure **Vol- + Power**, entre na recovery, selecione **Format Data**.

> [!IMPORTANT]
> **Continue somente após fazer flash da firmware base escolhida.**
