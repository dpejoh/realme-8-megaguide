# Flash Base Firmware (C.18 or F.11)

> [!NOTE]
> Some custom ROMs include the base firmware in the zip. If yours does, skip this guide and go straight to [installing the custom ROM](/guides/custom-rom).

There are **two base firmware options** for custom ROMs:

|      Base       | Notes                                   |
| :-------------: | :-------------------------------------- |
| **C.18 (RUI3)** | Required for all RUI3-based ROMs        |
| **F.11 (RUI4)** | Required only for older RUI4-based ROMs |

Both use the same flashing steps. Only the firmware file itself differs.

## Dependencies

### Windows

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- Firmware: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) or [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

### Linux

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- Firmware: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) or [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

> [!TIP]
> On Linux, `mtk` commands can be run directly (no `python` prefix needed).

## Flashing

1. Open the console in [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) folder
   ![](https://i.imgur.com/RJtobaI.png)
2. Send the payload:

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. Power off your phone, hold down both **Vol+, Vol-** and connect the usb cable.
4. MTK Client will detect the device in BROM mode:
   ![](https://i.imgur.com/lr7HIN0.png)
5. Run the SP Flash tool (`flash_tool.exe` on Windows, `flash_tool` on Linux)
6. Click `Options > Option...`, select the right **COM Port**, enable UART, set baud rate to **921600**.
   ![](https://i.imgur.com/hnMsyeN.png)
7. Get either **C.18** or **F.11** firmware and unpack it
8. Load the scatter file from the firmware:
   ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> Remember to uncheck:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

> [!CAUTION]
> Set mode to **`Download Only`** or you will lose critical partitions.
> ![](https://i.imgur.com/M3aUNBs.png =300x)

9. Place your phone on a stable surface. The process takes 15-20 minutes. Click `Download`. [**No progress?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png =300x)
10. When done it should look like this:
    ![](https://i.imgur.com/qeJWt3a.png =200x)

> [!TIP]
> Check [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) if something doesn't work.

11. **WIPE the phone for safety.** Hold **Vol- + Power**, enter recovery, select **Format Data**.

> [!IMPORTANT]
> **Only continue after flashing your chosen base firmware.**
