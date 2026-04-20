<!-- Source: https://m3.material.io/components/extended-fab/overview -->
<!-- Scraped: 2026-04-20T18:09:47.183Z -->

- Use for the most common or important action on a screen
- Three variants: small, medium, and large
- Use instead of FAB when label text is needed to understand action
- Small extended FAB
- Medium extended FAB
- Large extended FAB

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
The extended FAB now has three sizes: small, medium, and large, each with updated type styles. These align with the 
    
    FAB
    
      Floating action buttons (FABs) help people take primary actions.
    
      
            More on FABs
          
   sizes for an easier transition between FABs. The baseline extended FAB is no longer recommended and should be replaced with the small extended FAB. Surface and FABs are also no longer recommended. More on M3 Expressive
Variants and naming:
- Added new sizesSmall: 56dpMedium: 80dpLarge: 96dp
- No longer recommendedBaseline extended FAB (56dp)Surface extended FAB
Updates:
- Adjusted typography to be larger
The baseline extended FAB is replaced with a set of small, medium, and large extended FABs with new typography

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Extended FAB is the same height as the FAB
- Shape: Boxier style with smaller corner radius
M2: Extended FABs are pill-shaped and have a different height and elevation
M3: Extended FABs share the same height, boxier shape, and simpler elevation model as FABs
