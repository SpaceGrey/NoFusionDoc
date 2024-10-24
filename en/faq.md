# FAQ
## 1. Why do the colors in the preview sometimes differ from the final image?
No Fusion's default format is **HEIF**<span style="color:#FF0000; font-weight:bold">+</span>, achieved through the ProRAW pipeline and No Fusion's proprietary calibration and compression algorithms. The preview is processed through the default pipeline, so in some cases, there may be color differences between the two. If you want colors closer to the viewfinder, you can use the **HEIF** format, though you will lose the de-sharpening feature.

## 2. No Sound or Haptic Feedback in Live Photos
Due to system limitations, sound and haptic feedback cannot be enabled simultaneously for Live Photos. By default, No Fusion does not record sound for Live Photos. If you wish to enable sound, please turn on the microphone in the settings. Once enabled, the system will disable haptic feedback. If you prefer haptic feedback, simply disable the microphone to activate it.

## 3. Can standard iPhones use No Fusion?
Yes, No Fusion is a camera that heavily utilizes the RAW pipeline. Since standard iPhones and devices prior to the iPhone 11 Pro do not support ProRAW shooting, compression is only possible through regular Bayer RAW files. However, compared to ProRAW, standard RAW files are less advantageous in terms of dynamic range and noise control, and they may differ more from the preview. Therefore, when using the **HEIF**<span style="color:#FF0000; font-weight:bold">+</span> format, this is something to keep in mind.

However, using the **HEIF** format can avoid these issues, and you will still be able to use all of No Fusion's features.

## 4. Why does the default camera's telephoto lens focus, but No Fusion doesn't?
As iPhone telephoto lenses continue to extend in range, their minimum focusing distance has also increased. Therefore, when shooting close objects, Apple automatically switches back to the main camera to simulate telephoto cropping without the user's knowledge. You can see which lens was used in the photo's metadata in the gallery.

However, No Fusion is designed not to switch lenses automatically, so if the telephoto lens is too close to the object, it may not be able to focus.

## 5. Why is there no macro mode?
The native camera's macro mode is achieved by cropping from the ultra-wide-angle lens. If you want to use macro mode, you can switch to the ultra-wide lens and crop with custom focal length settings.

## 6. Why is the save time long?
If **HEIF**<span style="color:#FF0000; font-weight:bold">+</span>, MAX, and Live Photo are all enabled simultaneously, save times may be longer because the amount of data that needs to be processed increases, putting a high load on the system. You can adjust the MAX resolution to 24MP in the image size settings to alleviate this issue. No Fusion will also continue optimizing photo save speeds.