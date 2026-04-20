<!-- Source: https://m3.material.io/components/badges/accessibility -->
<!-- Scraped: 2026-04-20T18:04:45.880Z -->

## Use cases

People should be able to use assistive technology to:
- Understand the dynamic information conveyed in badges, such as counts or labels
- Address badge announcements by selecting corresponding navigation destinations

## Interaction & style

Badges are most commonly used within other components, such as 
    
    navigation bar
    
      Navigation bars let people switch between UI views on smaller devices.
    
      
            More on navigation bars
          
  , 
    
    navigation rail
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails
          
  , 
    
    app bars
    
      App bars display navigation, actions, and text at the top of a screen.
    
      
            More on app bars
          
  , and 
    
    tabs
    
      Tabs organize content across different screens and views.
    
      
            More on tabs
          
  .When a badge is used to indicate an unread notification, the badge gets hidden once it's selected.

## Visual indicators

Badges use a color intended to stand out against labels, icons, and navigation elements. Use the default color mapping to avoid color conflict issues.
check
Badges must use default color with at least 3:1 contrast
close
Don’t
Avoid using custom color roles for the badge container and label text. If custom roles are necessary, make sure they have contrast of at least 3:1.

## Labeling elements

The 
    
    accessibility
    
      Accessible design makes products usable for people with all kinds of abilities.
    
      
            More on accessibility
          
   label for a badge item will be read after its navigation destination. Any numerical badges will have their number read, while non-counting badges will simply announce New notification.
Numerical badges will have their number read
Non-counting badges will simply announce New notification
