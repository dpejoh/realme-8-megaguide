# Root 教程

> [!IMPORTANT]
> 仅使用**一种**方法：[Magisk](#使用-magisk) 或 [KernelSU](#使用-kernelsu)。

## 使用 Magisk

### 所需文件

### Windows

- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

### Linux

- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

> [!TIP]
> 在 Linux 上，`mtk` 命令可以直接运行（无需 `python` 前缀）。

1. 在 MTK Client 的文件夹中打开控制台。
2. 读取 boot 分区：

```bash
python mtk r boot boot.img
```

关闭设备，同时按住 **Vol+、Vol-** 并将设备连接到电脑。
3. 文件夹中会生成一个 `boot.img` 文件。打开设备并将文件复制到手机上。
4. 导航到下载的 Magisk Manager apk 文件所在位置并安装它。
5. 打开 Magisk Manager，点击 `Magisk` 旁的安装按钮。
![](https://i.imgur.com/CAbHxPv.png =400x)

6. 选择 `Select and patch a file`。文件选择器将打开，找到并选择您提取的 `boot.img`，然后点击 `let's go`。
![](https://i.imgur.com/4m7CJfB.png)

7. 当看到此屏幕时，修补已完成，您将获得修补后的 `.img 文件`的路径。将该文件复制到电脑上的 `platform-tools` 文件夹中。
   ![](https://i.imgur.com/D9qyjbGm.png)

8. 将手机连接到电脑，并在手机上开启 USB 调试。
9. 在 `platform-tools` 文件夹中打开命令提示符并检查设备连接：

```bash
adb devices
```

在手机上接受 USB 调试。然后重启到引导加载程序：

```bash
adb reboot bootloader
```

手机将重启到 `fastboot_unlock_verify ok` 屏幕。

10. 刷写修补后的 boot 镜像：

```bash
fastboot flash boot magisk_patched-xxxxx.img
```

将 `magisk_patched-xxxxx.img` 替换为您的实际文件名。然后重启：

```bash
fastboot reboot
```

11. 手机将重新启动，您现在已使用 Magisk 获得 root 权限。

> **注意：** 您会收到重启以完成安装的提示。

### 移除 Magisk root

在 Magisk Manager 应用中选择 `Uninstall > Complete uninstall`。

## 使用 KernelSU

> [!WARNING]
> **仅适用于自定义 ROM。**

> [!IMPORTANT]
> 如果使用 KSU 获取 root 权限后在插电状态下重启，手机将进入启动循环并跳转到恢复模式。重启前请拔掉手机电源。

### 所需文件

> [!TIP]
> 请参阅[内核](/zh-CN/reference/kernels)了解更多信息

- [KernelSU zip](https://github.com/HowWof/KernelSU_Builder/releases/latest)
- [KSU manager APK](https://github.com/tiann/KernelSU/releases/download/v1.0.0/KernelSU_v1.0.0_11874-release.apk)

1. 重启到恢复模式：

```bash
adb reboot recovery
```

2. 在恢复模式中选择 `Apply update > Apply from ADB` 并通过 ADB sideload 刷入：

```bash
adb sideload kernelsu.zip
```

> **如果出现"Signature verification error"**，继续即可，软件包仍会刷入，这对您刷写的其他任何 ZIP 文件同样适用。

3. 完成后点击 `Reboot system now`。手机将重新启动。导航到下载的 KernelSU Manager apk 文件所在位置并安装它。
4. 应用应显示如下，表示一切已正确完成：
![](https://i.imgur.com/XhOFSXP.png)

### 移除 KernelSU root

解压您下载的刷入 ROM 的 `custom-rom.zip`，找到 `boot.img` 并将其移动到 adb 所在的文件夹，然后运行：

```bash
adb reboot bootloader
fastboot flash boot boot.img
```
