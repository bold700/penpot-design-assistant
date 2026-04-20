<!-- Source: https://m3.material.io/components/navigation-rail/specs -->
<!-- Scraped: 2026-04-20T18:14:21.363Z -->

## Variants

- Collapsed navigation rail
- Expanded navigation rail

### Baseline variants

The baseline navigation rail is no longer recommended, and should be replaced by the collapsed navigation rail. View baseline tokens
- The baseline navigation rail is no longer recommended
| Variant | M3 | M3 Expressive |
| Collapsed navigation rail | -- | Available |
| Expanded navigation rail | -- | Available |
| Navigation rail (baseline) | Available | Not recommended.Use collapsed navigation rail. |

## Configurations

- Expanded layout: standard
- Expanded layout: modal
| Category | Configuration | M3 | M3 Expressive |
| Expanded layout | Standard (default) | Available as 
    
    navigation drawer
    
      Navigation drawers let people switch between UI views on larger devices. In the expressive update, use an expanded navigation rail.
    
      
            More on navigation drawers | Available |
| Modal | Available as 
    
    navigation drawer
    
      Navigation drawers let people switch between UI views on larger devices. In the expressive update, use an expanded navigation rail.
    
      
            More on navigation drawers | Available |
| Expanded behavior | Hide when collapsed | -- | Available |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. Learn about design tokens
Token
Enabled
Hovered
Focused
Pressed

## Anatomy

Collapsed and expanded navigation rail elements:
- Container
- Menu (optional)
- FAB or Extended FAB (optional)
- Icon
- Active indicator
- Label text
- Large badge (optional)
- Large badge label (optional)
- Small badge (optional)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. Learn more about design tokens
Navigation rail color roles used for light and dark schemes:
- Surface container (optional)
- On secondary container
- Secondary container
- Secondary (vertical), On secondary container (horizontal)
- On surface variant
- Error
- On error

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or an interactive element.The navigation item’s target area always spans the full width of the nav rail, even if the item container hugs its contents.
- Enabled
- Hovered
- Focused
- Pressed

## Measurements

Navigation rail padding and size measurements

## Common layouts

- Three navigation items
- Three navigation items with a menu
- Three navigation items with a FAB
- Three navigation items with a menu and FAB

## Baseline navigation rail

- Menu icon (optional)
- Badge (optional)
Token
Enabled
Hovered
Focused
Pressed (ripple)
Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens
Navigation rail color roles used for light and dark themes:
- On surface
States are visual representations used to communicate the status of a component or interactive element.
Navigation rail states:
- Enabled (on active destination)
- Hovered (on active destination)
- Focused (on active destination)
- Pressed (on active destination)
- Enabled (on inactive destination)
- Hovered (on inactive destination)
- Focused (on inactive destination)
- Pressed (on inactive destination)
Navigation rail size measurements
Navigation rail padding and margin measurements
Common arrangements of elements within a navigation rail.
- With a menu
- With a FAB
- With menu and FAB, without labels
- All destinations with text labels
- With menu, FAB, and label text for all destinations
