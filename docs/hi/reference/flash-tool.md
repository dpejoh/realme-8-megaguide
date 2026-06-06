# SP Flash Tool

> [!CAUTION]
> **`Download Only` मोड सेट करें या आप महत्वपूर्ण पार्टीशन खो देंगे।**
> ![](https://i.imgur.com/M3aUNBs.png )

> [!IMPORTANT]
> इन्हें अनचेक करना याद रखें:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

## प्रक्रिया

1. [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) फ़ोल्डर में कंसोल खोलें
   ![](https://i.imgur.com/RJtobaI.png)
2. पेलोड भेजें:

```bash
python mtk payload
```

   ![](https://i.imgur.com/WSQsVj1.png)
3. अपना फ़ोन बंद करें, दोनों **Vol+, Vol-** दबाए रखें और USB केबल कनेक्ट करें।
4. MTK Client डिवाइस को BROM मोड में डिटेक्ट करेगा:
   ![](https://i.imgur.com/lr7HIN0.png)
5. SP Flash tool चलाएँ (Windows पर `flash_tool.exe`, Linux पर `flash_tool`)
6. `Options > Option...` पर क्लिक करें, सही **COM Port** चुनें, UART सक्षम करें, बॉड दर **921600** पर सेट करें।
   ![](https://i.imgur.com/hnMsyeN.png)
7. अपना फर्मवेयर निकालें और स्कैटर फ़ाइल लोड करें:
   ![](https://i.imgur.com/VTwpXzC.png)
8. अपने फ़ोन को स्थिर सतह पर रखें। प्रक्रिया में 15-20 मिनट लगते हैं। `Download` पर क्लिक करें। [**कोई प्रगति नहीं?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png )
9. जब हो जाए तो ऐसा दिखना चाहिए:
   ![](https://i.imgur.com/qeJWt3a.png )

> [!TIP]
> Linux पर, `mtk` कमांड सीधे चलाए जा सकते हैं (`python` उपसर्ग की आवश्यकता नहीं है)।
