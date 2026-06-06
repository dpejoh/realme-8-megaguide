# LK पैचिंग

> [!Warning]
> **fastboot एक्सेस और dm-verity / orange state चेतावनियों को हटाने के लिए आवश्यक।**

सुनिश्चित करें कि आपका बूटलोडर पहले अनलॉक है। यदि आपने ऐसा नहीं किया है तो [बूटलोडर अनलॉक](/hi/guides/unlock) गाइड देखें।

> [!TIP]
> लिनक्स पर, `mtk` कमांड सीधे चलाए जा सकते हैं (`python` उपसर्ग की आवश्यकता नहीं है)।

## पैच और फ्लैश

1. [MTK Client](https://codeload.github.com/bkerler/mtkclient/zip/f9fe6ca65c93c2eb05adef7787069103c0d79763) फ़ोल्डर में कंसोल खोलें
2. अपना फ़ोन बंद करें, दोनों **Vol+, Vol-** दबाए रखें, और USB केबल कनेक्ट करें
3. वर्तमान lk पार्टीशन पढ़ें:

```bash
python mtk r lk lk.bin
```

`lk.bin` फ़ाइल MTK Client फ़ोल्डर में दिखाई देगी।

4. [lkpatcher.cxwof.dev](http://lkpatcher.cxwof.dev/) पर जाएँ, अपना `lk.bin` अपलोड करें, और `lk-patched.bin` डाउनलोड करें। इसे MTK Client फ़ोल्डर में ले जाएँ।
5. पैच किए गए lk को फ्लैश करें:

```bash
python mtk w lk lk-patched.bin
```

> [!IMPORTANT]
> यदि वेबसाइट काम नहीं करती है तो [मैन्युअल पैचिंग](https://github.com/driedpampas/realme-8-megaguide/wiki/Patching-LK-(local)) देखें।

> [!TIP]
> यदि कुछ काम नहीं करता है तो [FAQ](https://github.com/driedpampas/realme-8-megaguide/wiki/FAQ#4-i-patched-my-lk-but-the-phone-still-says-fastboot_verify_fail) देखें।

## अगले चरण

- [कस्टम ROM और रिकवरी इंस्टॉल करें](/hi/guides/custom-rom)
- [अपने डिवाइस को रूट करें](/hi/guides/rooting)
