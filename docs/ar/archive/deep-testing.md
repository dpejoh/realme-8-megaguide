# لم يعد يعمل، قامت Realme بإزالة R8 من الخوادم

> [!Warning]
> **هذه الطريقة لم تعد تعمل. هذه الخطوات محفوظة للرجوع إليها فقط.**

لديك أسئلة؟ أرسل إلى [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) على تيليجرام أو ابدأ [مناقشة جديدة على GitHub](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

هل تم فتح القفل بالفعل؟ انتقل إلى [تثبيت أداة استرداد مخصصة وروم مخصص](/ar/guides/custom-rom).

**إخلاء مسؤولية:** لا يوجد ضمان، كما يسمح به القانون. ويندوز 7 غير مدعوم.

## المتطلبات الأساسية

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [تعريف USB ميديا تيك](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [أدوات adb](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- البرنامج الثابت: [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- APK: [Deep Testing](https://drive.google.com/file/d/1pESMmJef6Gm9YlJAE7OA_DDNnhFn3Jpz/view?usp=sharing)

## عمل نسخة احتياطية لأقسام النظام لديك

> [!CAUTION]
> هل قمت بالنسخ الاحتياطي بالفعل؟ إذا لم تفعل، اتبع [دليل النسخ الاحتياطي](/ar/guides/backup)

## فتح القفل

### تثبيت المتطلبات الأساسية

1. **ميديا تيك USB**
   1. **فك ضغط** وادخل إلى مجلد تعريف [ميديا تيك USB](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing).
   2. ابحث عن ملف **.inf**، انقر بزر الماوس الأيمن واضغط تثبيت
   ![](https://i.imgur.com/niVRaOn.png)
2. قم بتثبيت [USBDk](https://github.com/daynix/UsbDk/releases/)
3. قم بتثبيت [Python من متجر Microsoft](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)

### وميض RUI3 C.18

1. **فك ضغط** وادخل إلى مجلد [أرشيف MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. افتح وحدة التحكم في مجلد [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
![](https://i.imgur.com/RJtobaI.png)

3. قم بتثبيت التبعيات وإرسال الـ payload:

```bash
python -m pip install -r requirements.txt
python mtk payload
```

يجب أن يبدو هكذا:
![](https://i.imgur.com/WSQsVj1.png)

4. تأكد من إيقاف تشغيل هاتفك، اضغط مع الاستمرار على **Vol+، Vol-** وقم بتوصيل كابل USB. سترى شيئًا كهذا:
![](https://i.imgur.com/lr7HIN0.png)

5. الهاتف الآن في وضع BROM. شغّل [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing) `flash_tool.exe`

6. انقر على `Options > Option...` وتأكد من تحديد **المنفذ COM** الصحيح، وتفعيل UART، وضبط معدل الباود على **921600**.

![](https://i.imgur.com/hnMsyeN.png)

7. احصل على [برنامج C.18 الثابت](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download) وقم بفك ضغطه
8. حمّل `MT6785_Android_scatter.txt` من مجلد البرنامج الثابت
   ![](https://i.imgur.com/8APQvkx.png)

> [!CAUTION]
> **تذكر ضبط الوضع على `Download Only`** أو ستفقد الأقسام الهامة.

![](https://i.imgur.com/M3aUNBs.png =300x)

9. ستستغرق هذه العملية حتى 15-20 دقيقة. للبدء، انقر على `Download` ([**لا يوجد تقدم؟ اضغط هنا**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)). تأكد من عدم فصل هاتفك.
![](https://i.imgur.com/uSXflCJ.png =300x)

10. إذا سارت الأمور بشكل جيد، يجب أن يبدو هكذا
![](https://i.imgur.com/qeJWt3a.png =200x)

11. قبل فعل أي شيء، **امسح الهاتف للسلامة.** اضغط مع الاستمرار على **Vol- وزر الطاقة**، في وضع الاسترداد اختر مسح البيانات، ثم اختر **Format Data**.

### فتح قفل bootloader باستخدام Deep Testing

1. قم بتنزيل وتثبيت تطبيق deep testing، اضغط على "Apply Now" ووافق على الاتفاقية، يجب أن ترى هذا الآن:
![](https://i.imgur.com/MTeSOl3.png =300x)

2. أغلق التطبيق وابعده من التطبيقات الحديثة. افتح التطبيق مرة أخرى واضغط على Query verification status. يجب أن ترى هذا الآن:
![](https://i.imgur.com/FEN05v9.png =300x)

3. اضغط على "Start deep testing" وسيتم إعادة تشغيل الجهاز إلى وضع fastboot:
![](https://i.imgur.com/G6NeOCQ.png =300x)

4. سيتم إعادة تشغيل الجهاز إلى وضع fastboot. لفتح قفل bootloader، قم بتوصيل الجهاز بجهاز الكمبيوتر وشغّل:

```bash
fastboot flashing unlock
```

يجب أن ترى هذا:
![](https://i.imgur.com/iYp4XAP.png =600x)

5. اضغط على `Volume up` وسيتم فتح قفل bootloader.

## تثبيت أداة استرداد مخصصة وروم مخصص

اذهب إلى [دليل الروم المخصص](/ar/guides/custom-rom).

## الحصول على صلاحية الجذر (Rooting)

اذهب إلى [دليل الجذر](/ar/guides/rooting).
