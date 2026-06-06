# अब काम नहीं करता, REALME ने R8 को सर्वर से हटा दिया है

> [!Warning]
> **यह विधि अब काम नहीं करती है। ये चरण केवल संदर्भ के लिए रखे गए हैं।**

प्रश्न? Telegram पर [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) को संदेश भेजें।

पहले से अनलॉक है? [कस्टम रिकवरी और ROM स्थापित करना](/hi/guides/custom-rom) पर जाएँ।

**अस्वीकरण:** कानून द्वारा अनुमत कोई वारंटी नहीं। Windows 7 समर्थित नहीं है।

## आवश्यक शर्तें

- [Python 3.10+](https://www.python.org/downloads/)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [adb tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- फर्मवेयर: [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download)
- APK: [डीप टेस्टिंग](https://drive.google.com/file/d/1pESMmJef6Gm9YlJAE7OA_DDNnhFn3Jpz/view?usp=sharing)

> [!TIP]
> लिनक्स पर, `mtk` कमांड सीधे चलाए जा सकते हैं (`python` उपसर्ग की आवश्यकता नहीं है)।

## अपने सिस्टम पार्टीशन का बैकअप लें

> [!CAUTION]
> क्या आपने पहले ही बैकअप ले लिया है? यदि नहीं, तो [बैकअप गाइड](/hi/guides/backup) का पालन करें

## अनलॉक करना

### आवश्यक शर्तें स्थापित करना

1. **Mediatek USB**
   1. [Mediatek USB](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing) ड्राइवर को **एक्सट्रैक्ट** करें और उसके फ़ोल्डर में जाएँ।
   2. **.inf** फ़ाइल ढूँढें, राइट क्लिक करें और इंस्टॉल दबाएँ
   ![](https://i.imgur.com/niVRaOn.png)
2. [USBDk](https://github.com/daynix/UsbDk/releases/) इंस्टॉल करें
3. [Python को python.org से](https://www.python.org/downloads/) इंस्टॉल करें (या [Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5) वैकल्पिक रूप से)

### RUI3 C.18 फ्लैश करें

[SP Flash Tool](/hi/reference/flash-tool) प्रक्रिया का पालन करें, इन बदलावों के साथ:

- **फर्मवेयर:** [C.18](https://drive.google.com/uc?id=1MPLnD4ofrW50u8V4C5I5srGucHJg60XW&export=download) उपयोग करें
- **स्कैटर फ़ाइल:** फर्मवेयर फ़ोल्डर से `MT6785_Android_scatter.txt` लोड करें

> [!CAUTION]
> **`Download Only` मोड रखना याद रखें** या आप महत्वपूर्ण पार्टीशन खो देंगे।

जब हो जाए, **फ़ोन को वाइप करें।** **Vol- + Power** दबाए रखें, रिकवरी में जाएँ, **Format Data** चुनें।

### डीप टेस्टिंग से बूटलोडर अनलॉक करना

1. डीप टेस्टिंग ऐप डाउनलोड और इंस्टॉल करें, "Apply Now" पर टैप करें और समझौता स्वीकार करें, आपको अब यह देखना चाहिए:
![](https://i.imgur.com/MTeSOl3.png =300x)

2. ऐप बंद करें और रीसेंट से हटा दें। ऐप फिर से खोलें और Query verification status पर टैप करें। आपको अब यह देखना चाहिए:
![](https://i.imgur.com/FEN05v9.png =300x)

3. "Start deep testing" पर टैप करें और डिवाइस फास्टबूट मोड में रीबूट हो जाएगा:
![](https://i.imgur.com/G6NeOCQ.png =300x)

4. डिवाइस फास्टबूट मोड में रीबूट होगा। बूटलोडर अनलॉक करने के लिए डिवाइस को PC में प्लग करें और चलाएँ:

```bash
fastboot flashing unlock
```

आपको यह देखना चाहिए:
![](https://i.imgur.com/iYp4XAP.png =600x)

5. `Volume up` दबाएँ और बूटलोडर अनलॉक हो जाएगा।

## कस्टम रिकवरी और ROM स्थापित करना

[कस्टम ROM गाइड](/hi/guides/custom-rom) पर जाएँ।

## रूटिंग

[रूटिंग](/hi/guides/rooting) पर जाएँ।
