# बैकअप

यह विधि IMEI मिट जाने या सिस्टम ब्रिक होने की स्थिति में _फर्मवेयर_ बैकअप बनाती है।

> [!NOTE]
>
> बैकअप डिफ़ॉल्ट रूप से `userdata` (व्यक्तिगत फ़ाइलें) को छोड़ देता है। रॉ डंप को पुनर्स्थापित करना व्यावहारिक नहीं है। यदि आप छोटा बैकअप चाहते हैं तो आप `--skip userdata,super` के साथ `super` को भी छोड़ सकते हैं। सुपर को हमेशा फर्मवेयर पैकेज से दोबारा फ्लैश किया जा सकता है।
>
> व्यक्तिगत डेटा का बैकअप क्लाउड स्टोरेज या मैन्युअल ट्रांसफर के माध्यम से अलग से लें।
## आवश्यकताएँ

### Windows

- [Python 3.10+](https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5)
- [Mediatek USB driver](https://drive.google.com/file/d/1UExJQxI1DmBGeDoYPul5YTXitOnsU6zx/view?usp=sharing)
- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [USBDk](https://github.com/daynix/UsbDk/releases/download/v1.00-22/UsbDk_1.0.22_x64.msi)

### Linux

- `python` (>= 3.9)
- `libusb`
- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)

> [!TIP]
> लिनक्स पर, `mtk` कमांड सीधे चलाए जा सकते हैं (`python` उपसर्ग की आवश्यकता नहीं है)।

## बैकअप

1. बैकअप की गई पार्टीशन को संग्रहीत करने के लिए एक फ़ोल्डर तैयार करें। इस उदाहरण के लिए हम `firmware-backup` का उपयोग करेंगे।

2. अपना फ़ोन बंद करें, दोनों वॉल्यूम बटन दबाए रखें।

3. बैकअप कमांड चलाएँ:

```bash
python mtk rl --skip userdata "firmware-backup"
```

4. अपने फ़ोन को कंप्यूटर से कनेक्ट करें।

![](https://i.imgur.com/wBPSBxg.png)

*बैकअप चलने के दौरान यह दिखाई देगा:*

![](https://i.imgur.com/PTG4sik.png)

5. कमांड समाप्त होने के बाद, फ़ोल्डर की जाँच करें कि बैकअप सही स्थान पर बना है और उसमें _51 फ़ाइलें_ हैं

![](https://i.imgur.com/HL49pJa.png)

**तैयार। [बूटलोडर अनलॉक](/hi/guides/unlock) पर जारी रखें।**
## पुनर्स्थापना

1. एक फर्मवेयर पैकेज फ्लैश करें (उदाहरण: [C.18](https://drive.google.com/file/d/1YHSIr4itg_5dPE2IbWAH9N8g6L5CGmaG/view?usp=drive_link))

2. सभी पार्टीशन पुनर्स्थापित करें:

```bash
python mtk wl (folder name)
```

विशिष्ट फ़ाइलों को पुनर्स्थापित करने के लिए:

```bash
python mtk w (partition) (file name)
```

> [!CAUTION]
>
> एक प्रीलोडर फ़ाइल `mtk client` फ़ोल्डर के अंदर बैकअप हो जाएगी। उस फ़ाइल को यथासंभव सुरक्षित रखें, क्योंकि यह फर्मवेयर को पुनर्स्थापित करने के लिए महत्वपूर्ण है।
>
> **केवल अपना स्वयं का फर्मवेयर या गाइड में दिए गए फर्मवेयर को फ्लैश करें** (उनके लिए `cdt_engineering` और `opporeserve2` को छोड़ दें)
