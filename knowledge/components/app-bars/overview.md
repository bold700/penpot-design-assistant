<!-- Source: https://m3.material.io/components/app-bars/overview -->
<!-- Scraped: 2026-04-20T08:01:32.037Z -->

link
Copy link
Link copied
- Focus on describing the current page and provide 1–2 essential actions
- Displays labels and page navigation controls at the top of the page. (Use a 
    
    toolbar
    
      Toolbars display frequently used actions relevant to the current page.
    
      
            More on toolbars
          
   to display page actions)
- Four variants: Search app bar, small, medium flexible, large flexible
- On scroll, apply a fill color to separate from body content
- Can animate on and off screen with another bar of controls, like a row of 
    
    chips
    
      Chips help people enter information, make selections, filter content, or trigger actions.
    
      
            More on chips
link
Copy link
Link copied
- Search app bar
- Small
- Medium flexible
- Large flexible
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

May 2025The new search app bar supports icons inside and outside the search bar, and centered text. It opens the search view component when selected. The new medium flexible and large flexible app bars come with significant improvements, and should replace medium and large app bars, which are no longer recommended. The small app bar is updated with the same flexible improvements. More on M3 Expressive
link
Copy link
Link copied
Variants and naming:
- Renamed component from top app bar to app bar
- Added search app bar
- Medium and large app bars are no longer recommended
- Added medium flexible and large flexible app bars with:Reduced overall heightLarger title textSubtitleLeft- and center-aligned text optionsText wrappingMore flexible elements for imagery and filled buttons
- Added features to small app bar:SubtitleCenter-aligned text optionMore flexible elements for imagery and filled buttons
link
Copy link
Link copied

## Differences from M2

link
Copy link
Link copied
- Color: New color mappings and compatibility with dynamic color
- On scroll: No drop shadow, instead a color fill creates separation from content
- Typography: Larger default text
- Layout: Smaller default height
link
Copy link
Link copied
M2: Elevation and a drop shadow raise the top app bar when content is present underneath
M3: On scroll, a color fill overlay separates the app bar from the content beneath
