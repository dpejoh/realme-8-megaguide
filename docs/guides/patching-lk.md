# Patching LK

> [!Warning]
> **Required for fastboot access and removing dm-verity / orange state warnings.**

Make sure your bootloader is unlocked first. See the [Unlock Bootloader](/guides/unlock) guide if you haven't done that yet.

> [!TIP]
> On Linux, `mtk` commands can be run directly (no `python` prefix needed).

## Patch and flash

1. Open a console in the [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) folder
2. Power off your phone, hold both **Vol+, Vol-**, and connect the USB cable
3. Read the current lk partition:

```bash
python mtk r lk lk.bin
```

The `lk.bin` file appears in the MTK Client folder.

4. Go to [lkpatcher.r0rt1z2.com](https://lkpatcher.r0rt1z2.com/), upload your `lk.bin`, and download `lk-patched.bin`. Move it to the MTK Client folder.
5. Flash the patched lk:

```bash
python mtk w lk lk-patched.bin
```


> [!TIP]
> Check the [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ#4-i-patched-my-lk-but-the-phone-still-says-fastboot_verify_fail) if something does not work.

## Next Steps

- [Install a Custom ROM & Recovery](/guides/custom-rom)
- [Root your device](/guides/rooting)
