<!-- Source: https://m3.material.io/components/dialogs/develop -->
<!-- Scraped: 2026-04-20T18:09:16.865Z -->

- Use dialogs to make sure users act on information
- Two variants: 
    
    basic
    
      Basic dialogs interrupt users with urgent information, details, or actions. They're often used for alerts, quick selection, or confirmation.
    
      
            More on basic dialogs
          
   and 
    
    full-screen
    
      Full-screen dialogs fill the entire screen, displaying actions that require a series of tasks to complete. They're often used for creating a calendar entry.
    
      
            More on full-screen dialogs
- Should be dedicated to completing a single task
- Can also display information relevant to the task
- Commonly used to confirm high-risk actions like deleting progress
- Basic dialog
- Full-screen dialog

## Availability & resources

| Type | Resource | Status |
| Design |
| Design Kit (Figma) | Available |
| Implementation |
| Flutter | Available |
| Jetpack Compose | Available |
| MDC-Android | Available |
| Web | Available |

## Differences from M2

- Color: New color mappings and compatibility with 
    
    dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
- Layout
    
      Layout is the visual arrangement of elements on the screen.
    
      
            More on layout
          
  : Greater padding to account for the increased corner-radius and title size
- Position: Option for custom 
    
    basic dialog 
    
      Basic dialogs interrupt users with urgent information, details, or actions. They're often used for alerts, quick selection, or confirmation.
    
      
            More on basic dialogs
          
  positioning
- Shape: Increased corner-radius
- Typography: Larger and darker headline
New updates to color, layout, position, shape, and typography
