# Unlock Bootloader

> [!Warning]
> Read every step to avoid bricking. Windows 7 is not supported. If you are on RUI4, update to F.09 or higher first.

Questions? [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) on Telegram.

Already unlocked? Skip to [Patching LK](/guides/patching-lk) (fastboot access) or [Custom ROM](/guides/custom-rom).

> [!CAUTION]
> **Back up first.** Follow the [Backup guide](/guides/backup) before proceeding.

The official Realme unlock (Deep Testing) no longer works. This guide uses MTK Client to unlock via BROM mode. Works on any firmware.

> [!TIP]
> Skip to [Patching LK](/guides/patching-lk) or [Custom ROM](/guides/custom-rom) if your bootloader is already unlocked.

## Dependencies

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
- [A.19 RUI2 firmware](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)
- [C.18 RUI3 firmware](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)

### Installing dependencies

#### Windows

Install [Python from Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5). Install the Mediatek USB driver and USBDk. Download and extract [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763), then run in a Command Prompt:

```bash
pip3 install -r requirements.txt
```

#### Linux

Install `libusb` and `python` from your package manager (ensure Python >= 3.9). Download and extract [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip), then create a virtual environment and install requirements:

```bash
python3 -m venv venv
sudo venv/bin/pip install -r requirements.txt
```

> [!TIP]
> On Linux, after the dependencies are installed, `mtk` commands can be run directly (no `python` prefix needed).

## Downgrade to RUI2

Follow the [SP Flash Tool](/reference/flash-tool) procedure, with these changes:

- **Firmware:** Use [Haadi's A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) instead of C.18/F.11
- **Scatter file:** Load `scatter.txt` from the A.19 firmware folder
- **Partitions to uncheck:**

> [!IMPORTANT]
> **Remember to uncheck:**
> | opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
> | --- | --- |
> | <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

When done, **WIPE the phone.** Hold **Vol- + Power**, enter recovery, select **Format Data**.

## Unlocking the bootloader

1. Open the console in [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) folder
2. Reboot your device, turn it off and hold down both **Vol+, Vol-**. **Don't leave the buttons until the command is done.**
3. Wipe data (this erases your device):

```bash
python mtk e metadata,userdata,md_udc
```

It should look like this:
   ![](https://i.imgur.com/HfPsrpU.png)
4. Unlock the bootloader:

```bash
python mtk da seccfg unlock
```

It should look like this:
   ![](https://i.imgur.com/Su8RtHk.png)
5. Reboot:

```bash
python mtk reset
```

Or hold all hardware buttons until the phone reboots.
 
> [!IMPORTANT]  
> **First boot will take around 5-20 minutes.**
> **You will see `dm-verity corruption` and `orange state` warnings. Press the *Power Button* to continue. These are normal and will be patched in the [LK patching](/guides/patching-lk) step.**

6. Set your phone up and enable **Developer Options** and verify that the bootloader is unlocked under `OEM unlocking`

> [!TIP]
> Check [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) if something does not work or you have questions.

> [!TIP]
> Your bootloader is now unlocked. You can flash **any firmware you want** at this point: RUI2 (A.19), RUI3 (C.18), RUI4 (F.11), or go straight to a custom ROM.
>
> **If you want a custom ROM:** you must be on base **C.18 (RUI3)** or **F.11 (RUI4)**.

## Flash base firmware

Some custom ROMs include the base firmware in the zip. If yours does, skip this and go straight to [Patching LK](/guides/patching-lk).

Otherwise follow the [Base Firmware Guide](/guides/base-firmware) to flash **C.18 (RUI3)** or **F.11 (RUI4)**.

## Next Steps

- [Patch LK for fastboot access](/guides/patching-lk)
- [Install a Custom ROM & Recovery](/guides/custom-rom)
- [Root your device](/guides/rooting)
