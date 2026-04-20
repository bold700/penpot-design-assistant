<!-- Source: https://m3.material.io/components/sliders/overview -->
<!-- Scraped: 2026-04-20T08:14:19.349Z -->

link
Copy link
Link copied
- Three variants: Standard, centered, range
- Has five sizes, vertical and horizontal orientation, and an optional inset icon
- Sliders should present the full range of available values
- The slider value should take effect immediately
link
Copy link
Link copied
Sliders change values along a range
link
Copy link
Link copied

## Availability & resources

link
Copy link
Link copied
| Type | Resource | Status |
| Design |
| Design Kit (Figma) | Available |
| Implementation |
| Flutter | Available |
| Jetpack Compose | Available |
| Jetpack Compose: Expressive | Available |
| MDC-Android | Available |
| MDC-Android: Expressive | Available |
| Web | Available |
| Web: Expressive | Unavailable |
link
Copy link
Link copied

## M3 Expressive update

link
Copy link
Link copied
May 2025
The slider includes expressive configurations for orientation, shape sizes, and an inset icon. More on M3 Expressive
link
Copy link
Link copied
Updated on MDC-Android and Jetpack Compose.
Variants and naming:
- Changed continuous slider to standard slider
- The discrete slider is now the stops configuration
New configurations:
- Orientation: Horizontal, vertical
- Optional inset icon (standard slider only)
- Sizes: XS (existing default), S, M, L, XL
- Standard slider
- Centered slider
- Range slider
link
Copy link
Link copied

## Previous updates

link
Copy link
Link copied

### Visual refresh to improve non-text contrast

Dec 2023: Updated on MDC-Android and Jetpack Compose.
- Configuration: Added centered configuration and range selection
- Shape: New shape for slider tracks and handles. Slider elements change shape when selected.
- Motion: Slider handle adjusts width upon selection. Slider tracks adjust in shape when sliding to the edge.
- Color: Refreshed color mappings
M3 visual refresh: Sliders have a stop indicator, larger label text, and a vertical handle that narrows when pressed. Centered sliders start from the middle instead of the leading edge.
link
Copy link
Link copied

## Differences from M2

link
Copy link
Link copied
- Color: New color mappings and compatibility with 
    
    dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
M2: Sliders have a circular handle and a small label when pressed
M3: Sliders have new color mappings and support dynamic color
