# SP Flash Tool

> [!CAUTION]
> **Set mode to `Download Only` or you will lose critical partitions.**
> ![](https://i.imgur.com/M3aUNBs.png)

> [!IMPORTANT]
> Remember to uncheck:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

## Procedure

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
7. Extract your firmware and load the scatter file:
   ![](https://i.imgur.com/VTwpXzC.png)
8. Place your phone on a stable surface. The process takes 15-20 minutes. Click `Download`. [**No progress?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png)
9. When done it should look like this:
   ![](https://i.imgur.com/qeJWt3a.png)

> [!TIP]
> On Linux, `mtk` commands can be run directly (no `python` prefix needed).
