# 安装自定义恢复和 ROM

## 依赖项

### Windows

- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [QcomMtk 驱动](https://www.mediafire.com/file/nninaiiqy1e5csa/New+QcomMtk_Driver_Setup_V2.0.1.1_GsmMafia.Com.exe)
- [vbmeta 镜像](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!TIP]
> 如果遇到错误：`fastboot: usage: unknown reboot target recovery`，请尝试此 adb 安装程序 [ADB and Fastboot ++](https://github.com/K3V1991/ADB-and-FastbootPlusPlus/releases/download/v1.0.8/ADB-and-Fastboot++_v1.0.8.exe)

### Linux

- android-tools（包管理器或[下载](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)）
- `libusb`
- [vbmeta 镜像](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!IMPORTANT]
> 在安装自定义 ROM 之前，您的引导加载程序必须已解锁，且设备必须使用**基础固件 C.18 (RUI3)** 或 **F.11 (RUI4)**。如果尚未完成，请参阅[解锁指南](/zh-CN/guides/unlock)。
>
> 请按照[基础固件指南](/zh-CN/guides/base-firmware)刷写 C.18 或 F.11。
>
> **注意：** 某些自定义 ROM 的 zip 包中已包含基础固件。如果您的 ROM 已包含，请跳过基础步骤直接刷写 ROM。

- ROM： [Telegram 群组](https://t.me/Realme8AOSPGroup)
- GApps：[MindTheGApps](https://github.com/MindTheGapps) 或 [NikGApps](https://sourceforge.net/projects/nikgapps/files/)（如果需要）
- 恢复：[恢复页面](/zh-CN/reference/recoveries)

## 重启到 fastboot

您的设备需要处于开机状态。

1. 在 **platform-tools** 文件夹中打开命令提示符/终端窗口。
2. **在手机上**，启用开发者选项并开启 USB 调试。
3. 检查设备连接：

```bash
adb devices
```

手机上会出现 `Allow USB Debugging for ...`，勾选 `Always allow...` 并点击 `Allow`。

4. 重启到引导加载程序：

```bash
adb reboot bootloader
```

手机将重启到显示 `fastboot_unlock_verify ok` 的屏幕。

> [!TIP]
> 如果某些操作不起作用或您有问题，请查看[常见问题](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)

## 安装自定义恢复并通过 ADB sideload 刷入自定义 ROM

> [!TIP]
> 如果在自定义 ROM 之间切换，请跳过第 2 步。
> 如果所需的恢复未更改，可以跳过第 3 步。

1. 将 `recovery.img` 和 `vbmeta.img` 文件移动到 **platform-tools** 文件夹。
2. 刷写 vbmeta：

```bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

应显示
![](https://i.imgur.com/MZZyTBc.png)

3. 刷写恢复：

```bash
fastboot flash recovery recovery.img
```

![](https://i.imgur.com/t7wYi3R.png)

手机应显示 `USB Transmission ok`。

4. 重启到恢复模式：

```bash
fastboot reboot recovery
```

![](https://i.imgur.com/1zwXUmj.png)

5. 在恢复模式中，进入 `Factory reset > Format data/factory reset > Format data`。**执行出厂重置后**返回并选择 `Apply update > Apply from ADB`。检查设备连接：

```bash
adb devices
```

您应该看到：
![](https://i.imgur.com/MoiIS9k.png)

6. 通过 ADB sideload 刷入自定义 ROM：

```bash
adb sideload custom-rom.zip
```

将 `custom-rom.zip` 替换为实际文件名。例如我刷写了 LeafOS 2：
![](https://i.imgur.com/QZqi1e1.png)

7. **仅**在**不包含 GApps / GMS** 的自定义 ROM 上执行此步骤（查看 ROM 的描述确认）。再次选择 `Apply update > Apply from ADB` 并通过 ADB sideload 刷入 GApps：

```bash
adb sideload gapps.zip
```

将 `gapps.zip` 替换为实际的包名。
![](https://i.imgur.com/DUEMXrn.png)

> **如果在手机上看到"Signature verification error"**，点击 `Yes` 继续即可，这对您刷写的其他任何 ZIP 文件同样适用。

8. 完成后，在恢复模式中返回并选择 `Reboot system now`。手机将重启进入您的自定义 ROM。

> [!TIP]
> 如果某些操作不起作用或您有问题，请查看[常见问题](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
