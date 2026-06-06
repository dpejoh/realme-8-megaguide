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

اتبع إجراءات [SP Flash Tool](/ar/reference/flash-tool)، ثم:

**البرنامج الثابت:** استخدم **C.18** أو **F.11**
**ملف scatter:** حمّل ملف scatter من البرنامج الثابت الذي نزلته

> [!TIP]
> راجع [الأسئلة الشائعة](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) إذا كان هناك شيء لا يعمل.

**امسح الهاتف.** اضغط مع الاستمرار على **Vol- + Power**، ادخل إلى الاسترداد، اختر **Format Data**.

> [!IMPORTANT]
> **لا تستمر إلا بعد وميض البرنامج الثابت الأساسي الذي اخترته.**
