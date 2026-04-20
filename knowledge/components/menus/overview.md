<!-- Source: https://m3.material.io/components/menus/overview -->
<!-- Scraped: 2026-04-20T18:12:48.282Z -->

- Use a menu to show a temporary set of actions. To show actions on screen at all times, use a 
    
    toolbar
    
      Toolbars display frequently used actions relevant to the current page.
    
      
            More on toolbars
          
   instead
- Menus can open from many components, including 
    
    icon buttons
    
      Icon buttons help people take minor actions with one tap.
    
      
            More on icon buttons
          
  , 
    
    split buttons
    
      The split button opens a menu to give people more options related to an action.
    
      
            More on split buttons
          
  , and 
    
    text fields
    
      Text fields let users enter text into a UI.
    
      
            More on text fields
- Context menus provide actions for a specific element, like an image or highlighted text, and usually open with a secondary click
Vertical menus can include vibrant colors, gaps, dividers, and submenus to organize a list of choices

## Availability & resources

| Type | Resource | Status |
| Design |
| Design Kit (Figma) | Available |
| Implementation |
| Flutter | Available |
| Jetpack Compose | Available |
| Jetpack Compose: Expressive | Available |
| MDC-Android | Available |
| MDC-Android: Expressive | Unavailable |
| Web | Available |
| Web: Expressive | Unavailable |

## M3 Expressive update

November 2025
Vertical menus were introduced with new shapes, color styles, selection states, and refined submenu motion. Gaps can be used for a more flexible layout on Android. More on M3 Expressive
Variants:
- Added vertical menus, recommended for new designs
- Baseline
    
      Baseline variants are the M3 component designs. They may not have the latest features introduced in M3 Expressive, like updated motion, shapes, type, and styles.
    
      
            More on M3 Expressive
          
   menu is still available
Color styles:
- Standard
- Vibrant
Vibrant colors help selected menu items stand out

## Differences from M2

- Color: New color mappings and compatibility with 
    
    dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
- Variants: Dropdown menu and exposed dropdown menu are now both referred to as menu, since they differ only in the element which opens the menu surface
M2: Former menu colors don’t contrast with the background
M3: Menus feature new color mappings and dynamic color
