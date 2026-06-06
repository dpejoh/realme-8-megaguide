# NÃO FUNCIONA MAIS, A REALME REMOVEU O R8 DOS SERVIDORES

> [!Warning]
> **Este método não funciona mais. Estas etapas são mantidas apenas para referência.**

Dúvidas? Envie mensagem para [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) no Telegram ou inicie uma nova [Discussão no GitHub](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

Já desbloqueou? Pule para [Instalar uma Recovery personalizada e ROM](/pt-BR/guides/custom-rom).

**Aviso:** SEM GARANTIA, conforme permitido por lei. Windows 7 não é suportado.

## Pré-requisitos

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [Ferramentas adb](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- Firmware: [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- APK: [Deep Testing](https://drive.google.com/file/d/1pESMmJef6Gm9YlJAE7OA_DDNnhFn3Jpz/view?usp=sharing)

> [!TIP]
> No Linux, os comandos `mtk` podem ser executados diretamente (sem o prefixo `python`).

## Faça backup das partições do sistema

> [!CAUTION]
> JÁ FEZ O BACKUP? SE NÃO, SIGA O [Guia de Backup](/pt-BR/guides/backup)

## Desbloqueio

### Instalando pré-requisitos

1. **Mediatek USB**
   1. **Extraia** e entre na pasta do driver [Mediatek USB](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing).
   2. Encontre o arquivo **.inf**, clique com o botão direito e pressione instalar.
   ![](https://i.imgur.com/niVRaOn.png)
2. Instale o [USBDk](https://github.com/daynix/UsbDk/releases/)
3. Instale o [Python da Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)

### Flash RUI3 C.18

1. **Extraia** e entre na pasta do [arquivo do MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Abra o console na pasta do [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
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

5. O telefone está agora em modo BROM. Execute o [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing) `flash_tool.exe`

6. Clique em `Options > Option...` e certifique-se de que a **COM Port** correta está selecionada, UART habilitado e a taxa de transmissão (baud rate) configurada para **921600**.

![](https://i.imgur.com/hnMsyeN.png)

7. Obtenha a [Firmware C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download) e descompacte-a
8. Carregue o `MT6785_Android_scatter.txt` da pasta da firmware
   ![](https://i.imgur.com/8APQvkx.png)

> [!CAUTION]
> **Lembre-se de usar o modo `Download Only`** ou você perderá partições críticas.

![](https://i.imgur.com/M3aUNBs.png =300x)

9. Este processo levará de 15 a 20 minutos. Para começar, clique em `Download` ([**Sem progresso? Clique aqui**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)). Certifique-se de não desconectar o telefone.
![](https://i.imgur.com/uSXflCJ.png =300x)

10. Se tudo correr bem, deve ficar assim:
![](https://i.imgur.com/qeJWt3a.png =200x)

11. Antes de fazer qualquer coisa, **LIMPE (WIPE) o telefone por segurança.** Segure **Vol- e o botão liga/desliga**. Na recovery, selecione wipe data e depois **Format Data**.

### Desbloqueando o bootloader com Deep Testing

1. Baixe e instale o aplicativo deep testing, toque em "Apply Now" e aceite o acordo. Você deve ver isto agora:
![](https://i.imgur.com/MTeSOl3.png =300x)

2. Feche o aplicativo e remova-o dos recentes. Abra o aplicativo novamente e toque em Query verification status. Agora você deve ver isto:
![](https://i.imgur.com/FEN05v9.png =300x)

3. Toque em "Start deep testing" e o dispositivo reiniciará para o modo fastboot:
![](https://i.imgur.com/G6NeOCQ.png =300x)

4. O dispositivo reiniciará para o modo fastboot. Para desbloquear o bootloader, conecte o dispositivo a um PC e execute:

```bash
fastboot flashing unlock
```

Você deve ver isto:
![](https://i.imgur.com/iYp4XAP.png =600x)

5. Pressione `Volume up` e o bootloader será desbloqueado.

## Instalando uma Recovery Personalizada e ROM

Vá para o [Guia de ROM Personalizada](/pt-BR/guides/custom-rom).

## Root

Vá para [Root](/pt-BR/guides/rooting).
