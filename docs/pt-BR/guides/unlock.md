# Desbloquear o Bootloader

> [!Warning]
> Leia cada etapa para evitar danificar o aparelho (brick). Windows 7 não é suportado. Se você estiver no RUI4, atualize para F.09 ou superior primeiro.

Dúvidas? [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) no Telegram.

Já desbloqueou? Pule para [Patching LK](/pt-BR/guides/patching-lk) (acesso fastboot) ou [ROM Personalizada](/pt-BR/guides/custom-rom).

> [!CAUTION]
> **Faça o backup primeiro.** Siga o [Guia de Backup](/pt-BR/guides/backup) antes de prosseguir.

O desbloqueio oficial da Realme (Deep Testing) não funciona mais. Este guia usa o MTK Client para desbloquear via modo BROM. Funciona em qualquer firmware.

> [!TIP]
> Pule para [Patching LK](/pt-BR/guides/patching-lk) ou [ROM Personalizada](/pt-BR/guides/custom-rom) se o bootloader já estiver desbloqueado.

## Dependências

### Windows

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- firmware: [A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link), [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [Firmware A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)
- [Firmware C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)

### Instalando dependências

#### Windows

Instale o [Python do python.org](https://www.python.org/downloads/) (ou [Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5) como alternativa). Instale o Mediatek USB driver e o USBDk. Baixe e extraia o [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763), então execute no Prompt de Comando:

```bash
pip3 install -r requirements.txt
```

#### Linux

Instale `libusb` e `python` pelo gerenciador de pacotes (certifique-se de que Python >= 3.9). Baixe e extraia o [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip), então execute:

```bash
python -m pip install -r requirements.txt
```

> [!TIP]
> No Linux, os comandos `mtk` podem ser executados diretamente (sem o prefixo `python`).

## Downgrade para RUI2

Siga o procedimento do [SP Flash Tool](/pt-BR/reference/flash-tool), com estas alterações:

- **Firmware:** Use a [A.19 RUI2 do Haadi](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) em vez de C.18/F.11
- **Arquivo scatter:** Carregue o `scatter.txt` da pasta do firmware A.19
- **Partições para desmarcar:**

> [!IMPORTANT]
> **Lembre-se de desmarcar:**
> | opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
> | --- | --- |
> | <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

Quando terminar, **LIMPE (WIPE) o telefone.** Segure **Vol- + Power**, entre na recovery, selecione **Format Data**.

## Desbloqueando o bootloader

1. Abra o console na pasta do [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Reinicie o dispositivo, desligue-o e segure ambos **Vol+, Vol-**. **Não solte os botões até o comando terminar.**
3. Limpe os dados (isso apaga seu dispositivo):

```bash
python mtk e metadata,userdata,md_udc
```

Deve ficar assim:
   ![](https://i.imgur.com/HfPsrpU.png)
4. Desbloqueie o bootloader:

```bash
python mtk da seccfg unlock
```

Deve ficar assim:
   ![](https://i.imgur.com/Su8RtHk.png)
5. Reinicie:

```bash
python mtk reset
```

Ou segure todos os botões físicos até o telefone reiniciar.

> [!IMPORTANT]
> **A primeira inicialização levará de 5 a 20 minutos.**
> **Você verá avisos de `dm-verity corruption` e `orange state`. Pressione o *Botão Liga/Desliga* para continuar. Isso é normal e será corrigido na etapa de [Patching LK](/pt-BR/guides/patching-lk).**

6. Configure seu telefone e ative as **Opções do Desenvolvedor**. Alterne o **Desbloqueio OEM** desligado e ligado para garantir que esteja ativo.

> [!TIP]
> Consulte o [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) se algo não funcionar ou se tiver dúvidas.

> [!TIP]
> Seu bootloader agora está desbloqueado. Você pode fazer flash de **qualquer firmware** neste ponto: RUI2 (A.19), RUI3 (C.18), RUI4 (F.11), ou ir direto para uma ROM personalizada.
>
> **Se você quiser uma ROM personalizada:** você deve estar na base **C.18 (RUI3)** ou **F.11 (RUI4)**.

## Flash da firmware base

Algumas ROMs personalizadas incluem a firmware base no zip. Se a sua incluir, pule esta etapa e vá direto para [Patching LK](/pt-BR/guides/patching-lk).

Caso contrário, siga o [Guia de Firmware Base](/pt-BR/guides/base-firmware) para fazer flash de **C.18 (RUI3)** ou **F.11 (RUI4)**.

## Próximos Passos

- [Patch LK para acesso fastboot](/pt-BR/guides/patching-lk)
- [Instalar uma ROM Personalizada e Recovery](/pt-BR/guides/custom-rom)
- [Rootear seu dispositivo](/pt-BR/guides/rooting)
