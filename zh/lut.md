# LUT 导入
No Fusion的风格化功能支持 LUT 导入，并且实时应用在预览画面与照片上。
## 什么是 LUT
LUT 全称为 Look Up Table, 即查找表。顾名思义，LUT文件保存了许多颜色的映射关系。可以理解为滤镜的一种形式。常见的LUT包括：
1. `.cube`后缀的文本文件
2. `512*512`大小的彩色方格图片。

No Fusion 目前仅支持以上两种LUT的导入。

## 如何导入

在 No Fusion 中，点击设置-风格化-添加新预设-LUT，即可从图库或者文件中导入LUT。
<p align="center">
  <img src="/src/import.jpeg" alt="导入LUT" style="max-width: 500px; min-width: 150px; width: 80%;">
</p>

## 格式转换

### XMP
如果你的滤镜文件的格式为`.xmp`，那么则需要对其进行格式转换才能导入。具体步骤如下：
1. 将预设导入到Lightroom中，如下图所示。
<p align="center">
  <img src="/src/lr.png" alt="导入LUT" style="max-width: 500px; min-width: 150px; width: 80%;">
</p>

2. 下载并在Lightroom中打开标准LUT图片。
<p align="center">
  <img src="/src/lut.png" alt="标准 LUT" style="max-width: 300px; min-width: 150px; width: 60%;">
  <div align = "center" style = "font-size: 15px;opacity:0.6">
  标准LUT
  </div>
</p>

3. 应用预设，**注意：请关闭预设中修正画面内容的选项，例如 ：去噪点，暗角，光学矫正，清晰度等。**

4. 不要更改其分辨率，导出该图片。
5. 导入No Fusion。

### 图片和`.cube`格式转换

[免费LUT格式转换](https://lut-convert.vercel.app/)

使用上面的网址可以将LUT图片和cube格式的文件相互转换，在导出成cube格式时，推荐大小选择32，这样体积占用更小，计算更高效。