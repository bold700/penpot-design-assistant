<!-- Source: https://m3.material.io/components/icon-buttons/specs -->
<!-- Scraped: 2026-04-20T18:11:22.697Z -->

## Variants

- Default icon button
- Toggle icon button
| Variant | M3 | M3 Expressive |
| Default | Available | Available |
| Toggle (selection) | Available | Available |

## Configurations

- Five sizes
- Two shapes
- Four color styles
- Three widths
| Category | Options | M3 | M3 Expressive |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |
| Color | Filled (default), tonal, outlined, standard | Available | Available |
| Width | Default | Available | Available |
| Narrow, wide | -- | Available |

## Tokens & specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table’s menu. Learn about design tokens
Token
Enabled
Disabled
Hovered
Focused
Pressed

## Anatomy

- Icon
- Container

## Color

Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.
There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.
star
Note:
These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.
A: Filled, B: Tonal, C: Outlined, D: Standard
- Default
- Toggle, unselected
- Toggle, selected
|  | 1. Default | 2. Toggle, unselected | 3. Toggle, selected |
| Filled containerFilled icon | Primary On primary | Surface containerOn surface variant | Primary On primary |
| Tonal containerTonal icon | Secondary containerOn secondary container | Secondary containerOn secondary container | Secondary On secondary |
| Outlined containerOutlined icon | Outline variant (outline)On surface variant | Outline variant (outline)On surface variant | Inverse surfaceInverse on surface |
| Standard icon | On surface variant | On surface variant | Primary |

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors. View tokens for details

### Filled button states

- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

#### Toggle

A: Unselected. B: Selected

### Tonal button states


### Outlined button states


### Standard icon button states

The standard icon button’s container is invisible at rest, but visible when the state layer is applied.

## Shape morph


### Pressed state

While pressed, icon buttons can morph to become more square.
Both round and square icon buttons should have the same pressed shape radius.The corner radius value differs for each button size. See full icon button corner measurements
A. Round, B. Square
- Hovered
- Pressed

### When selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.If the resting shape is square, the selected shape should be round.
- Selected

## Measurements

A. Extra small  B. Small  C. Medium  D. Large  E. Extra large
- Icon size
- Default width size
- Narrow width size
- Wide width size

### Target sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.
A. Extra small icon button size  B. Small icon button size
- Narrow width
- Default width
- Wide width

### Button corner radius

|  | XS | S | M | L | XL |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

## Baseline tokens

Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are no longer recommended. Standard tokens are still available in the module at the top of the page.
Token
[Deprecated] Enabled
[Deprecated] Disabled
[Deprecated] Hovered
[Deprecated] Focused
[Deprecated] Pressed (ripple)
