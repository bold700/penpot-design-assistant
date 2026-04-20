<!-- Source: https://m3.material.io/components/floating-action-button/develop -->
<!-- Scraped: 2026-04-20T18:11:11.139Z -->

- Use a FAB for the most common or important action on a screen
- Make sure the icon in a FAB is clear and understandable
- FABs persist on the screen when content is scrolling
- Three variants: FAB, medium FAB, large FAB
- FAB
- Medium FAB
- Large FAB

## Availability & resources

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

## M3 Expressive update

May 2025
The FAB has new sizes to match the extended FAB and more color options. The small FAB is no longer recommended. More on M3 Expressive
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

## Differences from M2

M2: FABs are circles and always have a drop shadow
M3: FABs have a boxier shape, can use dynamic color, and include a new large FAB variation
