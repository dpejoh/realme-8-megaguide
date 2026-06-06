# Installing a Custom Recovery and ROM

## Dependencies

### Windows

- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [QcomMtk Driver](https://www.mediafire.com/file/nninaiiqy1e5csa/New+QcomMtk_Driver_Setup_V2.0.1.1_GsmMafia.Com.exe)
- [vbmeta image](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!TIP]
> If you get an error: `fastboot: usage: unknown reboot target recovery` try this adb installer [ADB and Fastboot ++](https://github.com/K3V1991/ADB-and-FastbootPlusPlus/releases/download/v1.0.8/ADB-and-Fastboot++_v1.0.8.exe)

### Linux

- android-tools (package manager or [download](https://dl.google.com/android/repository/platform-tools-latest-linux.zip))
- `libusb`
- [vbmeta image](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!IMPORTANT]
> Your bootloader must be unlocked and your device must be on **base firmware C.18 (RUI3)** or **F.11 (RUI4)** before installing a custom ROM. See the [unlocking guide](/guides/unlock) if you haven't done this yet.
>
> Follow the [Base Firmware Guide](/guides/base-firmware) to flash either C.18 or F.11.
>
> **Note:** some custom ROMs include the base firmware in the zip. If yours does, skip the base step and flash the ROM directly.

- ROMs: [Telegram group](https://t.me/Realme8AOSPGroup)
- GApps: [MindTheGApps](https://github.com/MindTheGapps) or [NikGApps](https://sourceforge.net/projects/nikgapps/files/) (if needed)
- Recovery: [Recoveries page](/reference/recoveries)

## Rebooting to fastboot

Your device needs to be turned on.

1. Open a command prompt / terminal window in the **platform-tools** folder.
2. **On your phone**, enable Developer Options and enable USB Debugging.
3. Check device connection:

```bash
adb devices
```

You will see `Allow USB Debugging for ...` on phone, check `Always allow...` and hit `Allow`.

4. Reboot to bootloader:

```bash
adb reboot bootloader
```

Phone will reboot to a screen that says `fastboot_unlock_verify ok`.

> [!TIP]
> Check [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) if something does not work or you have questions

## Installing custom recovery and sideloading custom rom

> [!TIP]
> If switching between custom roms skip step 2.
> If the required recovery has not changed you may skip step 3.

1. Move the `recovery.img` and `vbmeta.img` files to the **platform-tools** folder.
2. Flash vbmeta:

```bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

It should show
![](https://i.imgur.com/MZZyTBc.png)

3. Flash recovery:

```bash
fastboot flash recovery recovery.img
```

![](https://i.imgur.com/t7wYi3R.png)

The phone should show `USB Transmission ok`.

4. Reboot to recovery:

```bash
fastboot reboot recovery
```

![](https://i.imgur.com/1zwXUmj.png)

5. In recovery, go to `Factory reset > Format data/factory reset > Format data`. **After** factory reset go back and select `Apply update > Apply from ADB`. Check device connection:

```bash
adb devices
```

You should see this:
![](https://i.imgur.com/MoiIS9k.png)

6. Sideload the custom ROM:

```bash
adb sideload custom-rom.zip
```

Replace `custom-rom.zip` with the actual filename. For example I flashed LeafOS 2:
![](https://i.imgur.com/QZqi1e1.png)

7. **ONLY** do this step on custom roms **WITHOUT GAPPS / GMS** (check the rom's description to check). Select `Apply update > Apply from ADB` again and sideload GApps:

```bash
adb sideload gapps.zip
```

Replace `gapps.zip` with the actual package name.
![](https://i.imgur.com/DUEMXrn.png)

> **If you get a "Signature verification error" on your phone**, click `Yes` to continue anyways, this goes the same to any other ZIPs you flash.

8. Once finished, in the recovery go back to `Reboot system now`. The phone will reboot into your Custom ROM.

> [!TIP]
> Check [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) if something does not work or you have questions
