<!-- Source: https://m3.material.io/components/switch/specs -->
<!-- Scraped: 2026-04-20T08:15:59.571Z -->

link
Copy link
Link copied
- Track
- Handle (formerly "thumb")
- Icon
link
Copy link
Link copied

## Tokens & specs

link
Copy link
Link copied
Browse the component elements, attributes, tokens, and their values. Learn more about design tokens
link
Copy link
Link copied
Token
Enabled
Disabled
Hovered
Focused
Pressed (ripple)
link
Copy link
Link copied

## Color

Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied
Switch color roles used for light and dark themes:
- Surface container highest
- Outline
- Primary
- On primary
- On primary container
link
Copy link
Link copied

### Adjacent text label color

Use the 
    
    color role
    
      Color roles are assigned to UI elements based on emphasis, container type, and relationship with other elements. This ensures proper contrast and usage in any color scheme.
    
      
            More on color roles
          
   on surface for adjacent text labels. This remains the same even if interacting with the label or component.
The text label uses on surface. Supporting text may use on surface variant.
link
Copy link
Link copied

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states
link
Copy link
Link copied
- Enabled
- Hovered
- Focused
- Pressed
- Disabled
link
Copy link
Link copied
State specs are in the token module above
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
Switches without icons
Pressed switches without icons
link
Copy link
Link copied
Switches with icons
Pressed switches with icons
link
Copy link
Link copied
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
link
Copy link
Link copied

## Configurations

link
Copy link
Link copied
- Without icons
- Icon on selected switch
- Icon on selected and unselected switch
