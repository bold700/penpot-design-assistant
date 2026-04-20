<!-- Source: https://m3.material.io/components/navigation-drawer/develop -->
<!-- Scraped: 2026-04-20T18:14:10.082Z -->

star
Note:
The navigation drawer is no longer recommended in the Material 3 expressive update. For those who have updated, use an
expanded navigation rail
, which has mostly the same functionality of the navigation drawer and adapts better across window size classes.
- Use standard navigation drawers in 
    
    expanded
    
      Window widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop.
    
      
            More on expanded window size class
          
  , 
    
    large
    
      Window widths 1200dp to 1599dp, such as desktop.
    
      
            More on large window size class
          
  , and 
    
    extra-large window sizes
    
      Window widths 1600dp and larger, such as ultra-wide monitors.
    
      
            More on extra-large window size class
- Use modal navigation drawers in 
    
    compact
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
          
   and 
    
    medium
    
      Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
    
      
            More on medium window size class
          
   window sizes
- Can be open or closed by default
- Two variants: standard and modal
- Put the most frequent destinations at the top and group related destinations together
- Standard navigation drawer
- Modal navigation drawer

## Availability & resources

| Type | Resource | Status |
| Design |
| Design Kit (Figma) | Available |
| Implementation |
| Flutter | Available |
| Jetpack Compose | Available |
| MDC-Android | Available |
| Web | Unavailable |

## M3 Expressive update

May 2025
The navigation drawer is no longer recommended. Use the 
    
    expanded navigation rail
    
      Expanded navigation rails show text labels and an extended FAB, and can be default or modal.
    
      
            More on navigation rails
          
   instead. More on M3 Expressive

## Differences from M2

- Color: New color mappings and compatibility with 
    
    dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
- Variants: Distinguishes two separate variants of navigation drawer: Standard and modal
- Shape: Rounded corners at the ending edge of the drawer
- States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
  : Updated color and shape for indicating selected state
M2: Navigation drawer had square corners and a rectangular shape indicating the active destination
M3: Navigation drawer has rounded corners, new color mappings, and an updated style for indicating the active destination
