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

> [!TIP]
> लिनक्स पर, `mtk` कमांड सीधे चलाए जा सकते हैं (`python` उपसर्ग की आवश्यकता नहीं है)।

## फ्लैश करना

[SP Flash Tool](/hi/reference/flash-tool) प्रक्रिया का पालन करें, फिर:

**फर्मवेयर:** **C.18** या **F.11** का उपयोग करें
**स्कैटर फ़ाइल:** आपके द्वारा डाउनलोड किए गए फर्मवेयर से स्कैटर फ़ाइल लोड करें

> [!TIP]
> यदि कुछ काम नहीं करता है तो [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) देखें।

**फ़ोन को वाइप करें।** **Vol- + Power** दबाए रखें, रिकवरी में जाएँ, **Format Data** चुनें।

> [!IMPORTANT]
> **अपना चुना हुआ बेस फर्मवेयर फ्लैश करने के बाद ही आगे बढ़ें।**
