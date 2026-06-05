# النسخ الاحتياطي

تقوم هذه الطريقة بعمل نسخة احتياطية _للبرنامج الثابت_ في حالة مسح IMEI أو تلف النظام.

> [!NOTE]
>
> يتخطى النسخ الاحتياطي `userdata` (الملفات الشخصية) افتراضيًا. النسخ الأولية غير عملية للاستعادة. يمكنك أيضًا تخطي `super` باستخدام `--skip userdata,super` إذا كنت تريد نسخة أصغر. يمكن دائمًا إعادة وميض Super من حزمة البرنامج الثابت.
>
> قم بعمل نسخة احتياطية للملفات الشخصية بشكل منفصل عبر التخزين السحابي أو النقل اليدوي.

## المتطلبات

### ويندوز

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [تعريف USB ميديا تيك](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)

### لينكس

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)

## النسخ الاحتياطي

1. جهّز مجلدًا لتخزين نسخ الأقسام الاحتياطية. في هذا المثال سنستخدم `firmware-backup`.

2. أطفئ هاتفك، واضغط مع الاستمرار على زري رفع وخفض الصوت.

3. شغّل أمر النسخ الاحتياطي:

```bash
python mtk rl --skip userdata "firmware-backup"
```

4. وصّل هاتفك بالكمبيوتر.

![](https://i.imgur.com/wBPSBxg.png)

*هذا ما سيظهر أثناء تشغيل النسخ الاحتياطي:*

![](https://i.imgur.com/PTG4sik.png)

5. بعد انتهاء الأمر، تحقق من المجلد للتأكد من إنشاء النسخة في المكان الصحيح وأن هناك _51 ملفًا_

![](https://i.imgur.com/HL49pJa.png)

**جاهز. تابع إلى [فتح قفل Bootloader](/ar/guides/unlock).**

## الاستعادة

1. قم بوميض حزمة برنامج ثابت (مثال: [C.18](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link))

2. استعادة جميع الأقسام:

```bash
python mtk wl (اسم المجلد)
```

لاستعادة ملفات محددة:

```bash
python mtk w (القسم) (اسم الملف)
```

> [!CAUTION]
>
> سيتم حفظ ملف preloader داخل مجلد `mtk client`. احتفظ بهذا الملف في أمان قدر الإمكان، لأنه ضروري لاستعادة البرنامج الثابت.
>
> **قم فقط بوميض برنامجك الثابت الخاص أو البرنامج الثابت المقدم في الدليل** (استبعد `cdt_engineering` و `opporeserve2` لهذه الحالات)
