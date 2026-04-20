<!-- Source: https://m3.material.io/components/bottom-sheets/develop -->
<!-- Scraped: 2026-04-20T08:02:46.573Z -->

link
Copy link
Link copied
- Use bottom sheets in 
    
    compact
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
          
   and 
    
    medium window sizes
    
      Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
    
      
            More on medium window size class
- Two variants: 
    
    standard
    
      Standard bottom sheets display supplementary content without blocking access to the screen’s primary content, such as an audio player at the bottom of a music app.
    
      
   and 
    
    modal
    
      Modal bottom sheets appear in front of app content, disabling all other app functionality when they appear, and remaining on screen until confirmed, dismissed, or a required action has been taken.
- Content should be additional or secondary (not the app’s main content)
- Bottom sheets can be dismissed in order to interact with the main content
link
Copy link
Link copied
- Standard bottom sheet
- Modal bottom sheet
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
| MDC-Android | Available |
| Jetpack Compose | Available |
| Web | Unavailable |
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
- Shape: Bottom sheets have a 28dp top corner radius
- Layout: New max-width of 640dp and an optional drag handle with an accessible 48dp hit target
