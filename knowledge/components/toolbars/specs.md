<!-- Source: https://m3.material.io/components/toolbars/specs -->
<!-- Scraped: 2026-04-20T08:18:03.006Z -->

link
Copy link
Link copied

## Variants

link
Copy link
Link copied
- Docked toolbar
- Floating toolbar
link
Copy link
Link copied

### Baseline variant

link
Copy link
Link copied
The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.
link
Copy link
Link copied
- Bottom app bar (not recommended)
link
Copy link
Link copied
| Variant | M3 | M3 Expressive |
| Docked toolbar | -- | Available |
| Floating toolbar | -- | Available |
| Bottom app bar | Available | Not recommended.  Use docked toolbar. |
link
Copy link
Link copied
star
Note:
Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.
link
Copy link
Link copied

## Configurations

link
Copy link
Link copied
- Standard and vibrant toolbars
- Vertical floating toolbar
- Floating toolbar with FAB
link
Copy link
Link copied
| Category | Configuration | M3 | M3 Expressive |
| Color | Standard (default) | Available as bottom app bar | Available |
| Vibrant | -- | Available |
| Floating toolbar layout | Horizontal (default) | -- | Available |
| Vertical | -- | Available |
| Other elements | With FAB | Available as bottom app bar | Available* |
link
Copy link
Link copied
star
Note:
*Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is
fully supported
. On other platforms, each component needs to be added separately.
link
Copy link
Link copied

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. Jump to baseline bottom app bar specs
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
- Container
- Placed components
link
Copy link
Link copied

### Flexibility & slots

link
Copy link
Link copied
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
link
Copy link
Link copied

## Color

link
Copy link
Link copied
Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied

### Standard

link
Copy link
Link copied
Standard color schemes and icon button types:
- Surface container
- Filled button (Primary, On primary)
- Toggle tonal button (Secondary container, On secondary container)
- Standard button (Primary)
link
Copy link
Link copied

### Vibrant

link
Copy link
Link copied
Vibrant color scheme and icon button types:
- Primary container
- Toggle tonal button: (Surface container, On surface)
- Standard button (On primary container)
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.
link
Copy link
Link copied
link
Copy link
Link copied
- Default margins and padding
- Margins and padding with leading, middle, and trailing content
link
Copy link
Link copied
Alignment and padding can be configured to create unique layouts:
- Left and right alignment
- Center-aligned, 8dp padding between items
link
Copy link
Link copied
link
Copy link
Link copied
Default padding of floating toolbar
link
Copy link
Link copied
Floating toolbar size and padding measurements
link
Copy link
Link copied
Floating toolbar margins
link
Copy link
Link copied

## Bottom app bar (baseline)

link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
Bottom app bar tokens are in one token set.
link
Copy link
Link copied
Token
link
Copy link
Link copied
link
Copy link
Link copied
Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied
Bottom app bar color role used for light and dark themes:
link
Copy link
Link copied
link
Copy link
Link copied
Bottom app bar padding and size measurements
link
Copy link
Link copied

### Common layouts

link
Copy link
Link copied
- Icon buttons and FAB
- Icon buttons and no FAB
