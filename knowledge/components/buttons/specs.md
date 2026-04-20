<!-- Source: https://m3.material.io/components/buttons/specs -->
<!-- Scraped: 2026-04-20T18:06:00.393Z -->

## Variants

- Default button
- Toggle button
| Variant | M3 | M3 Expressive |
| Default | Available | Available |
| Toggle (selection) | -- | Available |

## Configurations

- Size
- Shape
- Color
- Small button padding
| Category | Configuration | M3 | M3 Expressive |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |
| Color | Elevated, filled (default), tonal, outlined, text | Available | Available |
| Small button padding | 24dp | Available | Not recommended.Use 16dp |
| 16dp | -- | Available |

## Tokens & specs

Use the table's menu to select a token set. Button token sets are separated into common tokens, color, and size. View baseline tokens
Token
Enabled
Disabled
Hovered
Focused
Pressed

## Anatomy

- Container
- Label text
- Icon (optional)
Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.
- There are five built-in button color styles: elevated, filled, tonal, outlined, and text
- The default and toggle buttons use different colors
- Toggle buttons don’t use the text style
star
Note:
These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.
A. Elevated, B. Filled, C. Tonal, D. Outlined, E. Text
- Default
- Toggle: unselected
- Toggle: selected
|  | 1. Default | 2. Toggle unselected | 3. Toggle selected |
| Elevated containerElevated icon & label | Surface container lowPrimary | Surface container lowPrimary | PrimaryOn primary |
| Filled containerFilled icon & label | PrimaryOn primary | Surface containerOn surface variant | PrimaryOn primary |
| Tonal containerTonal icon & label | Secondary containerOn secondary container | Secondary containerOn secondary container | SecondaryOn secondary |
| Outlined containerOutlined icon & label | Outline variant (outline)On surface variant | Outline variant (outline)On surface variant | Inverse surfaceInverse on surface |
| Text icon & label | Primary | -- | -- |

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or interactive element.

### Elevated button states

The elevated button style has an elevation of 1 by default and 0 when disabled.
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

#### Toggle

A. Unselected, B. Selected

### Filled button states


### Tonal button states


### Outlined button states

The outlined button’s container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

### Text button style states

The text button’s container is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed. There is no toggle text button.

## Shape morph


### Pressed state

When pressed, buttons can morph to become more square. Both round and square buttons should have the same pressed shape.
The corner radius value differs for each button size. See full button corner measurements
A. Round button, B. Square button

### When selected

In addition to changing shape when pressed, toggle buttons also change the resting shape from round (unselected) to square (selected).
If the resting unselected shape is square, the selected shape should be round.
- Selected

## Measurements

Padding and size measurements of each button size
- Extra small
- Small
- Medium
- Large
- Extra large

### Target areas

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.
A. Extra small  B. Small
- Round button
- Button with icon
- Square button

### Corner sizes

|  | XS | S | M | L | XL |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

## Baseline tokens

Use the table's menu to switch token sets. The baseline button token sets are organized by color.
Token
[Deprecated] Enabled
[Deprecated] Disabled
[Deprecated] Hovered
[Deprecated] Focused
[Deprecated] Pressed (ripple)
