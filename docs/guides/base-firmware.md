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

Follow the [SP Flash Tool](/reference/flash-tool) procedure, then:

**Firmware:** Use **C.18** or **F.11**
**Scatter file:** Load the scatter file from whichever firmware you downloaded

> [!TIP]
> Check [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) if something doesn't work.

**WIPE the phone for safety.** Hold **Vol- + Power**, enter recovery, select **Format Data**.

> [!IMPORTANT]
> **Only continue after flashing your chosen base firmware.**
