# Instalando uma Recovery Personalizada e ROM

## Dependências

### Windows

- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [QcomMtk Driver](https://www.mediafire.com/file/nninaiiqy1e5csa/New+QcomMtk_Driver_Setup_V2.0.1.1_GsmMafia.Com.exe)
- [Imagem vbmeta](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!TIP]
> Se você receber o erro: `fastboot: usage: unknown reboot target recovery` tente este instalador ADB [ADB and Fastboot ++](https://github.com/K3V1991/ADB-and-FastbootPlusPlus/releases/download/v1.0.8/ADB-and-Fastboot++_v1.0.8.exe)

### Linux

- android-tools (gerenciador de pacotes ou [download](https://dl.google.com/android/repository/platform-tools-latest-linux.zip))
- `libusb`
- [Imagem vbmeta](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!IMPORTANT]
> O bootloader deve estar desbloqueado e o dispositivo deve estar na **firmware base C.18 (RUI3)** ou **F.11 (RUI4)** antes de instalar uma ROM personalizada. Veja o [guia de desbloqueio](/pt-BR/guides/unlock) se ainda não fez isso.
>
> Siga o [Guia de Firmware Base](/pt-BR/guides/base-firmware) para fazer flash de C.18 ou F.11.
>
> **Nota:** algumas ROMs personalizadas incluem a firmware base no zip. Se a sua incluir, pule a etapa da base e faça flash da ROM diretamente.

- ROMs: [grupo do Telegram](https://t.me/Realme8AOSPGroup)
- GApps: [MindTheGApps A13](https://androidfilehost.com/?fid=4279422670115734716) (se necessário)
- Recovery: [Página de Recuperações](/pt-BR/reference/recoveries)

## Reiniciando para fastboot

O dispositivo precisa estar ligado.

1. Abra um prompt de comando / terminal na pasta **platform-tools**.
2. **No telefone**, ative as Opções do Desenvolvedor e habilite o USB Debugging.
3. Verifique a conexão do dispositivo:

```bash
adb devices
```

Você verá `Allow USB Debugging for ...` no telefone, marque `Always allow...` e toque em `Allow`.

4. Reinicie para o bootloader:

```bash
adb reboot bootloader
```

O telefone reiniciará para uma tela que exibe `fastboot_unlock_verify ok`.

> [!TIP]
> Consulte o [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) se algo não funcionar ou se tiver dúvidas.

## Instalando a recovery personalizada e fazendo sideload da ROM personalizada

> [!TIP]
> Se estiver alternando entre ROMs personalizadas, pule o passo 2.
> Se a recovery necessária não mudou, você pode pular o passo 3.

1. Mova os arquivos `recovery.img` e `vbmeta.img` para a pasta **platform-tools**.
2. Faça flash do vbmeta:

```bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

Deve mostrar:
![](https://i.imgur.com/MZZyTBc.png)

3. Faça flash da recovery:

```bash
fastboot flash recovery recovery.img
```

![](https://i.imgur.com/t7wYi3R.png)

O telefone deve mostrar `USB Transmission ok`.

4. Reinicie para a recovery:

```bash
fastboot reboot recovery
```

![](https://i.imgur.com/1zwXUmj.png)

5. Na recovery, vá em `Factory reset > Format data/factory reset > Format data`. **Após** o factory reset, volte e selecione `Apply update > Apply from ADB`. Verifique a conexão do dispositivo:

```bash
adb devices
```

Você deve ver isto:
![](https://i.imgur.com/MoiIS9k.png)

6. Faça sideload da ROM personalizada:

```bash
adb sideload custom-rom.zip
```

Substitua `custom-rom.zip` pelo nome real do arquivo. Por exemplo, fiz flash do LeafOS 2:
![](https://i.imgur.com/QZqi1e1.png)

7. **SOMENTE** faça este passo em ROMs personalizadas **SEM GAPPS / GMS** (verifique a descrição da ROM). Selecione `Apply update > Apply from ADB` novamente e faça sideload do GApps:

```bash
adb sideload gapps.zip
```

Substitua `gapps.zip` pelo nome real do pacote.
![](https://i.imgur.com/DUEMXrn.png)

> **Se você receber um erro "Signature verification error" no telefone**, clique em `Yes` para continuar mesmo assim; isso se aplica a qualquer outro ZIP que você fizer flash.

8. Quando terminar, na recovery volte e selecione `Reboot system now`. O telefone reiniciará na sua ROM personalizada.

> [!TIP]
> Consulte o [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) se algo não funcionar ou se tiver dúvidas.
