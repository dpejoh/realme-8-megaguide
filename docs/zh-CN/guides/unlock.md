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

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
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

从 [Microsoft Store 安装 Python](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)。安装联发科 USB 驱动和 USBDk。下载并解压 [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)，然后在命令提示符中运行：

```bash
pip3 install -r requirements.txt
```

#### Linux

从包管理器安装 `libusb` 和 `python`（确保 Python >= 3.9）。下载并解压 [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)，然后运行：

```bash
python -m pip install -r requirements.txt
```

## 降级到 RUI2

1. **解压**并进入 [MTK Client 压缩包](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)的文件夹
2. 解压后进入文件夹两级深度即可找到 `Requirements.txt` 文件。现在在文件夹中打开控制台：
	![](https://i.imgur.com/RJtobaI.png)
3. 安装依赖项并发送 payload：

```bash
python -m pip install -r requirements.txt
python mtk payload
```

效果如下：
	![](https://i.imgur.com/WSQsVj1.png)
4. 确保手机已关机，同时按住 **Vol+、Vol-** 并连接 USB 线缆。您将看到类似这样的画面：
	![](https://i.imgur.com/lr7HIN0.png)
5. 手机现在处于 BROM 模式。运行 SP Flash tool（Windows 上为 `flash_tool.exe`，Linux 上为 `flash_tool`）
6. 点击 `Options > Option...`，确保选择了正确的 **COM 端口**，启用 UART 并将波特率设置为 **921600**。
	![](https://i.imgur.com/hnMsyeN.png)
7. 获取 [Haadi 的 A.19 RUI2 固件](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)并解压
8. 从 Haadi 的固件中加载 `scatter.txt`
    ![](https://i.imgur.com/VTwpXzC.png)
	
> [!IMPORTANT]
> **记得取消勾选：**
| opporeserve2 [签名分区] | cdt_engineering [数字保修码] |
| --- | --- |
| <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

> [!CAUTION]
> **记得设置为 `Download Only` 模式**否则您将丢失关键分区。
    ![](https://i.imgur.com/M3aUNBs.png =300x)

9. 避免移动手机以防断开连接。此过程需要 15-20 分钟。要将 A.19 刷入手机，请点击 `Download`。
	![](https://i.imgur.com/uSXflCJ.png =300x)
10. 一切顺利的话，效果如下：
	![](https://i.imgur.com/qeJWt3a.png =200x)
11. 在进行任何操作之前，**为安全起见请擦除手机。** 同时按住 **Vol- 和电源键**，在恢复菜单中选择清除数据，然后选择 **格式化数据**。

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

6. 设置手机，开启**开发者选项**，并在 `OEM unlocking` 下验证引导加载程序已解锁。

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
