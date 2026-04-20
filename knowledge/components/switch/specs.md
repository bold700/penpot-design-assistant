<!-- Source: https://m3.material.io/components/switch/specs -->
<!-- Scraped: 2026-04-20T18:18:36.411Z -->

- Track
- Handle (formerly "thumb")
- Icon

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. Learn more about design tokens
Token
Enabled
Disabled
Hovered
Focused
Pressed (ripple)

## Color

Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens
Switch color roles used for light and dark themes:
- Surface container highest
- Outline
- Primary
- On primary
- On primary container

### Adjacent text label color

Use the 
    
    color role
    
      Color roles are assigned to UI elements based on emphasis, container type, and relationship with other elements. This ensures proper contrast and usage in any color scheme.
    
      
            More on color roles
          
   on surface for adjacent text labels. This remains the same even if interacting with the label or component.
The text label uses on surface. Supporting text may use on surface variant.

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states
- Enabled
- Hovered
- Focused
- Pressed
- Disabled
State specs are in the token module above

## Measurements

Switches without icons
Pressed switches without icons
Switches with icons
Pressed switches with icons
| Element | Attribute | Value |
| Track | Height | 32dp |
| Width | 52dp |
| Outline width | 2dp |
| Shape | md.sys.shape.corner.full |
| Handle | Height (unselected) | 16dp |
| Height - with icon | 24dp |
| Height (selected) | 24dp |
| Height (pressed) | 28dp |
| Width (unselected) | 16dp |
| Width - with icon | 24dp |
| Width (selected) | 24dp |
| Width (pressed) | 28dp |
| Shape | md.sys.shape.corner.full |
| State layer | Size | 40dp |
| Shape | md.sys.shape.corner.full |
| Target | Size | 48dp |
| Icon | Size (selected) | 16dp |
| Icon | Size (unselected) | 16dp |

## Configurations

- Without icons
- Icon on selected switch
- Icon on selected and unselected switch
