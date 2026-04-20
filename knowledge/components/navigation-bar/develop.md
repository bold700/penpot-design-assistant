<!-- Source: https://m3.material.io/components/navigation-bar/develop -->
<!-- Scraped: 2026-04-20T08:10:47.904Z -->

link
Copy link
Link copied
- Use navigation bars in 
    
    compact
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
          
   or 
    
    medium
    
      Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
    
      
            More on medium window size class
          
   window sizes
- Can contain 3-5 destinations of equal importance
- Destinations don't change. They should be consistent across app screens.
link
Copy link
Link copied
Navigation bar for compact and medium window sizes
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
| Web | Unavailable |
| Web: Expressive | Unavailable |
link
Copy link
Link copied

## M3 Expressive update

link
Copy link
Link copied
May 2025
A new flexible navigation bar was introduced to replace the baseline navigation bar. It’s shorter and supports horizontal navigation items in medium windows. More on M3 Expressive
link
Copy link
Link copied
Variants and naming:
- Baseline navigation bar is no longer recommended
- Added flexible navigation barShorter heightCan be used in medium window sizes with horizontal navigation items
Color:
- Active label changed from on-surface-variant to secondary
The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items
link
Copy link
Link copied

## Differences from M2

link
Copy link
Link copied
- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller
- States: The active destination can be indicated with a pill shape in a contrasting color
- Name: Bottom navigation has been renamed navigation bar
link
Copy link
Link copied
M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states.
M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state.
