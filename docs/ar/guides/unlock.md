# فتح قفل Bootloader

> [!Warning]
> اقرأ كل خطوة لتجنب تلف الجهاز. ويندوز 7 غير مدعوم. إذا كنت على RUI4، قم بالتحديث إلى F.09 أو أعلى أولاً.

لديك أسئلة؟ [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) على تيليجرام أو [مناقشات GitHub](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose).

هل تم فتح القفل بالفعل؟ انتقل إلى [تصحيح LK](/ar/guides/patching-lk) (الوصول إلى fastboot) أو [الروم المخصص](/ar/guides/custom-rom).

> [!CAUTION]
> **قم بالنسخ الاحتياطي أولاً.** اتبع [دليل النسخ الاحتياطي](/ar/guides/backup) قبل المتابعة.

فتح Realme الرسمي (Deep Testing) لم يعد يعمل. يستخدم هذا الدليل MTK Client لفتح القفل عبر وضع BROM. يعمل على أي إصدار برنامج ثابت.

> [!TIP]
> انتقل إلى [تصحيح LK](/ar/guides/patching-lk) أو [الروم المخصص](/ar/guides/custom-rom) إذا كان bootloader لديك مفتوحًا بالفعل.

## المتطلبات

### ويندوز

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [تعريف USB ميديا تيك](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- البرنامج الثابت: [A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link), [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)

### لينكس

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [برنامج A.19 RUI2 الثابت](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)
- [برنامج C.18 RUI3 الثابت](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)

### تثبيت المتطلبات

#### ويندوز

قم بتثبيت [Python من متجر Microsoft](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5). قم بتثبيت تعريف USB ميديا تيك و USBDk. قم بتنزيل وفك ضغط [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)، ثم شغّل في موجه الأوامر:

```bash
pip3 install -r requirements.txt
```

#### لينكس

قم بتثبيت `libusb` و `python` من مدير الحزم الخاص بك (تأكد من أن Python >= 3.9). قم بتنزيل وفك ضغط [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)، ثم شغّل:

```bash
python -m pip install -r requirements.txt
```

## الرجوع إلى RUI2

1. **فك ضغط** وادخل إلى مجلد [أرشيف MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. بعد فك الضغط، ادخل إلى المجلد عمقين للعثور على ملف `Requirements.txt`. الآن افتح وحدة التحكم في المجلد:
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
5. الهاتف الآن في وضع BROM. شغّل SP Flash tool (`flash_tool.exe` على ويندوز، `flash_tool` على لينكس)
6. انقر على `Options > Option...` وتأكد من تحديد **المنفذ COM** الصحيح، وتفعيل UART، وضبط معدل الباود على **921600**.
	![](https://i.imgur.com/hnMsyeN.png)
7. احصل على [برنامج A.19 RUI2 من Haadi](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) وقم بفك ضغطه
8. حمّل `scatter.txt` من برنامج Haadi
    ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> **تذكر إلغاء تحديد:**
| opporeserve2 [قسم موقع] | cdt_engineering [رموز الضمان الرقمية] |
| --- | --- |
| <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

> [!CAUTION]
> **تذكر ضبط الوضع على `Download Only`** أو ستفقد الأقسام الهامة.
   ![](https://i.imgur.com/M3aUNBs.png =300x)

9. تجنب تحريك الهاتف حتى لا ينقطع أي اتصال. ستستغرق هذه العملية حتى 15-20 دقيقة. لتثبيت A.19 على هاتفك، انقر على `Download`.
	![](https://i.imgur.com/uSXflCJ.png =300x)
10. إذا سارت الأمور بشكل جيد، يجب أن يبدو هكذا
	![](https://i.imgur.com/qeJWt3a.png =200x)
11. قبل فعل أي شيء، **امسح الهاتف للسلامة.** اضغط مع الاستمرار على **Vol- وزر الطاقة**، في وضع الاسترداد اختر مسح البيانات، ثم اختر **Format Data**.

## فتح قفل bootloader

1. افتح وحدة التحكم في مجلد [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. أعد تشغيل جهازك، أطفئه واضغط مع الاستمرار على **Vol+، Vol-**. **لا تترك الأزرار حتى ينتهي الأمر.**
3. امسح البيانات (هذا يمسح جهازك):

```bash
python mtk e metadata,userdata,md_udc
```

يجب أن يبدو هكذا:
   ![](https://i.imgur.com/HfPsrpU.png)
4. افتح قفل bootloader:

```bash
python mtk da seccfg unlock
```

يجب أن يبدو هكذا:
   ![](https://i.imgur.com/Su8RtHk.png)
5. أعد التشغيل:

```bash
python mtk reset
```

أو اضغط مع الاستمرار على جميع أزرار الجهاز حتى يعاد تشغيل الهاتف.

> [!IMPORTANT]
> **أول تشغيل سيستغرق حوالي 5-20 دقيقة.**
> **سترى تحذيرات `dm-verity corruption` و `orange state`. اضغط على *زر الطاقة* للمتابعة. هذه تحذيرات طبيعية وسيتم إصلاحها في خطوة [تصحيح LK](/ar/guides/patching-lk).**

6. قم بإعداد هاتفك وقم بتفعيل **خيارات المطور** وتحقق من أن bootloader مفتوح تحت `OEM unlocking`

> [!TIP]
> راجع [الأسئلة الشائعة](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) إذا كان هناك شيء لا يعمل أو لديك أسئلة.

> [!TIP]
> تم فتح قفل bootloader الآن. يمكنك وميض **أي برنامج ثابت تريده** في هذه المرحلة: RUI2 (A.19)، RUI3 (C.18)، RUI4 (F.11)، أو الانتقال مباشرة إلى روم مخصص.
>
> **إذا كنت تريد رومًا مخصصًا:** يجب أن تكون على القاعدة **C.18 (RUI3)** أو **F.11 (RUI4)**.

## وميض البرنامج الثابت الأساسي

بعض الرومات المخصصة تتضمن البرنامج الثابت الأساسي في ملف zip. إذا كان رومك يفعل ذلك، فتخط هذا واذهب مباشرة إلى [تصحيح LK](/ar/guides/patching-lk).

بخلاف ذلك، اتبع [دليل البرنامج الثابت الأساسي](/ar/guides/base-firmware) لوميض **C.18 (RUI3)** أو **F.11 (RUI4)**.

## الخطوات التالية

- [تصحيح LK للوصول إلى fastboot](/ar/guides/patching-lk)
- [تثبيت روم مخصص وأداة استرداد](/ar/guides/custom-rom)
- [الحصول على صلاحية الجذر لجهازك](/ar/guides/rooting)
