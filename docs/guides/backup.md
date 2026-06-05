# Backup

This method makes a _firmware_ backup in case IMEI is erased or system is bricked.

> [!NOTE]
>
> The backup skips `userdata` (personal files) by default — raw dumps aren't practical to restore. You can also skip `super` with `--skip userdata,super` if you want a smaller backup. Super can always be re-flashed from a firmware package.
>
> Back up personal data separately via cloud storage or manual transfer.
## Dependencies

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

1. Prepare a folder in which to store backed up partitions. For this example we'll use `firmware-backup`.

2. Turn your phone off, hold both volume buttons.

3. Run the backup command:

```bash
python mtk rl --skip userdata "firmware-backup"
```

4. Connect your phone to your computer.

![](https://i.imgur.com/wBPSBxg.png)

*This is what will show while the backup is running:*

![](https://i.imgur.com/PTG4sik.png)

5. After the command finishes, check the folder to make sure the backup was made to the correct location and that there are _51 files_

![](https://i.imgur.com/HL49pJa.png)

**Ready. Continue to [Unlock Bootloader](/guides/unlock).**
## Restore

1. Flash a firmware package (example: [C.18](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link))

2. Restore all partitions:

```bash
python mtk wl (folder name)
```

To restore specific files:

```bash
python mtk w (partition) (file name)
```

> [!CAUTION]
>
> A preloader file will be backed up inside `mtk client` folder. Keep that file as safe as possible, as it's crucial to restoring the firmware.
>
> **ONLY FLASH YOUR OWN FIRMWARE OR THE FIRMWARE PROVIDED IN THE GUIDE** (exclude `cdt_engineering` AND `opporeserve2` for those)
