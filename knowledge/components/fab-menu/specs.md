<!-- Source: https://m3.material.io/components/fab-menu/specs -->
<!-- Scraped: 2026-04-20T08:07:37.220Z -->

link
Copy link
Link copied

## Variants

link
Copy link
Link copied
There’s one variant of FAB menu
link
Copy link
Link copied
| Variant | M3 | M3 Expressive |
| FAB menu | -- | Available |
link
Copy link
Link copied

## Configurations

link
Copy link
Link copied
Three color sets:
- Primary
- Secondary
- Tertiary
link
Copy link
Link copied
| Category | Configuration | M3 | M3 Expressive |
| Color | Primary set, secondary set, tertiary set | -- | Available |
link
Copy link
Link copied

## Tokens & specs

link
Copy link
Link copied
Use the table's menu to switch token sets. The FAB menu has a common token set and six color sets, three for each element (close button and menu item). Learn about design tokens
link
Copy link
Link copied
Token
Value
Close button
List item
link
Copy link
Link copied

## Anatomy

link
Copy link
Link copied
- Close button
- Menu item
link
Copy link
Link copied
The FAB menu can have up to six items
link
Copy link
Link copied

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied
- On primary container
- Primary container
- On primary
- On secondary container
- Secondary container
- On secondary
- On tertiary container
- Tertiary container
- On tertiary
link
Copy link
Link copied

## States

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states
link
Copy link
Link copied
link
Copy link
Link copied
Close button states in light and dark themes:
- Enabled
- Hovered
- Focused
- Pressed
link
Copy link
Link copied
link
Copy link
Link copied
Menu item states in light and dark themes:
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
FAB menu items share the same measurements as the medium 
    
    button
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
   specs.
The close button should always be 56dp.
FAB menu size measurements
link
Copy link
Link copied
The FAB menu animates from the top trailing edge of the FAB to ensure a smooth animation.
The FAB should always have 16dp margins
The close button and FAB share the top trailing corner as an anchor and appear in the same place
link
Copy link
Link copied
Larger FABs will place the FAB menu slightly higher, with larger margins underneath.
The medium FAB placement has 16dp margins
The close button is placed higher to align with the top of the medium FAB
link
Copy link
Link copied
The large FAB placement has 16dp margins
The close button is placed higher to align with the top of the large FAB
link
Copy link
Link copied
On web, the FAB menu opens from the FAB, and inherits its states and specs from the baseline 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   component.
The gap between the FAB and menu can vary, but 4dp is recommended.
Spacing and interaction on FAB menu for web:
- Selected
