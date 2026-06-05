# बेस फर्मवेयर फ्लैश करें (C.18 या F.11)

> [!NOTE]
> कुछ कस्टम ROM में बेस फर्मवेयर ज़िप में शामिल होता है। यदि आपके में है, तो इस गाइड को छोड़ें और सीधे [कस्टम ROM स्थापित करने](/hi/guides/custom-rom) पर जाएँ।

कस्टम ROM के लिए **दो बेस फर्मवेयर विकल्प** हैं:

|      बेस       | नोट्स                                   |
| :-------------: | :-------------------------------------- |
| **C.18 (RUI3)** | सभी RUI3-आधारित ROM के लिए आवश्यक        |
| **F.11 (RUI4)** | केवल पुराने RUI4-आधारित ROM के लिए आवश्यक |

दोनों समान फ्लैशिंग चरणों का उपयोग करते हैं। केवल फर्मवेयर फ़ाइल अलग है।

## आवश्यकताएँ

### Windows

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- फर्मवेयर: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) या [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

### Linux

- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- फर्मवेयर: [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link) या [F.11 RUI4](https://t.me/Realme8AOSPGroup) (Telegram)

## फ्लैशिंग

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
5. SP Flash टूल चलाएँ (Windows पर `flash_tool.exe`, Linux पर `flash_tool`)
6. `Options > Option...` पर क्लिक करें, सही **COM Port** चुनें, UART सक्षम करें, बॉड रेट **921600** पर सेट करें।
   ![](https://i.imgur.com/hnMsyeN.png)
7. **C.18** या **F.11** फर्मवेयर प्राप्त करें और इसे अनपैक करें
8. फर्मवेयर से स्कैटर फ़ाइल लोड करें:
   ![](https://i.imgur.com/VTwpXzC.png)

> [!IMPORTANT]
> इन्हें अनचेक करना न भूलें:
> - **opporeserve2** [Signed partition]
> - **cdt_engineering** [Digital warranty codes]

> [!CAUTION]
> मोड को **`Download Only`** पर सेट करें अन्यथा आप महत्वपूर्ण पार्टीशन खो देंगे।
> ![](https://i.imgur.com/M3aUNBs.png =300x)

9. अपने फ़ोन को एक स्थिर सतह पर रखें। प्रक्रिया में 15-20 मिनट लगते हैं। `Download` पर क्लिक करें। [**कोई प्रगति नहीं?**](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ)
   ![](https://i.imgur.com/uSXflCJ.png =300x)
10. पूरा होने पर यह इस तरह दिखना चाहिए:
    ![](https://i.imgur.com/qeJWt3a.png =200x)

> [!TIP]
> यदि कुछ काम नहीं करता है तो [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) देखें।

11. **सुरक्षा के लिए फ़ोन को वाइप करें।** **Vol- + Power** दबाए रखें, रिकवरी में जाएँ, **Format Data** चुनें।

> [!IMPORTANT]
> **अपना चुना हुआ बेस फर्मवेयर फ्लैश करने के बाद ही आगे बढ़ें।**
