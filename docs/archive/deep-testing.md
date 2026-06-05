# NO LONGER WORKS, REALME HAS REMOVED THE R8 FROM THE SERVERS

> [!Warning]
> **This method no longer works. These steps are kept for reference only.**

Questions? Message [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) on Telegram or start a new [Github Discussion](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

Already unlocked? Skip to [Installing a Custom recovery and ROM](/guides/custom-rom).

**Disclaimer:** NO WARRANTY, as permitted by law. Windows 7 is not supported.

## Prerequisites

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [adb tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- Firmware: [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- APK: [Deep Testing](https://drive.google.com/file/d/1pESMmJef6Gm9YlJAE7OA_DDNnhFn3Jpz/view?usp=sharing)

## Back up your system partitions

> [!CAUTION]
> HAVE YOU BACKED UP ALREADY? IF NOT FOLLOW THE [Backup guide](/guides/backup)

## Unlocking

### Installing prerequisites

1. **Mediatek USB**
   1. **Extract** and enter the folder of [Mediatek USB](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing) driver.
   2. Find the **.inf** file, right click and press install
   ![](https://i.imgur.com/niVRaOn.png)
2. Install [USBDk](https://github.com/daynix/UsbDk/releases/)
3. Install [Python from Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)

### Flash RUI3 C.18

1. **Extract** and enter the folder of [MTK Client archive](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. Open the console in [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) folder
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

5. The phone is now in BROM mode. Run the [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing) `flash_tool.exe`

6. Click on `Options > Option...` and make sure the right **COM Port** is selected, UART enabled and baud rate is set to **921600**.

![](https://i.imgur.com/hnMsyeN.png)

7. Get [C.18 Firmware](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download) and unpack it
8. Load `MT6785_Android_scatter.txt` from the firmware's folder
   ![](https://i.imgur.com/8APQvkx.png)

> [!CAUTION] 
> **Remember to have `Download Only` mode** or you will lose critical partitions.

![](https://i.imgur.com/M3aUNBs.png =300x)

9. This process will take up to 15-20 minutes. To begin, click `Download` ([**No progress? Click me**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)). Make sure to not disconnect your phone.
![](https://i.imgur.com/uSXflCJ.png =300x)

10. If everything goes well, it should look like this
![](https://i.imgur.com/qeJWt3a.png =200x)

11. Before doing anything, **WIPE the phone for safety.** Hold down **Vol-, and power button**, In recovery select wipe data, and then select **Format Data**.

### Unlocking the bootloader with Deep Testing

1. Download and install the deep testing app, tap "Apply Now" and accept the agreement, you should be seeing this now:
![](https://i.imgur.com/MTeSOl3.png =300x)

2. Close the app and swipe away from recents. Open the app again and tap Query verification status. You should now see this:
![](https://i.imgur.com/FEN05v9.png =300x)

3. Tap "Start deep testing" and the device will reboot to fastboot mode:
![](https://i.imgur.com/G6NeOCQ.png =300x)

4. The device will reboot to fastboot mode. To unlock the bootloader plug the device into a PC and run:

```bash
fastboot flashing unlock
```

You should see this:
![](https://i.imgur.com/iYp4XAP.png =600x)

5. Press `Volume up` and the bootloader will be unlocked.

## Installing a Custom Recovery and ROM

Go to [Custom ROM Guide](/guides/custom-rom).

## Rooting

Go to [Rooting](/guides/rooting).
