<!-- Source: https://m3.material.io/components/fab-menu/specs -->
<!-- Scraped: 2026-04-20T18:10:24.616Z -->

## Variants

There’s one variant of FAB menu
| Variant | M3 | M3 Expressive |
| FAB menu | -- | Available |

## Configurations

Three color sets:
- Primary
- Secondary
- Tertiary
| Category | Configuration | M3 | M3 Expressive |
| Color | Primary set, secondary set, tertiary set | -- | Available |

## Tokens & specs

Use the table's menu to switch token sets. The FAB menu has a common token set and six color sets, three for each element (close button and menu item). Learn about design tokens
Token
Value
Close button
List item

## Anatomy

- Close button
- Menu item
The FAB menu can have up to six items

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens
- On primary container
- Primary container
- On primary
- On secondary container
- Secondary container
- On secondary
- On tertiary container
- Tertiary container
- On tertiary

## States

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states
Close button states in light and dark themes:
- Enabled
- Hovered
- Focused
- Pressed
Menu item states in light and dark themes:

## Measurements

FAB menu items share the same measurements as the medium 
    
    button
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
   specs.
The close button should always be 56dp.
FAB menu size measurements
The FAB menu animates from the top trailing edge of the FAB to ensure a smooth animation.
The FAB should always have 16dp margins
The close button and FAB share the top trailing corner as an anchor and appear in the same place
Larger FABs will place the FAB menu slightly higher, with larger margins underneath.
The medium FAB placement has 16dp margins
The close button is placed higher to align with the top of the medium FAB
The large FAB placement has 16dp margins
The close button is placed higher to align with the top of the large FAB
On web, the FAB menu opens from the FAB, and inherits its states and specs from the baseline 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   component.
The gap between the FAB and menu can vary, but 4dp is recommended.
Spacing and interaction on FAB menu for web:
- Selected
