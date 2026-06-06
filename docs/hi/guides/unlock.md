# बूटलोडर अनलॉक करें

> [!Warning]
> ब्रिकिंग से बचने के लिए प्रत्येक चरण पढ़ें। Windows 7 समर्थित नहीं है। यदि आप RUI4 पर हैं, तो पहले F.09 या उच्चतर पर अपडेट करें।

प्रश्न? Telegram पर [Realme 8 AOSP](https://t.me/Realme8AOSPGroup)।

पहले से अनलॉक है? [LK पैचिंग](/hi/guides/patching-lk) (fastboot एक्सेस) या [कस्टम ROM](/hi/guides/custom-rom) पर जाएँ।

> [!CAUTION]
> **पहले बैकअप लें।** आगे बढ़ने से पहले [बैकअप गाइड](/hi/guides/backup) का पालन करें।

आधिकारिक Realme अनलॉक (डीप टेस्टिंग) अब काम नहीं करता है। यह गाइड BROM मोड के माध्यम से अनलॉक करने के लिए MTK Client का उपयोग करता है। किसी भी फर्मवेयर पर काम करता है।

> [!TIP]
> यदि आपका बूटलोडर पहले से अनलॉक है तो [LK पैचिंग](/hi/guides/patching-lk) या [कस्टम ROM](/hi/guides/custom-rom) पर जाएँ।

## आवश्यकताएँ

### Windows

- [Python 3.10+](https://www.python.org/downloads/)
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

[Python को python.org से](https://www.python.org/downloads/) इंस्टॉल करें (या [Microsoft Store](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5) वैकल्पिक रूप से)। Mediatek USB ड्राइवर और USBDk इंस्टॉल करें। [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) डाउनलोड और एक्सट्रैक्ट करें, फिर Command Prompt में चलाएँ:

```bash
pip3 install -r requirements.txt
```

#### Linux

अपने पैकेज मैनेजर से `libusb` और `python` इंस्टॉल करें (Python >= 3.9 सुनिश्चित करें)। [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip) डाउनलोड और एक्सट्रैक्ट करें, फिर एक वर्चुअल एनवायरनमेंट बनाएँ और आवश्यकताएँ इंस्टॉल करें:

```bash
python3 -m venv venv
sudo venv/bin/pip install -r requirements.txt
```

> [!TIP]
> लिनक्स पर, `mtk` कमांड सीधे चलाए जा सकते हैं (`python` उपसर्ग की आवश्यकता नहीं है)।

## RUI2 में डाउनग्रेड करें

[SP Flash Tool](/hi/reference/flash-tool) प्रक्रिया का पालन करें, इन बदलावों के साथ:

- **फर्मवेयर:** C.18/F.11 के बजाय [Haadi का A.19 RUI2](https://drive.google.com/file/d/1Iy2hwZ0mHQtpHgpyRDRHMZv13FTTvups/view?usp=share_link) उपयोग करें
- **स्कैटर फ़ाइल:** A.19 फर्मवेयर फ़ोल्डर से `scatter.txt` लोड करें
- **अनचेक करने के लिए पार्टीशन:**

> [!IMPORTANT]
> **इन्हें अनचेक करना याद रखें:**
> | opporeserve2 [Signed partition] | cdt_engineering [Digital warranty codes] |
> | --- | --- |
> | <img src="https://i.imgur.com/9Kp65P7.png" width="150"> | <img src="https://i.imgur.com/S6XOitJ.png" width="150"> |

जब हो जाए, **फ़ोन को वाइप करें।** **Vol- + Power** दबाए रखें, रिकवरी में जाएँ, **Format Data** चुनें।

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

6. अपना फ़ोन सेट करें और **डेवलपर विकल्प** सक्षम करें। `OEM unlocking` को बंद और वापस चालू करके सुनिश्चित करें कि यह सक्रिय है।

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
