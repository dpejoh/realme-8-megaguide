# 备份

此方法创建_固件_备份，以防 IMEI 被擦除或系统变砖。

> [!NOTE]
>
> 备份默认跳过 `userdata`（个人文件）。原始转储不便于恢复。你也可以使用 `--skip userdata,super` 跳过 `super` 以减小备份大小。Super 分区始终可以从固件包重新刷入。
>
> 请通过云存储或手动传输单独备份个人数据。
## 依赖项

### Windows

- [Python 3.10+](https://www.python.org/downloads/)
- [联发科 USB 驱动](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)

> [!TIP]
> 在 Linux 上，`mtk` 命令可以直接运行（无需 `python` 前缀）。

## 备份

1. 准备一个文件夹用于存储备份的分区。本例中我们使用 `firmware-backup`。

2. 关闭手机，按住两个音量键。

3. 运行备份命令：

```bash
python mtk rl --skip userdata "firmware-backup"
```

4. 将手机连接到电脑。

![](https://i.imgur.com/wBPSBxg.png)

*备份运行时显示的画面：*

![](https://i.imgur.com/PTG4sik.png)

5. 命令完成后，检查文件夹以确保备份已保存到正确位置，且包含 _51 个文件_

![](https://i.imgur.com/HL49pJa.png)

**准备就绪。继续至[解锁引导加载程序](/zh-CN/guides/unlock)。**
## 恢复

1. 刷写固件包（示例：[C.18](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)）

2. 恢复所有分区：

```bash
python mtk wl (文件夹名称)
```

恢复特定文件：

```bash
python mtk w (分区) (文件名)
```

> [!CAUTION]
>
> 预加载器文件会备份在 `mtk client` 文件夹中。请妥善保管该文件，因为它对恢复固件至关重要。
>
> **仅刷写您自己的固件或本指南提供的固件**（排除 `cdt_engineering` 和 `opporeserve2`）
