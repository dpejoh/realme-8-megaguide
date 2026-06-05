# Patching LK

> [!Warning]
> **Necessário para acesso fastboot e remoção dos avisos de dm-verity / orange state.**

Certifique-se de que o bootloader está desbloqueado primeiro. Veja o guia [Desbloquear Bootloader](/pt-BR/guides/unlock) se ainda não fez isso.

## Patch e flash

1. Abra um console na pasta do [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Desligue o telefone, segure ambos **Vol+, Vol-** e conecte o cabo USB
3. Leia a partição lk atual:

```bash
python mtk r lk lk.bin
```

O arquivo `lk.bin` aparece na pasta do MTK Client.

4. Acesse [lkpatcher.cxwof.dev](http://lkpatcher.cxwof.dev/), envie seu `lk.bin` e baixe `lk-patched.bin`. Mova-o para a pasta do MTK Client.
5. Faça flash do lk modificado:

```bash
python mtk w lk lk-patched.bin
```

> [!IMPORTANT]
> Consulte [Patching manual](https://github.com/driedpampas/realme-8-megaguide/wiki/Patching-LK-(local)) se o site não funcionar.

> [!TIP]
> Consulte o [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ#4-i-patched-my-lk-but-the-phone-still-says-fastboot_verify_fail) se algo não funcionar.

## Próximos Passos

- [Instalar uma ROM Personalizada e Recovery](/pt-BR/guides/custom-rom)
- [Rootear seu dispositivo](/pt-BR/guides/rooting)
