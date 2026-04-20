<!-- Source: https://m3.material.io/components/split-button/specs -->
<!-- Scraped: 2026-04-20T18:18:10.543Z -->

## Variants

| Variant | M3 | M3 Expressive |
| Split button | -- | Available |

## Configurations

- Color configurations: Elevated, filled, tonal, outlined
- Size configurations: XS, S, M, L, XL
| Category | Configuration | M3 | M3 Expressive |
| Size | XS, S, M, L, XL | -- | Available |
| Color | Elevated, filled, tonal, outlined | -- | Available |

## Tokens & specs

Use the table's menu to select a token set. Split button token sets are organized by size. Learn about design tokens
Token
Value
Split button xsmall container height
md.comp.split-button.xsmall.container.height
32dp
Split button xsmall between space
md.comp.split-button.xsmall.between-space
2dp
Split button xsmall container shape
md.comp.split-button.xsmall.container.shape
Split button xsmall inner corner size
md.comp.split-button.xsmall.inner-corner.corner-size
4dp
Split button xsmall outer corner size
md.comp.split-button.xsmall.outer-corner.corner-size
50%
Split button xsmall leading button leading space
md.comp.split-button.xsmall.leading-button.leading-space
12dp
Split button xsmall leading button trailing space
md.comp.split-button.xsmall.leading-button.trailing-space
10dp
Split button xsmall trailing button icon size
md.comp.split-button.xsmall.trailing-button.icon.size
22dp
Split button xsmall trailing button leading space
md.comp.split-button.xsmall.trailing-button.leading-space
13dp
Split button xsmall trailing button trailing space
md.comp.split-button.xsmall.trailing-button.trailing-space
13dp
Split button xsmall inner corner hovered size
md.comp.split-button.xsmall.inner-corner.hovered.corner-size
8dp
Split button xsmall inner corner pressed size
md.comp.split-button.xsmall.inner-corner.pressed.corner-size
8dp
Split button xsmall trailing button inner corner selected size
md.comp.split-button.xsmall.trailing-button.inner-corner.selected.corner-size
50%

## Anatomy

- Leading button
- Icon
- Label text
- Trailing button
The leading button in split buttons can have an icon, label text, or both. The trailing button should always have a menu icon.
- Label + icon
- Label

## Color

Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.
Split buttons use the same color schemes as standard 
    
    buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
  . However, unlike toggle buttons, the split button color doesn’t change when selected—only a state layer is applied.
Split buttons use the same colors and state layers as buttons, shown in the following token module. Go to buttons for more details.
A: Unselected, B: Selected trailing icon
- Elevated
- Filled
- Tonal
- Outlined
Token
Enabled
Disabled
Hovered
Focused
Pressed

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or an interactive element.
Split button states use the same colors and state layers as 
    
    buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
   and 
    
    icon buttons
    
      Icon buttons help people take minor actions with one tap.
    
      
            More on icon buttons
          
  . Go to those specs for details.

### Leading button shape

The inner corners change shape for hovered, focused, and pressed states.
- Enabled
- Disabled
- Hovered
- Focused
- Pressed, pressed with focus

### Trailing button shape

The inner corners change shape for hovered, focused, and pressed states, and the icon becomes centered when selected.
- Selected, selected with focus

## Measurements

Text and icons are optically centered when the buttons are asymmetrical. They’re centered normally when symmetrical.
Menu icon offset when unselected:
- XS: -1dp from center
- S: -1dp from center
- M: -2dp from center
- L: -3dp from center
- XL: -6dp from center
The inner corner radius changes depending on button sizing. The space should always be 2dp.
- Extra small 4dp
- Small 4dp
- Medium 4dp
- Large 8dp
- Extra large 12dp
