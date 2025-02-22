## How to Bypass Most Detections and Achieve Strong Integrity

### Required Modules:

- [Zygisk Next](https://github.com/Dr-TSNG/ZygiskNext/releases)
- [Zygisk Maphide](https://github.com/HuskyDG/zygisk-maphide/releases)
- [Play Integrity Fix](https://github.com/chiteroman/PlayIntegrityFix/releases)
- [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases)
- [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases)

### Required Apps:

- [Play Integrity API Checker](https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck&hl=en)
- [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver&hl=en&pli=1)
- [Termux](https://play.google.com/store/apps/details?id=com.termux&hl=en)
- [Native Detector](https://github.com/reveny/Android-Native-Root-Detector)

### Required Files:

- [target.txt](/integrity/target.txt)
- [keybox.xml](https://t.me/playfixnext/77526)


### Steps to Follow:
1. **Hide Magisk** from its settings.
2. **Install all required modules.**
3. **Modify Tricky Store files:**
   - Navigate to `/data/adb/tricky_store`.
   - Replace `target.txt` and add a valid `keybox.xml`.
4. **Enable DenyList (for Magisk users only):**
   - Open Magisk and go to **Settings > DenyList**.
   - Enable **Google Play Services**, **Play Store**, and any other apps you want to hide root from.
   - This step is not required for KernelSU (Apatch compatibility is unknown).
5. **For PIF, run the following in the terminal:**
   - Open **Termux**.
   - Grant root access to ZArchiver by running:
```sh
   su
```
   - Alternatively, grant it from a root management app like Magisk or KernelSU, or modify permissions using APatch (if applicable).
   - Run:
```sh
sed -i 's/"spoofVendingSdk": 0/"spoofVendingSdk": 1/' /data/adb/modules/playintegrityfix/pif.json
```

### Additional Tips:
- Always check release notes, as developers may introduce new steps, such as the fifth step added in PIF v18.6.
- After setting everything up, most detections should be bypassed.
- If you still face detections, try using [HideMyApplist](https://github.com/Dr-TSNG/Hide-My-Applist).

---

### Need More Guidance?

#### Installing Modules:
1. Open **Magisk** and go to the **Modules** section.
2. Tap on **"Install from storage"**.
3. Select all module files one by one and install them.

#### Configuring Tricky Store:
1. Open **ZArchiver**.
2. Navigate to **Settings > ROOT** and enable:
   - **File operations**
   - **Fix SELinux content**
3. Grant root access to ZArchiver.
4. Navigate to `/data/adb/tricky_store`.
5. Replace `target.txt` and `keybox.xml`, or edit them manually.

> **Note:** The `keybox.xml` file can be revoked by Google at any time. You’ll need to update it periodically and check Play Integrity regularly.