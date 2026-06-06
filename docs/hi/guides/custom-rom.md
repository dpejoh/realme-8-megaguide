# कस्टम रिकवरी और ROM स्थापित करना

## आवश्यकताएँ

### Windows

- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [QcomMtk Driver](https://www.mediafire.com/file/nninaiiqy1e5csa/New+QcomMtk_Driver_Setup_V2.0.1.1_GsmMafia.Com.exe)
- [vbmeta इमेज](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!TIP]
> यदि आपको `fastboot: usage: unknown reboot target recovery` त्रुटि मिलती है तो यह adb इंस्टॉलर आज़माएँ [ADB and Fastboot ++](https://github.com/K3V1991/ADB-and-FastbootPlusPlus/releases/download/v1.0.8/ADB-and-Fastboot++_v1.0.8.exe)

### Linux

- android-tools (पैकेज मैनेजर या [डाउनलोड](https://dl.google.com/android/repository/platform-tools-latest-linux.zip))
- `libusb`
- [vbmeta इमेज](https://github.com/bengris32/releases/releases/download/arrow-1.1/vbmeta.img)

> [!IMPORTANT]
> कस्टम ROM स्थापित करने से पहले आपका बूटलोडर अनलॉक होना चाहिए और आपका डिवाइस **बेस फर्मवेयर C.18 (RUI3)** या **F.11 (RUI4)** पर होना चाहिए। यदि आपने ऐसा नहीं किया है तो [अनलॉकिंग गाइड](/hi/guides/unlock) देखें।
>
> C.18 या F.11 फ्लैश करने के लिए [बेस फर्मवेयर गाइड](/hi/guides/base-firmware) का पालन करें।
>
> **नोट:** कुछ कस्टम ROM में बेस फर्मवेयर ज़िप में शामिल होता है। यदि आपके में है, तो बेस स्टेप छोड़ें और सीधे ROM फ्लैश करें।

- ROMs: [Telegram ग्रुप](https://t.me/Realme8AOSPGroup)
- GApps: [MindTheGApps](https://github.com/MindTheGapps) या [NikGApps](https://sourceforge.net/projects/nikgapps/files/) (यदि आवश्यक हो)
- रिकवरी: [रिकवरी पेज](/hi/reference/recoveries)

## फास्टबूट में रीबूट करना

आपका डिवाइस चालू होना चाहिए।

1. **platform-tools** फ़ोल्डर में कमांड प्रॉम्प्ट / टर्मिनल विंडो खोलें।
2. **अपने फ़ोन पर**, डेवलपर विकल्प सक्षम करें और USB डीबगिंग सक्षम करें।
3. डिवाइस कनेक्शन जाँचें:

```bash
adb devices
```

फ़ोन पर `Allow USB Debugging for ...` दिखाई देगा, `Always allow...` चेक करें और `Allow` दबाएँ।

4. बूटलोडर में रीबूट करें:

```bash
adb reboot bootloader
```

फ़ोन `fastboot_unlock_verify ok` स्क्रीन पर रीबूट होगा।

> [!TIP]
> यदि कुछ काम नहीं करता है या आपके प्रश्न हैं तो [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) देखें

## कस्टम रिकवरी स्थापित करना और कस्टम ROM साइडलोड करना

> [!TIP]
> यदि कस्टम ROM के बीच स्विच कर रहे हैं तो चरण 2 छोड़ें।
> यदि आवश्यक रिकवरी नहीं बदली है तो आप चरण 3 छोड़ सकते हैं।

1. `recovery.img` और `vbmeta.img` फ़ाइलों को **platform-tools** फ़ोल्डर में ले जाएँ।
2. vbmeta फ्लैश करें:

```bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

यह दिखना चाहिए
![](https://i.imgur.com/MZZyTBc.png)

3. रिकवरी फ्लैश करें:

```bash
fastboot flash recovery recovery.img
```

![](https://i.imgur.com/t7wYi3R.png)

फ़ोन को `USB Transmission ok` दिखाना चाहिए।

4. रिकवरी में रीबूट करें:

```bash
fastboot reboot recovery
```

![](https://i.imgur.com/1zwXUmj.png)

5. रिकवरी में, `Factory reset > Format data/factory reset > Format data` पर जाएँ। **फ़ैक्टरी रीसेट के बाद** वापस जाएँ और `Apply update > Apply from ADB` चुनें। डिवाइस कनेक्शन जाँचें:

```bash
adb devices
```

आपको यह देखना चाहिए:
![](https://i.imgur.com/MoiIS9k.png)

6. कस्टम ROM साइडलोड करें:

```bash
adb sideload custom-rom.zip
```

`custom-rom.zip` को वास्तविक फ़ाइल नाम से बदलें। उदाहरण के लिए मैंने LeafOS 2 फ्लैश किया:
![](https://i.imgur.com/QZqi1e1.png)

7. **केवल** उन कस्टम ROM पर यह चरण करें **जिनमें GAPPS / GMS नहीं है** (जाँचने के लिए ROM का विवरण देखें)। फिर से `Apply update > Apply from ADB` चुनें और GApps साइडलोड करें:

```bash
adb sideload gapps.zip
```

`gapps.zip` को वास्तविक पैकेज नाम से बदलें।
![](https://i.imgur.com/DUEMXrn.png)

> **यदि आपके फ़ोन पर "Signature verification error" आता है**, तो वैसे भी जारी रखने के लिए `Yes` दबाएँ, यही बात आपके द्वारा फ्लैश किए जाने वाले किसी भी अन्य ZIP पर भी लागू होती है।

8. समाप्त होने पर, रिकवरी में वापस `Reboot system now` पर जाएँ। फ़ोन आपके कस्टम ROM में रीबूट होगा।

> [!TIP]
> यदि कुछ काम नहीं करता है या आपके प्रश्न हैं तो [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ) देखें
