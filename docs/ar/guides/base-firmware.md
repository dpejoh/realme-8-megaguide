# وميض البرنامج الثابت الأساسي (C.18 أو F.11)

> [!NOTE]
> بعض الرومات المخصصة تتضمن البرنامج الثابت الأساسي في ملف zip. إذا كان رومك يفعل ذلك، فتخط هذا الدليل واذهب مباشرة إلى [تثبيت الروم المخصص](/ar/guides/custom-rom).

هناك **خياران للبرنامج الثابت الأساسي** للرومات المخصصة:

| القاعدة الأساسية | ملاحظات |
| :-------------: | :------ |
| **C.18 (RUI3)** | مطلوب لجميع الرومات المبنية على RUI3 |
| **F.11 (RUI4)** | مطلوب فقط للرومات الأقدم المبنية على RUI4 |

كلا الخيارين يستخدمان نفس خطوات الوميض. يختلف فقط ملف البرنامج الثابت نفسه.

## المتطلبات

### ويندوز

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- البرنامج الثابت: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) أو [F.11 RUI4](https://t.me/Realme8AOSPGroup) (تيليجرام)

### لينكس

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- البرنامج الثابت: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) أو [F.11 RUI4](https://t.me/Realme8AOSPGroup) (تيليجرام)

> [!TIP]
> على لينكس، يمكن تشغيل أوامر `mtk` مباشرة (لا حاجة لبادئة `python`).

## الوميض

1. افتح وحدة التحكم في مجلد [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
   ![](https://i.imgur.com/RJtobaI.png)
2. أرسل الـ payload:

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. أطفئ هاتفك، اضغط مع الاستمرار على **Vol+، Vol-** وقم بتوصيل كابل USB.
4. سيكتشف MTK Client الجهاز في وضع BROM:
   ![](https://i.imgur.com/lr7HIN0.png)
5. شغّل SP Flash tool (`flash_tool.exe` على ويندوز، `flash_tool` على لينكس)
6. انقر على `Options > Option...`، اختر **المنفذ COM** الصحيح، فعّل UART، اضبط معدل الباود على **921600**.
   ![](https://i.imgur.com/hnMsyeN.png)
7. احصل على برنامج **C.18** أو **F.11** الثابت وقم بفك ضغطه
8. حمّل ملف scatter من البرنامج الثابت:
   ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> تذكر إلغاء تحديد:
> - **opporeserve2** [قسم موقع]
> - **cdt_engineering** [رموز الضمان الرقمية]

> [!CAUTION]
> اضبط الوضع على **`Download Only`** أو ستفقد الأقسام الهامة.
> ![](https://i.imgur.com/M3aUNBs.png =300x)

9. ضع هاتفك على سطح ثابت. تستغرق العملية 15-20 دقيقة. انقر على `Download`. [**لا يوجد تقدم؟**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png =300x)
10. عند الانتهاء يجب أن يبدو هكذا:
    ![](https://i.imgur.com/qeJWt3a.png =200x)

> [!TIP]
> راجع [الأسئلة الشائعة](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) إذا كان هناك شيء لا يعمل.

11. **امسح الهاتف للسلامة.** اضغط مع الاستمرار على **Vol- + Power**، ادخل إلى وضع الاسترداد، اختر **Format Data**.

> [!IMPORTANT]
> **لا تستمر إلا بعد وميض البرنامج الثابت الأساسي الذي اخترته.**
