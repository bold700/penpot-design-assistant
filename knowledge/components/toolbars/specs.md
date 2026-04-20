<!-- Source: https://m3.material.io/components/toolbars/specs -->
<!-- Scraped: 2026-04-20T18:20:35.993Z -->

## Variants

- Docked toolbar
- Floating toolbar

### Baseline variant

The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.
- Bottom app bar (not recommended)
| Variant | M3 | M3 Expressive |
| Docked toolbar | -- | Available |
| Floating toolbar | -- | Available |
| Bottom app bar | Available | Not recommended.  Use docked toolbar. |
star
Note:
Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

## Configurations

- Standard and vibrant toolbars
- Vertical floating toolbar
- Floating toolbar with FAB
| Category | Configuration | M3 | M3 Expressive |
| Color | Standard (default) | Available as bottom app bar | Available |
| Vibrant | -- | Available |
| Floating toolbar layout | Horizontal (default) | -- | Available |
| Vertical | -- | Available |
| Other elements | With FAB | Available as bottom app bar | Available* |
star
Note:
*Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is
fully supported
. On other platforms, each component needs to be added separately.

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. Jump to baseline bottom app bar specs
Token
Enabled
Disabled
Hovered
Focused
Pressed

## Anatomy

- Container
- Placed components

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots.
Each slot can be a different element. The most common elements are 
    
    icon buttons
    
      When configuring a toolbar, think of it as a container with several slots.  Each slot can be a different element. The most common elements are icon buttons, buttons, and text fields.
    
      
            More on icon buttons
          
  , 
    
    buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
  , and 
    
    text fields
    
      Text fields let users enter text into a UI.
    
      
            More on text fields
          
  .
A toolbar is essentially a container with configurable slots

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens

### Standard

Standard color schemes and icon button types:
- Surface container
- Filled button (Primary, On primary)
- Toggle tonal button (Secondary container, On secondary container)
- Standard button (Primary)

### Vibrant

Vibrant color scheme and icon button types:
- Primary container
- Toggle tonal button: (Surface container, On surface)
- Standard button (On primary container)

## Measurements

By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.
- Default margins and padding
- Margins and padding with leading, middle, and trailing content
Alignment and padding can be configured to create unique layouts:
- Left and right alignment
- Center-aligned, 8dp padding between items
Default padding of floating toolbar
Floating toolbar size and padding measurements
Floating toolbar margins

## Bottom app bar (baseline)

Bottom app bar tokens are in one token set.
Token
Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens
Bottom app bar color role used for light and dark themes:
Bottom app bar padding and size measurements

### Common layouts

- Icon buttons and FAB
- Icon buttons and no FAB
