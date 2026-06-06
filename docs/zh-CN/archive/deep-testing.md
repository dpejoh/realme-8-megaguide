# 不再可用，Realme 已从服务器移除 R8

> [!Warning]
> **此方法已不再可用。以下步骤仅作参考保留。**

有问题？通过 Telegram 联系 [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) 或发起新的 [GitHub 讨论](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose)。

已经解锁？跳转到[安装自定义恢复和 ROM](/zh-CN/guides/custom-rom)。

**免责声明：** 在法律允许的范围内不提供任何担保。不支持 Windows 7。

## 前提条件

- [Python 3.10+](https://www.python.org/downloads/)
- [联发科 USB 驱动](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [adb 工具](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- 固件：[C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- APK：[深度测试](https://drive.google.com/file/d/1pESMmJef6Gm9YlJAE7OA_DDNnhFn3Jpz/view?usp=sharing)

> [!TIP]
> 在 Linux 上，`mtk` 命令可以直接运行（无需 `python` 前缀）。

## 备份系统分区

> [!CAUTION]
> 您已经备份了吗？如果没有，请按照[备份指南](/zh-CN/guides/backup)操作

## 解锁

### 安装前提条件

1. **联发科 USB 驱动**
   1. **解压**并进入[联发科 USB 驱动](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)的文件夹。
   2. 找到 **.inf** 文件，右键点击并选择安装
   ![](https://i.imgur.com/niVRaOn.png)
2. 安装 [USBDk](https://github.com/daynix/UsbDk/releases/)
3. 从 [python.org 安装 Python](https://www.python.org/downloads/)（或从 [Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5) 作为替代）

### 刷写 RUI3 C.18

按照 [SP Flash Tool](/zh-CN/reference/flash-tool) 的步骤，注意以下变化：

- **固件：** 使用 [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- **scatter 文件：** 从固件文件夹加载 `MT6785_Android_scatter.txt`

> [!CAUTION]
> **记得使用 `Download Only` 模式**，否则将丢失关键分区。

完成后，**请擦除手机。** 按住 **Vol- + 电源键**，进入 Recovery，选择 **Format Data**。

### 使用深度测试解锁引导加载程序

1. 下载并安装深度测试应用，点击"立即申请"并接受协议，您应该看到以下画面：
![](https://i.imgur.com/MTeSOl3.png =300x)

2. 关闭应用并从最近任务中滑掉。再次打开应用并点击查询验证状态。您现在应该看到：
![](https://i.imgur.com/FEN05v9.png =300x)

3. 点击"开始深度测试"，设备将重启到 fastboot 模式：
![](https://i.imgur.com/G6NeOCQ.png =300x)

4. 设备将重启到 fastboot 模式。要解锁引导加载程序，将设备插入电脑并运行：

```bash
fastboot flashing unlock
```

您应该看到：
![](https://i.imgur.com/iYp4XAP.png =600x)

5. 按 **音量上键**，引导加载程序将被解锁。

## 安装自定义恢复和 ROM

前往[自定义 ROM 指南](/zh-CN/guides/custom-rom)。

## Root 教程

前往[Root 教程](/zh-CN/guides/rooting)。
