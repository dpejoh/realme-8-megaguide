# SP Flash Tool

> [!CAUTION]
> **اضبط الوضع على `Download Only` أو ستفقد الأقسام الهامة.**
> ![](https://i.imgur.com/M3aUNBs.png )

> [!IMPORTANT]
> تذكر إلغاء تحديد:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

## الإجراء

1. افتح الطرفية في مجلد [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
   ![](https://i.imgur.com/RJtobaI.png)
2. أرسل الحمولة:

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. أطفئ هاتفك، اضغط مع الاستمرار على **Vol+, Vol-** وقم بتوصيل كابل USB.
4. سيكتشف MTK Client الجهاز في وضع BROM:
   ![](https://i.imgur.com/lr7HIN0.png)
5. شغّل SP Flash tool (`flash_tool.exe` على ويندوز، `flash_tool` على لينكس)
6. انقر على `Options > Option...`، اختر **المنفذ COM** الصحيح، فعّل UART، اضبط معدل الباود على **921600**.
   ![](https://i.imgur.com/hnMsyeN.png)
7. استخرج برنامجك الثابت وحمّل ملف scatter:
   ![](https://i.imgur.com/VTwpXzC.png)
8. ضع هاتفك على سطح ثابت. تستغرق العملية 15-20 دقيقة. انقر على `Download`. [**لا تقدم؟**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png )
9. عند الانتهاء يجب أن يبدو هكذا:
   ![](https://i.imgur.com/qeJWt3a.png )

> [!TIP]
> على لينكس، يمكن تشغيل أوامر `mtk` مباشرة (لا حاجة لبادئة `python`).
