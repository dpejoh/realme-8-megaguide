# 解锁引导加载程序

> [!Warning]
> 请仔细阅读每一步以避免变砖。不支持 Windows 7。如果您使用的是 RUI4，请先更新到 F.09 或更高版本。

有问题？联系 Telegram 上的 [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) 或通过 [GitHub 讨论](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose)。

已经解锁？跳转到[修补 LK](/zh-CN/guides/patching-lk)（fastboot 访问）或[自定义 ROM](/zh-CN/guides/custom-rom)。

> [!CAUTION]
> **请先备份。** 在继续之前请先阅读[备份指南](/zh-CN/guides/backup)。

官方的 Realme 解锁（深度测试）已不再可用。本指南使用 MTK Client 通过 BROM 模式解锁。适用于任何固件。

> [!TIP]
> 如果您的引导加载程序已解锁，请跳转到[修补 LK](/zh-CN/guides/patching-lk) 或[自定义 ROM](/zh-CN/guides/custom-rom)。

## 依赖项

### Windows

- [Python 3.10+](https://www.python.org/downloads/)
- [联发科 USB 驱动](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- 固件：[A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)，[C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [A.19 RUI2 固件](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)
- [C.18 RUI3 固件](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)

### 安装依赖项

#### Windows

从 [python.org 安装 Python](https://www.python.org/downloads/)（或从 [Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5) 作为替代）。安装联发科 USB 驱动和 USBDk。下载并解压 [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)，然后在命令提示符中运行：

```bash
pip3 install -r requirements.txt
```

#### Linux

从包管理器安装 `libusb` 和 `python`（确保 Python >= 3.9）。下载并解压 [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)，然后运行：

```bash
python -m pip install -r requirements.txt
```

> [!TIP]
> 在 Linux 上，`mtk` 命令可以直接运行（无需 `python` 前缀）。

## 降级到 RUI2

按照 [SP Flash Tool](/zh-CN/reference/flash-tool) 的步骤，注意以下变化：

- **固件：** 使用 [Haadi 的 A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) 而非 C.18/F.11
- **scatter 文件：** 从 A.19 固件文件夹加载 `scatter.txt`
- **需要取消勾选的分区：**

> [!IMPORTANT]
> **记得取消勾选：**
> | opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
> | --- | --- |
> | <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

完成后，**请擦除手机。** 按住 **Vol- + 电源键**，进入 Recovery，选择 **Format Data**。

## 解锁引导加载程序

1. 在 [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) 的文件夹中打开控制台
2. 重启设备，关机并同时按住 **Vol+、Vol-**。**在命令完成前不要松开按键。**
3. 清除数据（这将擦除您的设备）：

```bash
python mtk e metadata,userdata,md_udc
```

效果如下：
   ![](https://i.imgur.com/HfPsrpU.png)
4. 解锁引导加载程序：

```bash
python mtk da seccfg unlock
```

效果如下：
   ![](https://i.imgur.com/Su8RtHk.png)
5. 重启：

```bash
python mtk reset
```

或者同时按住所有硬件按键直到手机重启。
 
> [!IMPORTANT]  
> **首次开机大约需要 5-20 分钟。**
> **您将看到 `dm-verity corruption` 和 `orange state` 警告。按*电源键*继续。这些是正常现象，将在[修补 LK](/zh-CN/guides/patching-lk) 步骤中修复。**

6. 设置手机，开启**开发者选项**。将 `OEM unlocking` 关闭并重新打开以确保它已激活。

> [!TIP]
> 如果某些操作不起作用或您有问题，请查看[常见问题](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)。

> [!TIP]
> 您的引导加载程序现已解锁。此时您可以刷写**任何您想要的固件**：RUI2 (A.19)、RUI3 (C.18)、RUI4 (F.11)，或直接安装自定义 ROM。
>
> **如果您想要自定义 ROM：** 您必须使用 **C.18 (RUI3)** 或 **F.11 (RUI4)** 作为基础。

## 刷写基础固件

某些自定义 ROM 的 zip 包中已包含基础固件。如果您的 ROM 已包含，请跳过此步骤直接进入[修补 LK](/zh-CN/guides/patching-lk)。

否则请按照[基础固件指南](/zh-CN/guides/base-firmware)刷写 **C.18 (RUI3)** 或 **F.11 (RUI4)**。

## 下一步

- [修补 LK 以获得 fastboot 访问](/zh-CN/guides/patching-lk)
- [安装自定义 ROM 和恢复](/zh-CN/guides/custom-rom)
- [Root 您的设备](/zh-CN/guides/rooting)
