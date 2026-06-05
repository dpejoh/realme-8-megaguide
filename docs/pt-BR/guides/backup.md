# Backup

Este método faz um backup da _firmware_ caso o IMEI seja apagado ou o sistema seja danificado (brick).

> [!NOTE]
>
> O backup pula a `userdata` (arquivos pessoais) por padrão. Dumps brutos não são práticos de restaurar. Você também pode pular `super` com `--skip userdata,super` se quiser um backup menor. A partição super sempre pode ser restaurada a partir de um pacote de firmware.
>
> Faça backup dos dados pessoais separadamente via armazenamento na nuvem ou transferência manual.

## Dependências

### Windows

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)

## Backup

1. Prepare uma pasta para armazenar as partições copiadas. Para este exemplo, usaremos `firmware-backup`.

2. Desligue o telefone, segure ambos os botões de volume.

3. Execute o comando de backup:

```bash
python mtk rl --skip userdata "firmware-backup"
```

4. Conecte o telefone ao computador.

![](https://i.imgur.com/wBPSBxg.png)

*É isso que será exibido enquanto o backup estiver rodando:*

![](https://i.imgur.com/PTG4sik.png)

5. Após o comando terminar, verifique a pasta para ter certeza de que o backup foi feito no local correto e que há _51 arquivos_.

![](https://i.imgur.com/HL49pJa.png)

**Pronto. Continue para [Desbloquear o Bootloader](/pt-BR/guides/unlock).**

## Restauração

1. Faça flash de um pacote de firmware (exemplo: [C.18](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link))

2. Restaure todas as partições:

```bash
python mtk wl (nome da pasta)
```

Para restaurar arquivos específicos:

```bash
python mtk w (partição) (nome do arquivo)
```

> [!CAUTION]
>
> Um arquivo preloader será copiado dentro da pasta do `mtk client`. Mantenha esse arquivo o mais seguro possível, pois ele é crucial para restaurar a firmware.
>
> **FLASH APENAS SUA PRÓPRIA FIRMWARE OU A FIRMWARE FORNECIDA NO GUIA** (exclua `cdt_engineering` E `opporeserve2` para essas).
