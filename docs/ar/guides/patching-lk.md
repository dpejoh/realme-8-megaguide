# تصحيح LK

> [!Warning]
> **مطلوب للوصول إلى fastboot وإزالة تحذيرات dm-verity / orange state.**

تأكد من فتح قفل bootloader أولاً. راجع دليل [فتح قفل Bootloader](/ar/guides/unlock) إذا لم تكن قد فعلت ذلك بعد.

> [!TIP]
> على لينكس، يمكن تشغيل أوامر `mtk` مباشرة (لا حاجة لبادئة `python`).

## التصحيح والوميض

1. افتح وحدة التحكم في مجلد [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
2. أطفئ هاتفك، اضغط مع الاستمرار على **Vol+، Vol-**، وقم بتوصيل كابل USB
3. اقرأ قسم lk الحالي:

```bash
python mtk r lk lk.bin
```

سيظهر ملف `lk.bin` في مجلد MTK Client.

4. اذهب إلى [lkpatcher.r0rt1z2.com](https://lkpatcher.r0rt1z2.com/)، ارفع ملف `lk.bin` الخاص بك، وقم بتنزيل `lk-patched.bin`. انقله إلى مجلد MTK Client.
5. قم بوميض lk المُصحّح:

```bash
python mtk w lk lk-patched.bin
```


> [!TIP]
> راجع [الأسئلة الشائعة](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ#4-i-patched-my-lk-but-the-phone-still-says-fastboot_verify_fail) إذا كان هناك شيء لا يعمل.

## الخطوات التالية

- [تثبيت روم مخصص وأداة استرداد](/ar/guides/custom-rom)
- [الحصول على صلاحية الجذر لجهازك](/ar/guides/rooting)
