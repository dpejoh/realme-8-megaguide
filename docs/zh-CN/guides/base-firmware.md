# 刷写基础固件（C.18 或 F.11）

> [!NOTE]
> 某些自定义 ROM 的 zip 包中已包含基础固件。如果您的 ROM 已包含，请跳过本指南直接进入[安装自定义 ROM](/zh-CN/guides/custom-rom)。

自定义 ROM 有**两种基础固件选项**：

|      基础固件      | 说明                                     |
| :--------------: | :--------------------------------------- |
| **C.18 (RUI3)**  | 所有基于 RUI3 的 ROM 必需                 |
| **F.11 (RUI4)**  | 仅较旧的基于 RUI4 的 ROM 需要             |

两者使用相同的刷写步骤，仅固件文件不同。

## 依赖项

### Windows

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- 固件：[C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) 或 [F.11 RUI4](https://t.me/Realme8AOSPGroup)（Telegram）

### Linux

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- 固件：[C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) 或 [F.11 RUI4](https://t.me/Realme8AOSPGroup)（Telegram）

## 刷写

1. 在 [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) 的文件夹中打开控制台
   ![](https://i.imgur.com/RJtobaI.png)
2. 发送 payload：

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. 关闭手机，同时按住 **Vol+、Vol-** 并连接 USB 线缆。
4. MTK Client 将在 BROM 模式下检测到设备：
   ![](https://i.imgur.com/lr7HIN0.png)
5. 运行 SP Flash tool（Windows 上为 `flash_tool.exe`，Linux 上为 `flash_tool`）
6. 点击 `Options > Option...`，选择正确的 **COM 端口**，启用 UART，将波特率设置为 **921600**。
   ![](https://i.imgur.com/hnMsyeN.png)
7. 获取 **C.18** 或 **F.11** 固件并解压
8. 从固件中加载 scatter 文件：
   ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> 记得取消勾选：
> - **opporeserve2** [签名分区]
> - **cdt_engineering** [数字保修码]

> [!CAUTION]
> 将模式设置为 **`Download Only`**，否则您将丢失关键分区。
> ![](https://i.imgur.com/M3aUNBs.png =300x)

9. 将手机放在稳定表面上。该过程需要 15-20 分钟。点击 `Download`。[**没有进度？**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png =300x)
10. 完成后效果如下：
    ![](https://i.imgur.com/qeJWt3a.png =200x)

> [!TIP]
> 如果某些操作不起作用，请查看[常见问题](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)。

11. **为安全起见请擦除手机。** 同时按住 **Vol- + 电源键**，进入恢复模式，选择 **格式化数据**。

> [!IMPORTANT]
> **只有在刷写完所选的基础固件后，才能继续后续步骤。**
