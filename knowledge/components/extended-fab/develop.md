<!-- Source: https://m3.material.io/components/extended-fab/develop -->
<!-- Scraped: 2026-04-20T08:07:26.917Z -->

link
Copy link
Link copied
- Use for the most common or important action on a screen
- Three variants: small, medium, and large
- Use instead of FAB when label text is needed to understand action
link
Copy link
Link copied
- Small extended FAB
- Medium extended FAB
- Large extended FAB
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
The extended FAB now has three sizes: small, medium, and large, each with updated type styles. These align with the 
    
    FAB
    
      Floating action buttons (FABs) help people take primary actions.
    
      
            More on FABs
          
   sizes for an easier transition between FABs. The baseline extended FAB is no longer recommended and should be replaced with the small extended FAB. Surface and FABs are also no longer recommended. More on M3 Expressive
link
Copy link
Link copied
Variants and naming:
- Added new sizesSmall: 56dpMedium: 80dpLarge: 96dp
- No longer recommendedBaseline extended FAB (56dp)Surface extended FAB
Updates:
- Adjusted typography to be larger
The baseline extended FAB is replaced with a set of small, medium, and large extended FABs with new typography
link
Copy link
Link copied

## Differences from M2

link
Copy link
Link copied
- Color: New color mappings and compatibility with dynamic color
- Layout: Extended FAB is the same height as the FAB
- Shape: Boxier style with smaller corner radius
link
Copy link
Link copied
M2: Extended FABs are pill-shaped and have a different height and elevation
M3: Extended FABs share the same height, boxier shape, and simpler elevation model as FABs
