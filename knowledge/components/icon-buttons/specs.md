<!-- Source: https://m3.material.io/components/icon-buttons/specs -->
<!-- Scraped: 2026-04-20T08:08:36.986Z -->

link
Copy link
Link copied

## Variants

link
Copy link
Link copied
- Default icon button
- Toggle icon button
link
Copy link
Link copied
| Variant | M3 | M3 Expressive |
| Default | Available | Available |
| Toggle (selection) | Available | Available |
link
Copy link
Link copied

## Configurations

link
Copy link
Link copied
- Five sizes
- Two shapes
- Four color styles
- Three widths
link
Copy link
Link copied
| Category | Options | M3 | M3 Expressive |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |
| Color | Filled (default), tonal, outlined, standard | Available | Available |
| Width | Default | Available | Available |
| Narrow, wide | -- | Available |
link
Copy link
Link copied

## Tokens & specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table’s menu. Learn about design tokens
link
Copy link
Link copied
Token
Enabled
Disabled
Hovered
Focused
Pressed
link
Copy link
Link copied

## Anatomy

link
Copy link
Link copied
- Icon
- Container
link
Copy link
Link copied

## Color

link
Copy link
Link copied
Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.
There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.
link
Copy link
Link copied
star
Note:
These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.
link
Copy link
Link copied
A: Filled, B: Tonal, C: Outlined, D: Standard
- Default
- Toggle, unselected
- Toggle, selected
link
Copy link
Link copied
|  | 1. Default | 2. Toggle, unselected | 3. Toggle, selected |
| Filled containerFilled icon | Primary On primary | Surface containerOn surface variant | Primary On primary |
| Tonal containerTonal icon | Secondary containerOn secondary container | Secondary containerOn secondary container | Secondary On secondary |
| Outlined containerOutlined icon | Outline variant (outline)On surface variant | Outline variant (outline)On surface variant | Inverse surfaceInverse on surface |
| Standard icon | On surface variant | On surface variant | Primary |
link
Copy link
Link copied

## States

link
Copy link
Link copied
States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors. View tokens for details
link
Copy link
Link copied

### Filled button states

link
Copy link
Link copied
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)
link
Copy link
Link copied

#### Toggle

link
Copy link
Link copied
A: Unselected. B: Selected
link
Copy link
Link copied

### Tonal button states

link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied

### Outlined button states

link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied

### Standard icon button states

link
Copy link
Link copied
The standard icon button’s container is invisible at rest, but visible when the state layer is applied.
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied

## Shape morph

link
Copy link
Link copied

### Pressed state

While pressed, icon buttons can morph to become more square.
Both round and square icon buttons should have the same pressed shape radius.The corner radius value differs for each button size. See full icon button corner measurements
A. Round, B. Square
- Hovered
- Pressed
link
Copy link
Link copied

### When selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.If the resting shape is square, the selected shape should be round.
- Selected
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
A. Extra small  B. Small  C. Medium  D. Large  E. Extra large
- Icon size
- Default width size
- Narrow width size
- Wide width size
link
Copy link
Link copied

### Target sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.
A. Extra small icon button size  B. Small icon button size
- Narrow width
- Default width
- Wide width
link
Copy link
Link copied

### Button corner radius

link
Copy link
Link copied
link
Copy link
Link copied
|  | XS | S | M | L | XL |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |
link
Copy link
Link copied

## Baseline tokens

link
Copy link
Link copied
Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are no longer recommended. Standard tokens are still available in the module at the top of the page.
link
Copy link
Link copied
Token
[Deprecated] Enabled
[Deprecated] Disabled
[Deprecated] Hovered
[Deprecated] Focused
[Deprecated] Pressed (ripple)
