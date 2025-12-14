# LUT Import

No Fusion's stylization feature supports LUT imports and applies them in real-time to both preview images and final photos.

## What is a LUT
LUT stands for Look Up Table. As the name suggests, LUT files store a mapping of various colors. They can be understood as a type of filter. Common LUT formats include:
1. Text files with the `.cube` extension
2. `512x512` sized colorful grid images

No Fusion currently supports importing these two types of LUTs.

## How to Import

In No Fusion, navigate to Settings -> Stylization -> Add New Preset -> LUT, then you can import LUTs from your photo library or files.

<p align="center">
  <img src="/src/import.jpeg" alt="Import LUT" style="max-width: 500px; min-width: 150px; width: 80%;">
</p>

## Format Conversion

### XMP
If your filter file format is `.xmp`, you will need to convert it to a supported format before importing. Follow these steps:
1. Import the preset into Lightroom, as shown below.

<p align="center">
  <img src="/src/lr.png" alt="Import LUT" style="max-width: 500px; min-width: 150px; width: 80%;">
</p>

2. Download and open a standard LUT image in Lightroom.

<p align="center">
  <img src="/src/lut.png" alt="Standard LUT" style="max-width: 300px; min-width: 150px; width: 60%;">
  <div align="center" style="font-size: 15px;opacity:0.6">
    Standard LUT
  </div>
</p>

3. Apply the preset. **Note: Be sure to turn off any options in the preset that correct the image, such as denoise, vignette, optical correction, clarity, etc.**

4. Without changing the resolution, export the image.
5. Import into No Fusion.

### Image and `.cube` Format Conversion

[Free LUT Format Conversion](https://lut-convert-spacegrey1s-projects.vercel.app/)

You can use the website above to convert LUT images and `.cube` format files to one another. When exporting to `.cube` format, it is recommended to choose a size of 32, which optimizes file size and processing efficiency.