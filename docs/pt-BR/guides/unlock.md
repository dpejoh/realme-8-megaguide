# Desbloquear o Bootloader

> [!Warning]
> Leia cada etapa para evitar danificar o aparelho (brick). Windows 7 não é suportado. Se você estiver no RUI4, atualize para F.09 ou superior primeiro.

Dúvidas? [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) no Telegram ou [Discussões no GitHub](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

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

Instale o [Python da Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5). Instale o Mediatek USB driver e o USBDk. Baixe e extraia o [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763), então execute no Prompt de Comando:

```bash
pip3 install -r requirements.txt
```

#### Linux

Instale `libusb` e `python` pelo gerenciador de pacotes (certifique-se de que Python >= 3.9). Baixe e extraia o [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip), então execute:

```bash
python -m pip install -r requirements.txt
```

## Downgrade para RUI2

1. **Extraia** e entre na pasta do [arquivo do MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Após a extração, vá para a pasta 2 níveis abaixo para encontrar o arquivo `Requirements.txt`. Agora abra o console na pasta:
	![](https://i.imgur.com/RJtobaI.png)
3. Instale as dependências e envie o payload:

```bash
python -m pip install -r requirements.txt
python mtk payload
```

Deve ficar assim:
	![](https://i.imgur.com/WSQsVj1.png)
4. Certifique-se de que o telefone está desligado, segure ambos **Vol+, Vol-** e conecte o cabo USB. Você verá algo assim:
	![](https://i.imgur.com/lr7HIN0.png)
5. O telefone está agora em modo BROM. Execute o SP Flash tool (`flash_tool.exe` no Windows, `flash_tool` no Linux)
6. Clique em `Options > Option...` e certifique-se de que a **COM Port** correta está selecionada, UART habilitado e a taxa de transmissão (baud rate) configurada para **921600**.
	![](https://i.imgur.com/hnMsyeN.png)
7. Obtenha a [Firmware A.19 RUI2 do Haadi](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) e descompacte-a
8. Carregue o `scatter.txt` da Firmware do Haadi
    ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> **Lembre-se de desmarcar:**
> | opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
> | --- | --- |
> | <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

> [!CAUTION]
> **Lembre-se de usar o modo `Download Only`** ou você perderá partições críticas.
   ![](https://i.imgur.com/M3aUNBs.png =300x)

9. Evite mexer no telefone para não desconectar nada. Este processo levará de 15 a 20 minutos. Para instalar A.19 no telefone, clique em `Download`.
	![](https://i.imgur.com/uSXflCJ.png =300x)
10. Se tudo correr bem, deve ficar assim:
	![](https://i.imgur.com/qeJWt3a.png =200x)
11. Antes de fazer qualquer coisa, **LIMPE (WIPE) o telefone por segurança.** Segure **Vol- e o botão liga/desliga**. Na recovery, selecione wipe data e depois **Format Data**.

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

6. Configure o telefone e ative **Opções do Desenvolvedor** e verifique se o bootloader está desbloqueado em `OEM unlocking`.

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
