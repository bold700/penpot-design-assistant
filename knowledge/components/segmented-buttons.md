<!-- Source: https://m3.material.io/components/segmented-buttons -->
<!-- Scraped: 2026-04-20T04:28:30.054Z -->

link
Copy link
Link copied
star
Note:
Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the
connected button group
instead, which has mostly the same functionality but with an updated visual design.
link
Copy link
Link copied
- Segmented buttons can contain icons, label text, or both
- Two variants: single-select and multi-select
- Use for simple choices between two to five items (for more items or complex choices, use 
    
    chips
    
      Chips help people enter information, make selections, filter content, or trigger actions.
    
      
            More on chips
          
  )
link
Copy link
Link copied
- Single-select segmented button
- Multi-select segmented button
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
| MDC-Android | Available |
| Web | Unavailable |
link
Copy link
Link copied

## M3 Expressive update

link
Copy link
Link copied
May 2025
The segmented button is no longer recommended. Use the connected button group instead. More on M3 Expressive
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
- Icons: Optional check icon to indicate selected 
    
    state
    
      States show the interaction status of a component or UI element.
    
      
            More on states
- Layout: Taller container height of 40dp
- Name and variants: Segmented buttons were previously known as toggle buttons. They now have two official variants: single-select and multi-select.
- Shape: Fully rounded corners
- Typography: Labels use sentence case instead of all caps
Segmented buttons now have a container height of 40dp
link
Copy link
Link copied
M2: Segmented buttons had a small corner radius and label text in all caps
M3: Segmented buttons have fully rounded corners, sentence-case text, different height, and new color mappings
