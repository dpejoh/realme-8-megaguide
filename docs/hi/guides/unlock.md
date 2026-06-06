# बूटलोडर अनलॉक करें

> [!Warning]
> ब्रिकिंग से बचने के लिए प्रत्येक चरण पढ़ें। Windows 7 समर्थित नहीं है। यदि आप RUI4 पर हैं, तो पहले F.09 या उच्चतर पर अपडेट करें।

प्रश्न? Telegram पर [Realme 8 AOSP](https://t.me/Realme8AOSPGroup) या [GitHub Discussions](https://github.com/driedpampas/realme-8-megaguide/discussions/new/choose)।

पहले से अनलॉक है? [LK पैचिंग](/hi/guides/patching-lk) (fastboot एक्सेस) या [कस्टम ROM](/hi/guides/custom-rom) पर जाएँ।

> [!CAUTION]
> **पहले बैकअप लें।** आगे बढ़ने से पहले [बैकअप गाइड](/hi/guides/backup) का पालन करें।

आधिकारिक Realme अनलॉक (डीप टेस्टिंग) अब काम नहीं करता है। यह गाइड BROM मोड के माध्यम से अनलॉक करने के लिए MTK Client का उपयोग करता है। किसी भी फर्मवेयर पर काम करता है।

> [!TIP]
> यदि आपका बूटलोडर पहले से अनलॉक है तो [LK पैचिंग](/hi/guides/patching-lk) या [कस्टम ROM](/hi/guides/custom-rom) पर जाएँ।

## आवश्यकताएँ

### Windows

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- फर्मवेयर: [A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link), [C.18 RUI3](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [SP Flash tool](https://drive.google.com/file/d/11XeUnCYtARZg2kx7J2JWWeLULieSIYrx/view?usp=sharing)
- [A.19 RUI2 फर्मवेयर](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link)
- [C.18 RUI3 फर्मवेयर](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link)

### आवश्यकताएँ स्थापित करना

#### Windows

[Microsoft Store से Python](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5) इंस्टॉल करें। Mediatek USB ड्राइवर और USBDk इंस्टॉल करें। [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) डाउनलोड और एक्सट्रैक्ट करें, फिर Command Prompt में चलाएँ:

```bash
pip3 install -r requirements.txt
```

#### Linux

अपने पैकेज मैनेजर से `libusb` और `python` इंस्टॉल करें (Python >= 3.9 सुनिश्चित करें)। [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip) डाउनलोड और एक्सट्रैक्ट करें, फिर चलाएँ:

```bash
python -m pip install -r requirements.txt
```

## RUI2 में डाउनग्रेड करें

1. [MTK Client आर्काइव](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) को **एक्सट्रैक्ट** करें और उसके फ़ोल्डर में जाएँ
2. एक्सट्रैक्शन के बाद `Requirements.txt` फ़ाइल खोजने के लिए फ़ोल्डर में 2 लेवल अंदर जाएँ। अब फ़ोल्डर में कंसोल खोलें:
	![](https://i.imgur.com/RJtobaI.png)
3. निर्भरताएँ इंस्टॉल करें और पेलोड भेजें:

```bash
python -m pip install -r requirements.txt
python mtk payload
```

यह इस तरह दिखना चाहिए:
	![](https://i.imgur.com/WSQsVj1.png)
4. सुनिश्चित करें कि आपका फ़ोन बंद है, दोनों **Vol+, Vol-** दबाए रखें और USB केबल कनेक्ट करें। आप कुछ इस तरह देखेंगे:
	![](https://i.imgur.com/lr7HIN0.png)
5. फ़ोन अब BROM मोड में है। SP Flash टूल चलाएँ (Windows पर `flash_tool.exe`, Linux पर `flash_tool`)
6. `Options > Option...` पर क्लिक करें और सुनिश्चित करें कि सही **COM Port** चुना गया है, UART सक्षम है और बॉड रेट **921600** पर सेट है।
	![](https://i.imgur.com/hnMsyeN.png)
7. [Haadi का A.19 RUI2 फर्मवेयर](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) प्राप्त करें और इसे अनपैक करें
8. Haadi के फर्मवेयर से `scatter.txt` लोड करें
    ![](https://i.imgur.com/VTwpXzC.png)
	
> [!IMPORTANT]
> **इन्हें अनचेक करना न भूलें:**
| opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
| --- | --- |
| <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

> [!CAUTION]
> **`Download Only` मोड रखना न भूलें** अन्यथा आप महत्वपूर्ण पार्टीशन खो देंगे।
   ![](https://i.imgur.com/M3aUNBs.png =300x)

9. कनेक्शन न टूटे इसलिए अपने फ़ोन को हिलाने से बचें। इस प्रक्रिया में 15-20 मिनट तक लग सकते हैं। अपने फ़ोन पर A.19 प्राप्त करने के लिए `Download` पर क्लिक करें।
	![](https://i.imgur.com/uSXflCJ.png =300x)
10. यदि सब कुछ ठीक रहा, तो यह इस तरह दिखना चाहिए
	![](https://i.imgur.com/qeJWt3a.png =200x)
11. कुछ भी करने से पहले, **सुरक्षा के लिए फ़ोन को वाइप करें।** **Vol- और पावर बटन** दबाए रखें, रिकवरी में wipe data चुनें, और फिर **Format Data** चुनें।

## बूटलोडर अनलॉक करना

1. [MTK Client's](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) फ़ोल्डर में कंसोल खोलें
2. अपने डिवाइस को रीबूट करें, इसे बंद करें और दोनों **Vol+, Vol-** दबाए रखें। **कमांड पूरा होने तक बटन न छोड़ें।**
3. डेटा वाइप करें (यह आपके डिवाइस को मिटा देता है):

```bash
python mtk e metadata,userdata,md_udc
```

यह इस तरह दिखना चाहिए:
   ![](https://i.imgur.com/HfPsrpU.png)
4. बूटलोडर अनलॉक करें:

```bash
python mtk da seccfg unlock
```

यह इस तरह दिखना चाहिए:
   ![](https://i.imgur.com/Su8RtHk.png)
5. रीबूट करें:

```bash
python mtk reset
```

या फ़ोन के रीबूट होने तक सभी हार्डवेयर बटन दबाए रखें.
 
> [!IMPORTANT]  
> **पहला बूट लगभग 5-20 मिनट लेगा।**
> **आपको `dm-verity corruption` और `orange state` चेतावनियाँ दिखाई देंगी। जारी रखने के लिए *पावर बटन* दबाएँ। ये सामान्य हैं और [LK पैचिंग](/hi/guides/patching-lk) चरण में ठीक कर दिए जाएँगे।**

6. अपना फ़ोन सेट करें और **डेवलपर विकल्प** सक्षम करें और `OEM unlocking` के अंतर्गत सत्यापित करें कि बूटलोडर अनलॉक है

> [!TIP]
> यदि कुछ काम नहीं करता है या आपके प्रश्न हैं तो [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) देखें।

> [!TIP]
> आपका बूटलोडर अब अनलॉक है। आप इस बिंदु पर **कोई भी फर्मवेयर** फ्लैश कर सकते हैं: RUI2 (A.19), RUI3 (C.18), RUI4 (F.11), या सीधे कस्टम ROM पर जा सकते हैं।
>
> **यदि आप कस्टम ROM चाहते हैं:** आपको बेस **C.18 (RUI3)** या **F.11 (RUI4)** पर होना चाहिए।

## बेस फर्मवेयर फ्लैश करें

कुछ कस्टम ROM में बेस फर्मवेयर ज़िप में शामिल होता है। यदि आपके में है, तो इसे छोड़ें और सीधे [LK पैचिंग](/hi/guides/patching-lk) पर जाएँ।

अन्यथा **C.18 (RUI3)** या **F.11 (RUI4)** फ्लैश करने के लिए [बेस फर्मवेयर गाइड](/hi/guides/base-firmware) का पालन करें।

## अगले चरण

- [fastboot एक्सेस के लिए LK पैच करें](/hi/guides/patching-lk)
- [कस्टम ROM और रिकवरी इंस्टॉल करें](/hi/guides/custom-rom)
- [अपने डिवाइस को रूट करें](/hi/guides/rooting)
