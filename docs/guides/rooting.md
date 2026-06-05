# Rooting

> [!IMPORTANT]
> Only use **one** method: [Magisk](#with-magisk) or [KernelSU](#with-kernelsu).

## With Magisk

### You will need

### Windows

- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

### Linux

- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

1. Open the console in MTK Client's folder.
2. Read the boot partition:

```bash
python mtk r boot boot.img
```

Turn your device off, hold down both **Vol+, Vol-** and connect the device to the computer.
3. A `boot.img` file will be created in the folder. Turn your device on and copy the file to it.
4. Navigate to where you downloaded the Magisk Manager apk file and install it.
5. Open Magisk Manager and click install next to `Magisk`.
![](https://i.imgur.com/CAbHxPv.png =400x)

6. Select `Select and patch a file`. The file picker will open, Find and select the `boot.img` you extracted. Then tap `let's go`.
![](https://i.imgur.com/4m7CJfB.png)

7. When you see this screen, the patching is done and you will be given the path of the patched `.img file`. Copy that file to your computer in the `platform-tools` folder.  
   ![](https://i.imgur.com/D9qyjbGm.png)

8. Connect your phone to your computer and enable USB debugging on your phone.
9. In the `platform-tools` folder open a Command Prompt and check device connection:

```bash
adb devices
```

Accept USB Debugging on your phone. Then reboot to bootloader:

```bash
adb reboot bootloader
```

The phone will reboot to a `fastboot_unlock_verify ok` screen.

10. Flash the patched boot image:

```bash
fastboot flash boot magisk_patched-xxxxx.img
```

Replace `magisk_patched-xxxxx.img` with your actual filename. Then reboot:

```bash
fastboot reboot
```

11. The phone will restart and you are now rooted with Magisk.

> **Note:** You will get a prompt to reboot to finish the installation.

### To remove Magisk root

Select `Uninstall > Complete uninstall` in the Magisk Manager app.

## With KernelSU

> [!WARNING]
> **Only works on custom ROMs.**

> [!IMPORTANT]
> If you keep your phone plugged in while rebooting when rooted with KSU it will bootloop and go to recovery. Unplug your phone before rebooting.

### You will need

> [!TIP]
> Refer to [Kernels](/reference/kernels) for more info

- [KernelSU zip](https://github.com/HowWof/KernelSU_Builder/releases/latest)
- [KSU manager APK](https://github.com/tiann/KernelSU/releases/download/v1.0.0/KernelSU_v1.0.0_11874-release.apk)

1. Reboot to recovery:

```bash
adb reboot recovery
```

2. In recovery select `Apply update > Apply from ADB` and sideload:

```bash
adb sideload kernelsu.zip
```

> **If you get a "Signature verification error"** continue anyways, the package will still flash, this goes the same to any other ZIPs you flash.

3. When completed tap `Reboot system now`. Your phone will restart. Navigate to where you downloaded the KernelSU Manager apk file and install it.
4. The app should show like this indicating that everything has been done correctly:
![](https://i.imgur.com/XhOFSXP.png)

### To remove KernelSU root

Extract the `custom-rom.zip` you downloaded to flash the ROM, find and move the `boot.img` to the folder where adb is and run:

```bash
adb reboot bootloader
fastboot flash boot boot.img
```
