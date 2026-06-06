# Root

> [!IMPORTANT]
> Use apenas **um** método: [Magisk](#com-magisk) ou [KernelSU](#com-kernelsu).

## Com Magisk

### Você vai precisar

### Windows

- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [APK do Magisk Manager](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

### Linux

- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
- [APK do Magisk Manager](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

> [!TIP]
> No Linux, os comandos `mtk` podem ser executados diretamente (sem o prefixo `python`).

1. Abra o console na pasta do MTK Client.
2. Leia a partição boot:

```bash
python mtk r boot boot.img
```

Desligue o dispositivo, segure ambos **Vol+, Vol-** e conecte o dispositivo ao computador.
3. Um arquivo `boot.img` será criado na pasta. Ligue o dispositivo e copie o arquivo para ele.
4. Navegue até onde você baixou o arquivo APK do Magisk Manager e instale-o.
5. Abra o Magisk Manager e clique em instalar ao lado de `Magisk`.
![](https://i.imgur.com/CAbHxPv.png =400x)

6. Selecione `Select and patch a file`. O seletor de arquivos será aberto. Encontre e selecione o `boot.img` que você extraiu. Em seguida, toque em `let's go`.
![](https://i.imgur.com/4m7CJfB.png)

7. Quando você ver esta tela, o patch foi concluído e o caminho do arquivo `.img` modificado será fornecido. Copie esse arquivo para o computador na pasta `platform-tools`.
   ![](https://i.imgur.com/D9qyjbGm.png)

8. Conecte o telefone ao computador e ative o USB Debugging no telefone.
9. Na pasta `platform-tools`, abra um Prompt de Comando e verifique a conexão do dispositivo:

```bash
adb devices
```

Aceite o USB Debugging no telefone. Em seguida, reinicie para o bootloader:

```bash
adb reboot bootloader
```

O telefone reiniciará para uma tela `fastboot_unlock_verify ok`.

10. Faça flash da imagem boot modificada:

```bash
fastboot flash boot magisk_patched-xxxxx.img
```

Substitua `magisk_patched-xxxxx.img` pelo nome real do arquivo. Em seguida, reinicie:

```bash
fastboot reboot
```

11. O telefone reiniciará e agora você está com root via Magisk.

> **Nota:** Você receberá um prompt para reiniciar para concluir a instalação.

### Para remover o root do Magisk

Selecione `Uninstall > Complete uninstall` no aplicativo Magisk Manager.

## Com KernelSU

> [!WARNING]
> **Funciona apenas em ROMs personalizadas.**

> [!IMPORTANT]
> Se você mantiver o telefone conectado enquanto reinicia quando estiver com root via KSU, ele entrará em bootloop e irá para a recovery. Desconecte o telefone antes de reiniciar.

### Você vai precisar

> [!TIP]
> Consulte [Kernels](/pt-BR/reference/kernels) para mais informações.

- [KernelSU zip](https://github.com/HowWof/KernelSU_Builder/releases/latest)
- [APK do KSU manager](https://github.com/tiann/KernelSU/releases/download/v1.0.0/KernelSU_v1.0.0_11874-release.apk)

1. Reinicie para a recovery:

```bash
adb reboot recovery
```

2. Na recovery, selecione `Apply update > Apply from ADB` e faça sideload:

```bash
adb sideload kernelsu.zip
```

> **Se você receber um erro "Signature verification error"**, continue mesmo assim, o pacote ainda será instalado; isso se aplica a qualquer outro ZIP que você fizer flash.

3. Quando concluído, toque em `Reboot system now`. O telefone reiniciará. Navegue até onde você baixou o arquivo APK do KernelSU Manager e instale-o.
4. O aplicativo deve mostrar assim, indicando que tudo foi feito corretamente:
![](https://i.imgur.com/XhOFSXP.png)

### Para remover o root do KernelSU

Extraia o `custom-rom.zip` que você baixou para fazer flash da ROM, encontre e mova o `boot.img` para a pasta onde está o ADB e execute:

```bash
adb reboot bootloader
fastboot flash boot boot.img
```
