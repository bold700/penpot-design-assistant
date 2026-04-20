<!-- Source: https://m3.material.io/components/sliders/specs -->
<!-- Scraped: 2026-04-20T08:14:25.382Z -->

link
Copy link
Link copied

## Variants

link
Copy link
Link copied
- Standard
- Centered
- Range
link
Copy link
Link copied
| Variant | M3 | M3 Expressive |
| Standard | Available as “continuous” slider | Available |
| Centered | Available (web only) | Available |
| Range | Available | Available |
| Discrete | Available | Available as “stops” configuration |
link
Copy link
Link copied

## Configurations

link
Copy link
Link copied
- Orientation: Horizontal, vertical
- Size: XS, S, M, L, XL
link
Copy link
Link copied
- Inset icon
- Stops
- Value indicator
link
Copy link
Link copied
| Category | Configuration | M3 | M3 Expressive |
| Inset icon | No (default) | Available | Available |
| Yes | -- | Available |
| Orientation | Horizontal (default) | Available | Available |
| Vertical | -- | Available |
| Size | XS (default) | Available | Available |
| S, M, L, XL | -- | Available on MDC-Android.Available as tokens on other platforms.* |
| Stop indicators | No (default), Yes | Available as “discrete” slider | Available |
| Value Indicator | No (default), Yes | Available | Available |
link
Copy link
Link copied
*Configurations only available using tokens don’t have implemented presets in code. To change the size, swap the default size tokens
md.comp.slider.
xsmall
.[...]
with those of the desired size.
link
Copy link
Link copied

## Tokens & specs

Slider tokens are organized into a common token set, and token sets for each size. Switch token sets from the table’s menu. Learn more about design tokens
link
Copy link
Link copied
Token
Enabled
Disabled
Hovered
Focused
Pressed (ripple)
link
Copy link
Link copied

## Anatomy

link
Copy link
Link copied
- Value indicator (optional)
- Stop indicators (optional)
- Active track
- Handle
- Inactive track
- Inset icon (optional)
link
Copy link
Link copied

## Color

link
Copy link
Link copied
Slider color roles used for light and dark schemes:
- Inverse surface
- Inverse on surface
- Primary
- On primary
- Secondary container
- On secondary container
link
Copy link
Link copied

## States

link
Copy link
Link copied
- Enabled
- Disabled
- Hovered
- Focused
- Pressed
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
Padding and size measurements for common sliders
link
Copy link
Link copied
Padding and size measurements for XS, S, M, L, and XL sliders
link
Copy link
Link copied
| Attribute | XS | S | M | L | XL |
| Track height | 16dp | 24dp | 40dp | 56dp | 96dp |
| Label container height | 44dp |
| Label container width | 48dp |
| Handle height | 44dp | 44dp | 52dp | 68dp | 108dp |
| Handle width | 4dp |
| Track shape | 8dp | 8dp | 12dp | 16dp | 28dp |
| Inset icon size | -- | -- | 24dp | 24dp | 32dp |
