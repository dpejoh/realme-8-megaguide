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

> [!TIP]
> 在 Linux 上，`mtk` 命令可以直接运行（无需 `python` 前缀）。

## 刷写

按照 [SP Flash Tool](/zh-CN/reference/flash-tool) 的步骤操作，然后：

**固件：** 使用 **C.18** 或 **F.11**
**Scatter 文件：** 加载您下载的固件中的 scatter 文件

> [!TIP]
> 如果某些操作不起作用，请查看[常见问题](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)。

**请擦除手机。** 同时按住 **Vol- + 电源键**，进入恢复模式，选择 **格式化数据**。

> [!IMPORTANT]
> **只有在刷写完所选的基础固件后，才能继续后续步骤。**
