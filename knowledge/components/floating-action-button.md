<!-- Source: https://m3.material.io/components/floating-action-button -->
<!-- Scraped: 2026-04-20T04:27:30.395Z -->

link
Copy link
Link copied
- Use a FAB for the most common or important action on a screen
- Make sure the icon in a FAB is clear and understandable
- FABs persist on the screen when content is scrolling
- Three variants: FAB, medium FAB, large FAB
link
Copy link
Link copied
- FAB
- Medium FAB
- Large FAB
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
The FAB has new sizes to match the extended FAB and more color options. The small FAB is no longer recommended. More on M3 Expressive
link
Copy link
Link copied
Variants and naming:
- Added medium FAB size
- Small FAB size is no longer recommended
- FAB and large FAB sizes are unchanged
- FAB variants are based on size, not color
Color:
- Added tone color styles: PrimarySecondaryTertiary
- Renamed existing tonal color styles to match their token names: Primary to Primary containerSecondary to Secondary containerTertiary to Tertiary containerThe values haven't changed
- Surface color FABs  are no longer recommended
FABs have updated colors and sizes
link
Copy link
Link copied

## Differences from M2

link
Copy link
Link copied
M2: FABs are circles and always have a drop shadow
M3: FABs have a boxier shape, can use dynamic color, and include a new large FAB variation
