# रूटिंग

> [!IMPORTANT]
> केवल **एक** विधि का उपयोग करें: [Magisk](#magisk-के-साथ) या [KernelSU](#kernelsu-के-साथ)।

## Magisk के साथ

### आपको आवश्यकता होगी

### Windows

- [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

### Linux

- [MTK Client](https://github.com/bkerler/mtkclient/archive/refs/heads/main.zip)
- [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
- [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases/tag/v27.0)

> [!TIP]
> लिनक्स पर, `mtk` कमांड सीधे चलाए जा सकते हैं (`python` उपसर्ग की आवश्यकता नहीं है)।

1. MTK Client के फ़ोल्डर में कंसोल खोलें।
2. बूट पार्टीशन पढ़ें:

```bash
python mtk r boot boot.img
```

अपना डिवाइस बंद करें, दोनों **Vol+, Vol-** दबाए रखें और डिवाइस को कंप्यूटर से कनेक्ट करें।
3. फ़ोल्डर में एक `boot.img` फ़ाइल बनाई जाएगी। अपना डिवाइस चालू करें और फ़ाइल को उसमें कॉपी करें।
4. जहाँ आपने Magisk Manager apk फ़ाइल डाउनलोड की है वहाँ जाएँ और इसे इंस्टॉल करें।
5. Magisk Manager खोलें और `Magisk` के आगे इंस्टॉल पर क्लिक करें।
![](https://i.imgur.com/CAbHxPv.png =400x)

6. `Select and patch a file` चुनें। फ़ाइल पिकर खुलेगा, आपके द्वारा निकाली गई `boot.img` ढूँढें और चुनें। फिर `let's go` पर टैप करें।
![](https://i.imgur.com/4m7CJfB.png)

7. जब आप यह स्क्रीन देखें, तो पैचिंग पूरी हो गई है और आपको पैच की गई `.img file` का पथ दिया जाएगा। उस फ़ाइल को अपने कंप्यूटर पर `platform-tools` फ़ोल्डर में कॉपी करें।
   ![](https://i.imgur.com/D9qyjbGm.png)

8. अपने फ़ोन को कंप्यूटर से कनेक्ट करें और अपने फ़ोन पर USB डीबगिंग सक्षम करें।
9. `platform-tools` फ़ोल्डर में Command Prompt खोलें और डिवाइस कनेक्शन जाँचें:

```bash
adb devices
```

अपने फ़ोन पर USB डीबगिंग स्वीकार करें। फिर बूटलोडर में रीबूट करें:

```bash
adb reboot bootloader
```

फ़ोन `fastboot_unlock_verify ok` स्क्रीन पर रीबूट होगा।

10. पैच की गई बूट इमेज फ्लैश करें:

```bash
fastboot flash boot magisk_patched-xxxxx.img
```

`magisk_patched-xxxxx.img` को अपने वास्तविक फ़ाइल नाम से बदलें। फिर रीबूट करें:

```bash
fastboot reboot
```

11. फ़ोन पुनः आरंभ होगा और अब आप Magisk से रूट हो गए हैं।

> **नोट:** इंस्टॉलेशन पूरा करने के लिए रीबूट करने का संकेत मिलेगा।

### Magisk रूट हटाने के लिए

Magisk Manager ऐप में `Uninstall > Complete uninstall` चुनें।

## KernelSU के साथ

> [!WARNING]
> **केवल कस्टम ROM पर काम करता है।**

> [!IMPORTANT]
> यदि KSU से रूट करते समय रीबूट करते समय आप अपना फ़ोन प्लग इन रखते हैं तो यह बूटलूप हो जाएगा और रिकवरी में चला जाएगा। रीबूट करने से पहले अपना फ़ोन अनप्लग करें।

### आपको आवश्यकता होगी


- [KernelSU zip](https://github.com/HowWof/KernelSU_Builder/releases/latest)
- [KSU manager APK](https://github.com/tiann/KernelSU/releases/download/v1.0.0/KernelSU_v1.0.0_11874-release.apk)

> [!TIP]
> KernelSU के नए संस्करण [टेलीग्राम समूह](https://t.me/Realme8AOSPGroup) पर उपलब्ध हैं।

1. रिकवरी में रीबूट करें:

```bash
adb reboot recovery
```

2. रिकवरी में `Apply update > Apply from ADB` चुनें और साइडलोड करें:

```bash
adb sideload kernelsu.zip
```

> **यदि आपको "Signature verification error" मिलता है** तो वैसे भी जारी रखें, पैकेज फिर भी फ्लैश होगा, यही बात आपके द्वारा फ्लैश किए जाने वाले किसी भी अन्य ZIP पर भी लागू होती है।

3. पूरा होने पर `Reboot system now` पर टैप करें। आपका फ़ोन पुनः आरंभ होगा। जहाँ आपने KernelSU Manager apk फ़ाइल डाउनलोड की है वहाँ जाएँ और इसे इंस्टॉल करें।
4. ऐप को इस तरह दिखना चाहिए जो दर्शाता है कि सब कुछ सही ढंग से किया गया है:
![](https://i.imgur.com/XhOFSXP.png)

### KernelSU रूट हटाने के लिए

ROM फ्लैश करने के लिए आपके द्वारा डाउनलोड किया गया `custom-rom.zip` निकालें, `boot.img` ढूँढें और इसे उस फ़ोल्डर में ले जाएँ जहाँ adb है और चलाएँ:

```bash
adb reboot bootloader
fastboot flash boot boot.img
```
