<!-- Source: https://m3.material.io/components/search/develop -->
<!-- Scraped: 2026-04-20T08:13:14.231Z -->

link
Copy link
Link copied
- Use search for navigating a product with queries
- A search bar can include a leading search icon, hinted search text, and optional trailing icons
- Search can display suggested keywords or phrases as a person types
- A search bar displays search suggestions or results in a 
    
    list
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
- Use a search 
    
    app bar
    
      App bars contain page navigation and information at the top of a screen.
    
      
            More on app bars
          
   to provide an emphasized, global entry-point
link
Copy link
Link copied
When inputting text, search suggestions or results appear below the search bar
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
| MDC-Android | Available |
| MDC-Android Expressive | Unavailable |
| Flutter | Available |
| Jetpack Compose | Available |
| Jetpack Compose: Expressive | Available |
| Web | Unavailable |
| Web: Expressive | Unavailable |
link
Copy link
Link copied

## M3 Expressive update

link
Copy link
Link copied
Search has a new visual style, motion, and more flexibility for trailing icons. More on M3 Expressive
link
Copy link
Link copied
February 2025
Naming
- Search bar and search view are now collectively named search
Configurations
- Styles: Search can be contained (recommended) or divided
- Gaps can separate results into groups
Motion
- The search bar grows wider when focused
Supported platforms:
- Jetpack Compose
The contained search style features a persistent, filled search container
link
Copy link
Link copied

## Differences from M2 to M3 baseline

link
Copy link
Link copied
- Color: New color mappings and compatibility with 
    
    dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
- Elevation: Lower elevation and no shadow by default
- Name: Search was formerly known as open search bar
- Variants: Two official variants of search components: search bar and search view
link
Copy link
Link copied
M2 open search bars were square and elevated
M3 search bars are rounded, use tonal surface, and support dynamic color
