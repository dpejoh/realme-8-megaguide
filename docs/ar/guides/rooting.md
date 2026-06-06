# الحصول على صلاحية الجذر (Rooting)

> [!IMPORTANT]
> استخدم **طريقة** واحدة فقط: [Magisk](#باستخدام-magisk) أو [KernelSU](#باستخدام-kernelsu).

## باستخدام Magisk

### ستحتاج

### ويندوز

- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

### لينكس

- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

> [!TIP]
> على لينكس، يمكن تشغيل أوامر `mtk` مباشرة (لا حاجة لبادئة `python`).

1. افتح وحدة التحكم في مجلد MTK Client.
2. اقرأ قسم boot:

```bash
python mtk r boot boot.img
```

أطفئ جهازك، اضغط مع الاستمرار على **Vol+، Vol-** وقم بتوصيل الجهاز بالكمبيوتر.
3. سيتم إنشاء ملف `boot.img` في المجلد. شغّل جهازك وانسخ الملف إليه.
4. انتقل إلى حيث قمت بتنزيل ملف Magisk Manager apk وقم بتثبيته.
5. افتح Magisk Manager وانقر على تثبيت بجانب `Magisk`.
![](https://i.imgur.com/CAbHxPv.png =400x)

6. اختر `Select and patch a file`. سيتم فتح منتقي الملفات، ابحث عن ملف `boot.img` الذي استخرجته واختره. ثم اضغط `let's go`.
![](https://i.imgur.com/4m7CJfB.png)

7. عندما ترى هذه الشاشة، يكون التصحيح قد اكتمل وسيتم إعطاؤك مسار ملف `.img` المُصحّح. انسخ هذا الملف إلى جهاز الكمبيوتر الخاص بك في مجلد `platform-tools`.
   ![](https://i.imgur.com/D9qyjbGm.png)

8. وصّل هاتفك بجهاز الكمبيوتر وقم بتفعيل تصحيح USB على هاتفك.
9. في مجلد `platform-tools` افتح موجه أوامر وتحقق من اتصال الجهاز:

```bash
adb devices
```

اقبل تصحيح USB على هاتفك. ثم أعد التشغيل إلى bootloader:

```bash
adb reboot bootloader
```

سيتم إعادة تشغيل الهاتف إلى شاشة `fastboot_unlock_verify ok`.

10. قم بوميض صورة boot المُصحّحة:

```bash
fastboot flash boot magisk_patched-xxxxx.img
```

استبدل `magisk_patched-xxxxx.img` باسم الملف الفعلي. ثم أعد التشغيل:

```bash
fastboot reboot
```

11. سيتم إعادة تشغيل الهاتف وأنت الآن تمتلك صلاحية الجذر باستخدام Magisk.

> **ملاحظة:** ستتلقى إشعارًا لإعادة التشغيل لإكمال التثبيت.

### لإزالة صلاحية الجذر من Magisk

اختر `Uninstall > Complete uninstall` في تطبيق Magisk Manager.

## باستخدام KernelSU

> [!WARNING]
> **يعمل فقط على الرومات المخصصة.**

> [!IMPORTANT]
> إذا أبقيت هاتفك موصلاً بالشحن أثناء إعادة التشغيل عندما يكون لديك صلاحية جذر باستخدام KSU، فسيحدث bootloop ويذهب إلى وضع الاسترداد. افصل هاتفك قبل إعادة التشغيل.

### ستحتاج

> [!TIP]
> راجع [الكيرنلات](/ar/reference/kernels) لمزيد من المعلومات

- [KernelSU zip](https://github.com/HowWof/KernelSU_Builder/releases/latest)
- [KSU manager APK](https://github.com/tiann/KernelSU/releases/download/v1.0.0/KernelSU_v1.0.0_11874-release.apk)

> [!TIP]
> إصدارات أحدث من KernelSU متوفرة في [مجموعة تيليجرام](https://t.me/Realme8AOSPGroup).

1. أعد التشغيل إلى وضع الاسترداد:

```bash
adb reboot recovery
```

2. في وضع الاسترداد اختر `Apply update > Apply from ADB` وحمّل:

```bash
adb sideload kernelsu.zip
```

> **إذا تلقيت "خطأ في التحقق من التوقيع"** تابع على أي حال، ستظل الحزمة تُومَض، هذا ينطبق أيضًا على أي ملفات ZIP أخرى تقوم بوميضها.

3. عند الانتهاء اضغط على `Reboot system now`. سيعاد تشغيل هاتفك. انتقل إلى حيث قمت بتنزيل ملف KernelSU Manager apk وقم بتثبيته.
4. يجب أن يظهر التطبيق هكذا للإشارة إلى أن كل شيء تم بشكل صحيح:
![](https://i.imgur.com/XhOFSXP.png)

### لإزالة صلاحية الجذر من KernelSU

استخرج ملف `custom-rom.zip` الذي قمت بتنزيله لوميض الروم، ابحث عن `boot.img` وانقله إلى المجلد حيث يوجد adb وشغّل:

```bash
adb reboot bootloader
fastboot flash boot boot.img
```
