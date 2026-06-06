# SP Flash Tool

> [!CAUTION]
> **设置为 `Download Only` 模式，否则将丢失关键分区。**
> ![](https://i.imgur.com/M3aUNBs.png )

> [!IMPORTANT]
> 记得取消勾选：
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

## 步骤

1. 在 [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) 文件夹中打开控制台
   ![](https://i.imgur.com/RJtobaI.png)
2. 发送 payload：

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. 关闭手机，同时按住 **Vol+、Vol-**，连接 USB 线缆。
4. MTK Client 将检测到设备处于 BROM 模式：
   ![](https://i.imgur.com/lr7HIN0.png)
5. 运行 SP Flash tool（Windows 上为 `flash_tool.exe`，Linux 上为 `flash_tool`）
6. 点击 `Options > Option...`，选择正确的 **COM 端口**，启用 UART，将波特率设置为 **921600**。
   ![](https://i.imgur.com/hnMsyeN.png)
7. 解压固件并加载 scatter 文件：
   ![](https://i.imgur.com/VTwpXzC.png)
8. 将手机放在稳定的表面上。过程需要 15-20 分钟。点击 `Download`。[**没有进度？**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png )
9. 完成后应如下所示：
   ![](https://i.imgur.com/qeJWt3a.png )

> [!TIP]
> 在 Linux 上，`mtk` 命令可以直接运行（无需 `python` 前缀）。
