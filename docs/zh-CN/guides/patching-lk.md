# 修补 LK

> [!Warning]
> **需要获得 fastboot 访问权限并消除 dm-verity / orange state 警告。**

确保已先解锁引导加载程序。如果尚未完成，请参阅[解锁引导加载程序](/zh-CN/guides/unlock)指南。

> [!TIP]
> 在 Linux 上，`mtk` 命令可以直接运行（无需 `python` 前缀）。

## 修补和刷写

1. 在 [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) 文件夹中打开控制台
2. 关闭手机，同时按住 **Vol+、Vol-**，连接 USB 线缆
3. 读取当前 lk 分区：

```bash
python mtk r lk lk.bin
```

`lk.bin` 文件将出现在 MTK Client 文件夹中。

4. 访问 [lkpatcher.cxwof.dev](http://lkpatcher.cxwof.dev/)，上传您的 `lk.bin`，下载 `lk-patched.bin`。将其移动到 MTK Client 文件夹。
5. 刷写修补后的 lk：

```bash
python mtk w lk lk-patched.bin
```

> [!IMPORTANT]
> 如果网站无法使用，请查看[手动修补](https://github.com/driedpampas/realme-8-megaguide/wiki/Patching-LK-(local))。

> [!TIP]
> 如果某些操作不起作用，请查看[常见问题](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ#4-i-patched-my-lk-but-the-phone-still-says-fastboot_verify_fail)。

## 下一步

- [安装自定义 ROM 和恢复](/zh-CN/guides/custom-rom)
- [Root 您的设备](/zh-CN/guides/rooting)
