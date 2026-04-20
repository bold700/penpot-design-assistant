<!-- Source: https://m3.material.io/components/icon-buttons/develop -->
<!-- Scraped: 2026-04-20T08:08:53.453Z -->

link
Copy link
Link copied
- Icon buttons must use a system icon with a clear meaning
- Two variants: default and toggle
- Many configurations: Color, size, width, and shape
- On web, display a tooltip describing the action while hovering
- In toggle buttons, use the outlined style of an icon for the unselected state, and the filled style for the selected state
link
Copy link
Link copied
Standard, filled unselected, filled selected, filled tonal, and outlined icon buttons
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
Icon buttons now have a wider variety of shapes and sizes, changing shape when selected. When placed in 
    
    button groups
    
      Button groups organize buttons and add interactions between them.
    
      
            More on button groups
          
  , icon buttons interact with each other when pressed. More on M3 Expressive
link
Copy link
Link copied
Variants and naming:
- Default and toggle (selection)
- Color styles are now configurations. (filled, tonal, outlined, standard)
Shapes:
- Round and square options
- Shape morphs when pressed
- Shape morphs when selected
Sizes:
- Extra small
- Small (default)
- Medium
- Large
- Extra large
Widths:
- Narrow
- Default
- Wide
- Five sizes
- Two shapes
- Three widths
link
Copy link
Link copied

## Differences from M2

link
Copy link
Link copied
- Color: New color mappings and compatibility with dynamic color
- Variants and naming: Icon buttons were called toggle buttons. There are now two variants of icon buttons: default and toggle.
- Default icon buttons
- Toggle icon buttons
