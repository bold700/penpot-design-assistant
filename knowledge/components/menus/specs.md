<!-- Source: https://m3.material.io/components/menus/specs -->
<!-- Scraped: 2026-04-20T08:10:01.630Z -->

link
Copy link
Link copied

## Variants

link
Copy link
Link copied

### Vertical menus

link
Copy link
Link copied
Use vertical menus for a more expressive look and feel, including rounded corners, standard and vibrant color styles, more selection states, and submenu motion.
link
Copy link
Link copied
- Vertical menu with gap
- Vertical menu with divider
link
Copy link
Link copied

### Baseline variant

link
Copy link
Link copied
In M3 Expressive, 
    
    baseline
    
      Baseline variants are the original M3 component designs. They may not have the latest features introduced in M3 Expressive, like updated motion, shapes, type, and styles.
    
      
            More on M3 Expressive
          
   menu is still available to use, but doesn’t have the latest shapes, color styles, selection states, and motion. See baseline menu specs
link
Copy link
Link copied
A baseline menu has square corners, as compared to a vertical menu’s round corners and expressive styling
link
Copy link
Link copied
| Variant | M3 | M3 Expressive |
| Vertical menus | -- | Available |
| Menu (
    
    baseline
    
      Baseline variants are the original M3 component designs. They may not have the latest features introduced in M3 Expressive, like updated motion, shapes, type, and styles.
    
      
            More on M3 Expressive
          
  ) | Available | Available |
link
Copy link
Link copied

## Configurations

link
Copy link
Link copied

### Vertical menus layout

link
Copy link
Link copied
- Standard
- Grouped
link
Copy link
Link copied
| Category | Configuration | M3 | M3 Expressive |
| Color | Standard | Available | Available |
| Vibrant | -- | Available |
| Layout | Standard | Available | Available |
| Grouped | -- | Available |
link
Copy link
Link copied

## Tokens & specs

link
Copy link
Link copied
Browse the component elements, attributes, tokens, and their values. Learn about design tokens
link
Copy link
Link copied
Token
Enabled
Disabled
Hover
Focus
Pressed
Focus indicator
link
Copy link
Link copied

## Anatomy

link
Copy link
Link copied
link
Copy link
Link copied
- Menu item
- Leading icon (optional)
- Menu item text
- Trailing icon (optional)
- Badge (optional)
- Trailing text (optional)
- Container
- Supporting text (optional)
- Label text (optional)
- Gap (optional)
- Divider (optional)
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
          
  . For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied
Menus have two color mappings:
- Standard: Surface-based
- Vibrant: Tertiary-based
These mappings provide options for lower or higher visual emphasis. Vibrant menus are more prominent so should be used sparingly.
- Standard color scheme
- Vibrant color scheme
link
Copy link
Link copied

### Standard colors

link
Copy link
Link copied
Vertical menus color roles used for light and dark themes:
- On surface variant
- On surface
- On surface (state layer)
- Surface container low
- Tertiary container (selected)
- On tertiary container (selected)
link
Copy link
Link copied

### Vibrant colors

link
Copy link
Link copied
- On tertiary container
- On tertiary container (state layer)
- Tertiary container
- Tertiary (selected)
- On tertiary (selected)
link
Copy link
Link copied

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or an interactive element. More on interaction statesShape morphing in vertical menus creates an expressive active state. As focus moves between submenus, the corner shape changes to highlight the active menu. More on menu focus
link
Copy link
Link copied
- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Active (main menu reveals submenu)
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
Vertical menu padding and size measurements
link
Copy link
Link copied

## Menu (baseline)

link
Copy link
Link copied
The 
    
    baseline
    
      Baseline variants are the original M3 component designs. They may not have the latest features introduced in M3 Expressive, like updated motion, shapes, type, and styles.
    
      
            More on M3 Expressive
          
   menu variant is available and continues to work in existing products. However, M3 expressive vertical menus are recommended for new designs.
link
Copy link
Link copied

### Baseline tokens & specs

link
Copy link
Link copied
link
Copy link
Link copied
Token
Enabled
Disabled
Hover
Focus
Pressed
Focus indicator
link
Copy link
Link copied
link
Copy link
Link copied
- List item
- List item leading icon
- List item trailing icon
- List item trailing text
- Divider
link
Copy link
Link copied
link
Copy link
Link copied
Baseline menu color roles used for light and dark themes:
- On surface - opacity: 0.08
- Surface container
- Surface container highest
- Outline variant
link
Copy link
Link copied
link
Copy link
Link copied

#### Default menu items

link
Copy link
Link copied
link
Copy link
Link copied

#### Selected menu items

link
Copy link
Link copied
link
Copy link
Link copied
State specs are in the token module above
link
Copy link
Link copied
link
Copy link
Link copied
Baseline menu padding and size measurements
link
Copy link
Link copied
| Attribute | Value |
| Container width | 112dp min, 280dp max |
| Corner radius | 4dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 12dp |
| Left/right padding with-icon | 12dp |
| List item height | 48dp |
| Padding between elements within a list item | 12dp |
| Divider top/bottom padding | 8dp |
| Divider height | 1dp |
| Divider width | Dynamic |
| Leading/trailing icon size | 24dp |
link
Copy link
Link copied
link
Copy link
Link copied
A baseline menu appears when a person interacts with a button, action, or other control.
A few examples:
- Button
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
- Text field
    
      Text fields let users enter text into a UI.
    
      
            More on text fields
- Icon button
    
      Icon buttons help people take minor actions with one tap.
    
      
            More on icon buttons
- Selected text
