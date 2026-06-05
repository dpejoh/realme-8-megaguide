# Unlock Bootloader

> [!Warning]
> **YOU'LL LOSE YOUR WARRANTY.** Read every step to avoid bricking. Windows 7 is not supported. If you are on RUI4, update to F.09 or higher first.

Questions? [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) on Telegram or [GitHub Discussions](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

Already unlocked? Skip to [Patching `lk`](#patching-lk) (fastboot access) or [Custom ROM](/guides/custom-rom).

> [!CAUTION]
> **Back up first.** Follow the [Backup guide](/guides/backup) before proceeding.

The official Realme unlock (Deep Testing) no longer works. This guide uses MTK Client to unlock via BROM mode. Works on any firmware.

> [!TIP]
> Skip to [Patching `lk`](#patching-lk) or [Custom ROM](/guides/custom-rom) if your bootloader is already unlocked.

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

Install `libusb` and `python` from your package manager (ensure Python >= 3.9). Download and extract [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip), then run:

```bash
python -m pip install -r requirements.txt
```

## Downgrade to RUI2

1. **Extract** and enter the folder of [MTK Client archive](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. After extraction go into the folder 2 levels deep to find the `Requirements.txt` file. Now open the console in the folder:
	![](https://i.imgur.com/RJtobaI.png)
3. Install dependencies and send the payload:

```bash
python -m pip install -r requirements.txt
python mtk payload
```

It should look like this: 
	![](https://i.imgur.com/WSQsVj1.png)
4. Make sure your phone is powered off, hold down both **Vol+, Vol-** and connect the usb cable. You will see something like this:
	![](https://i.imgur.com/lr7HIN0.png)
5. The phone is now in BROM mode. Run the SP Flash tool (`flash_tool.exe` on Windows, `flash_tool` on Linux)
6. Click on `Options > Option...` and make sure the right **COM Port** is selected, UART enabled and baud rate is set to **921600**.
	![](https://i.imgur.com/hnMsyeN.png)
7. Get [Haadi's A.19 RUI2 Firmware](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) and unpack it
8. Load `scatter.txt` from Haadi's Firmware
    ![](https://i.imgur.com/VTwpXzC.png)
	
> [!IMPORTANT]
> **Remember to uncheck:**
| opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
| --- | --- |
| <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

> [!CAUTION]
> **Remember to have `Download Only` mode** or you will lose critical partitions.
   ![](https://i.imgur.com/M3aUNBs.png =300x)

9. Avoid moving your phone so as to not disconnect anything. This process will take up to 15-20 minutes. To get A.19 on your phone, click `Download`.
	![](https://i.imgur.com/uSXflCJ.png =300x)
10. If everything goes well, it should look like this
	![](https://i.imgur.com/qeJWt3a.png =200x)
11. Before doing anything, **WIPE the phone for safety.** Hold down **Vol-, and power button**, In recovery select wipe data, and then select **Format Data**.

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
> **You will see `dm-verity corruption` and `orange state` warnings. Press the *Power Button* to continue. These are normal and will be patched later in the guide.**

6. Set your phone up and enable **Developer Options** and verify that the bootloader is unlocked under `OEM unlocking`

> [!TIP]
> Check [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) if something does not work or you have questions.

> [!TIP]
> Your bootloader is now unlocked. You can flash **any firmware you want** at this point: RUI2 (A.19), RUI3 (C.18), RUI4 (F.11), or go straight to a custom ROM.
>
> **If you want a custom ROM:** you must be on base **C.18 (RUI3)** or **F.11 (RUI4)**.

## Flash your base firmware

> [!NOTE]
> Some custom ROMs include the base firmware in the zip. If yours does, skip this step and go to [LK patching](#patching-lk).

There are **two base options** for custom ROMs — **C.18 (RUI3)** and **F.11 (RUI4)**. The flashing process is the same for both.

Follow the [Base Firmware Guide](/guides/base-firmware) to flash either C.18 or F.11.

Proceed to [LK patching](#patching-lk) after you've flashed your chosen base.

## Patching `lk`

> [!warning]
> **This is necessary for getting fastboot access and removing dm-verity and orange state warnings.**

1. Go back to the [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) folder
2. Open the console again in `MTK Client` folder
   ![](https://i.imgur.com/RJtobaI.png)
3. Make sure your phone is powered off, hold down both **Vol+, Vol-** and connect the usb cable.
4. Read the current lk partition:

```bash
python mtk r lk lk.bin
```

The `lk.bin` file will appear in the **MTK Client** folder.
	![](https://i.imgur.com/gL4Qpc2.png)
5. Go to this [website](http://lkpatcher.cxwof.dev/). Upload your lk.bin file and the `lk-patched.bin` will be downloaded. Move it to `MTK Client` folder.
	![](https://i.imgur.com/HOve3Mv.png)
6. Flash the patched lk:

```bash
python mtk w lk lk-patched.bin
```

> [!IMPORTANT]
> Check [Manual patching](https://github.com/driedpampas/realme-8-megaguide/wiki/Patching-LK-(local)) if you have issues with the website.

> [!TIP]
> Check [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ#4-i-patched-my-lk-but-the-phone-still-says-fastboot_verify_fail) if something does not work or you have questions.

## Next Steps

- [Install a Custom ROM & Recovery](/guides/custom-rom)
- [Root your device](/guides/rooting)
- [More in the Wiki](https://github.com/driedpampas/realme-8-megaguide/wiki)
