# تثبيت أداة استرداد مخصصة وروم مخصص

## المتطلبات

### ويندوز

- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [تعريف QcomMtk](https://www.mediafire.com/file/nninaiiqy1e5csa/New+QcomMtk_Driver_Setup_V2.0.1.1_GsmMafia.Com.exe)
- [صورة vbmeta](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!TIP]
> إذا تلقيت خطأ: `fastboot: usage: unknown reboot target recovery` جرب هذا المثبت لـ adb [ADB and Fastboot ++](https://github.com/K3V1991/ADB-and-FastbootPlusPlus/releases/download/v1.0.8/ADB-and-Fastboot++_v1.0.8.exe)

### لينكس

- android-tools (مدير الحزم أو [تنزيل](https://dl.google.com/android/repository/platform-tools-latest-linux.zip))
- `libusb`
- [صورة vbmeta](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!IMPORTANT]
> يجب أن يكون bootloader لديك مفتوحًا ويجب أن يكون جهازك على **البرنامج الثابت الأساسي C.18 (RUI3)** أو **F.11 (RUI4)** قبل تثبيت روم مخصص. راجع [دليل فتح القفل](/ar/guides/unlock) إذا لم تكن قد فعلت هذا بعد.
>
> اتبع [دليل البرنامج الثابت الأساسي](/ar/guides/base-firmware) لوميض إما C.18 أو F.11.
>
> **ملاحظة:** بعض الرومات المخصصة تتضمن البرنامج الثابت الأساسي في ملف zip. إذا كان رومك يفعل ذلك، فتخط خطوة القاعدة وومض الروم مباشرة.

- الرومات: [realme8.dry.nl.eu.org](https://realme8.dry.nl.eu.org) أو [مجموعة تيليجرام](https://t.me/Realme8AOSPGroup)
- GApps: [MindTheGApps A13](https://androidfilehost.com/?fid=4279422670115734716) (إذا لزم الأمر)
- أدوات الاسترداد: [صفحة أدوات الاسترداد](/ar/reference/recoveries) أو [الموقع](https://realme8.dry.nl.eu.org/Recoveries)

## إعادة التشغيل إلى fastboot

يجب أن يكون جهازك قيد التشغيل.

1. افتح نافذة موجه أوامر / طرفية في مجلد **platform-tools**.
2. **على هاتفك**، فعّل خيارات المطور وقم بتفعيل تصحيح USB.
3. تحقق من اتصال الجهاز:

```bash
adb devices
```

سترى `Allow USB Debugging for ...` على الهاتف، حدد `Always allow...` واضغط `Allow`.

4. أعد التشغيل إلى bootloader:

```bash
adb reboot bootloader
```

سيتم إعادة تشغيل الهاتف إلى شاشة تقول `fastboot_unlock_verify ok`.

> [!TIP]
> راجع [الأسئلة الشائعة](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) إذا كان هناك شيء لا يعمل أو لديك أسئلة

## تثبيت أداة استرداد مخصصة وتحميل الروم المخصص

> [!TIP]
> إذا كنت تنتقل بين الرومات المخصصة، تخط الخطوة 2.
> إذا لم تتغير أداة الاسترداد المطلوبة، يمكنك تخطي الخطوة 3.

1. انقل ملفي `recovery.img` و `vbmeta.img` إلى مجلد **platform-tools**.
2. وميض vbmeta:

```bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

يجب أن يظهر
![](https://i.imgur.com/MZZyTBc.png)

3. وميض أداة الاسترداد:

```bash
fastboot flash recovery recovery.img
```

![](https://i.imgur.com/t7wYi3R.png)

يجب أن يظهر الهاتف `USB Transmission ok`.

4. أعد التشغيل إلى وضع الاسترداد:

```bash
fastboot reboot recovery
```

![](https://i.imgur.com/1zwXUmj.png)

5. في وضع الاسترداد، اذهب إلى `Factory reset > Format data/factory reset > Format data`. **بعد** إعادة الضبط، ارجع واختر `Apply update > Apply from ADB`. تحقق من اتصال الجهاز:

```bash
adb devices
```

يجب أن ترى هذا:
![](https://i.imgur.com/MoiIS9k.png)

6. حمّل الروم المخصص:

```bash
adb sideload custom-rom.zip
```

استبدل `custom-rom.zip` باسم الملف الفعلي. على سبيل المثال لقد قمت بوميض LeafOS 2:
![](https://i.imgur.com/QZqi1e1.png)

7. **فقط** قم بهذه الخطوة على الرومات المخصصة **بدون GAPPS / GMS** (تحقق من وصف الروم للتأكد). اختر `Apply update > Apply from ADB` مرة أخرى وحمّل GApps:

```bash
adb sideload gapps.zip
```

استبدل `gapps.zip` باسم الحزمة الفعلي.
![](https://i.imgur.com/DUEMXrn.png)

> **إذا تلقيت "خطأ في التحقق من التوقيع" على هاتفك**، انقر `Yes` للمتابعة على أي حال، هذا ينطبق أيضًا على أي ملفات ZIP أخرى تقوم بوميضها.

8. بمجرد الانتهاء، ارجع في وضع الاسترداد إلى `Reboot system now`. سيتم إعادة تشغيل الهاتف إلى الروم المخصص الخاص بك.

> [!TIP]
> راجع [الأسئلة الشائعة](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) إذا كان هناك شيء لا يعمل أو لديك أسئلة
