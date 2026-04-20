<!-- Source: https://m3.material.io/components/navigation-drawer/guidelines -->
<!-- Scraped: 2026-04-20T08:11:04.473Z -->

link
Copy link
Link copied
star
Note:
The navigation drawer is no longer recommended in the Material 3 expressive update. For those who have updated, use an
expanded navigation rail
, which has mostly the same functionality of the navigation drawer and adapts better across window size classes.
link
Copy link
Link copied
link
Copy link
Link copied

## Usage

link
Copy link
Link copied
Navigation drawers provide access to destinations and app functionality, such as switching accounts. They can either be permanently on-screen or opened and closed by a navigation 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   icon. One navigation destination is always active.
Navigation drawers are recommended for:
- Apps with 5 or more top-level destinations
- Apps with 2 or more levels of navigation hierarchy
- Quick navigation between unrelated destinations
- Replacing the 
    
    navigation rail
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails
          
   or 
    
    navigation bar
    
      Navigation bars let people switch between UI views on smaller devices.
    
      
            More on navigation bars
          
   on large screens
check
Use a navigation drawer for 5 or more primary destinations, or more than 1 level of navigation hierarchy
link
Copy link
Link copied
Avoid using a navigation drawer with other primary navigation components, such as a navigation bar.
Instead, choose a single navigation component based on product requirements, breakpoints, and 
    
    window size class
    
      Window size classes are opinionated breakpoints where layouts need to change to optimize for available space, device conventions, and ergonomics.
    
      
            More on window size classes
          
  :
- Navigation bars
    
      Navigation bars let people switch between UI views on smaller devices.
    
      
            More on navigation bars
          
   for 
    
    compact window sizes
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
- Navigation rails
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails
          
   for 
    
    medium
    
      Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
    
      
            More on medium window size class
          
   and 
    
    expanded window sizes
    
      Window widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop.
    
      
            More on expanded window size class
- Standard navigation drawers for expanded, 
    
    large
    
      Window widths 1200dp to 1599dp, such as desktop.
    
      
            More on large window size class
          
   and 
    
    extra-large
    
      Window widths 1600dp and larger, such as ultra-wide monitors.
    
      
            More on extra-large window size class
          
   window sizes
exclamation
Caution
Avoid using two navigation components on the same screen
link
Copy link
Link copied
There are two variants of navigation drawers:
- Standard navigation drawer
- Modal navigation drawer
link
Copy link
Link copied
link
Copy link
Link copied
Standard navigation drawers provide access to drawer destinations and app content for 
    
    layouts
    
      Layout is the visual arrangement of elements on the screen.
    
      
            More on layout
          
   in 
    
    expanded
    
      Window widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop.
    
      
            More on expanded window size class
          
  , 
    
    large
    
      Window widths 1200dp to 1599dp, such as desktop.
    
      
            More on large window size class
          
  , and 
    
    extra-large
    
      Window widths 1600dp and larger, such as ultra-wide monitors.
    
      
            More on extra-large window size class
          
   window sizes.
Standard drawers can be permanently visible (best for frequently switching destinations) or opened and closed by tapping a 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   icon (best for focusing more on screen content).
In 
    
    medium
    
      Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
    
      
            More on medium window size class
          
   and 
    
    compact window sizes
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
          
  , use modal drawers instead.
Standard navigation drawer providing access to drawer destinations next to app content
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
Modal navigation drawers use a scrim to block interaction with the rest of an app’s content, and don’t affect the screen’s 
    
    layout
    
      Layout is the visual arrangement of elements on the screen.
    
      
            More on layout
          
   grid.
Modal navigation drawers can be used in any window size, but are primarily used in compact and medium sizes where space is limited or prioritized for app content.
They can be swapped with standard drawers on expanded, 
    
    large
    
      Window widths 1200dp to 1599dp, such as desktop.
    
      
            More on large window size class
          
  , and 
    
    extra-large
    
      Window widths 1600dp and larger, such as ultra-wide monitors.
    
      
            More on extra-large window size class
          
   window sizes.
Modal navigation drawer using a scrim to block interaction with the rest of an app’s content
link
Copy link
Link copied
Modal navigation drawers are always opened by an action outside of the drawer, such as clicking a navigation 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   icon in a 
    
    navigation rail
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails
          
  .
Modal drawers can be dismissed by:
- Selecting a drawer item
- Tapping the scrim
- Swiping toward the drawer’s anchoring edge (for example, swiping right-to-left for a left-aligned navigation drawer)
A modal drawer opened by an action such as clicking a navigation menu icon (1)
link
Copy link
Link copied
Modal drawers can be dismissed by tapping the scrim or swiping the drawer toward its anchoring screen edge.
1. Dismiss by tapping the scrim2. Dismiss by swiping the drawer
link
Copy link
Link copied

## Anatomy

Navigation drawers are essentially a 
    
    list
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
          
   contained within a 
    
    side sheet
    
      Side sheets show secondary content anchored to the side of the screen.
    
      
            More on side sheets
          
  . They can also include headers, subheads, and 
    
    dividers
    
      Dividers are thin lines that group content in lists or other containers.
    
      
            More on dividers
          
   to organize longer lists.
link
Copy link
Link copied
Navigation drawers can include headers, subheads, and dividers to organize longer lists
- Active Indicator
- Icon
- Label
- Badge label
- Sheet
- Divider
- Section label (optional)
- Scrim
link
Copy link
Link copied
A sheet holds all navigation drawer elements. 
    
    Side sheets
    
      Side sheets show secondary content anchored to the side of the screen.
    
      
            More on side sheets
          
   are used as the container for standard and modal navigation drawers.
Navigation drawers that open from the side are always placed on the start edge of the screen, on the left for left-to-right (LTR) languages, and on the right for right-to-left (RTL) languages.
check
A navigation drawer opens from the left side of the screen for left-to-right languages
link
Copy link
Link copied

### Divider (optional)

Dividers
    
      Dividers are thin lines that group content in lists or other containers.
    
      
            More on dividers
          
   can be used to separate groups of destinations within the navigation drawer.
check
Use full-width dividers (1) to separate groups of destinations
close
Don’t
Don’t use dividers to separate individual destinations
link
Copy link
Link copied

### Active indicator

The active indicator is a background shape communicating which destination of the navigation drawer is currently being displayed.
The active indicator (1) is a background shape communicating which destination of the navigation drawer is currently being displayed
link
Copy link
Link copied

### Label text and icons

Destinations in a navigation drawer take the form of actionable 
    
    list
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
          
   items. Each item describes its destination using label text and an optional icon.
Actionable list items in a navigation drawer describe each destination using (1) an optional icon and (2) required label text
link
Copy link
Link copied
Label text should be clear and short enough that it isn’t cut off by the sheet.
Navigation drawers can use text labels without icons
link
Copy link
Link copied
check
Keep text labels concise, but truncate them if they extend beyond the container width
close
Don’t
Don’t wrap label text
close
Don’t
Don’t shrink text size in order to fit a text label on a single line
link
Copy link
Link copied
Icons can supplement labels as indicators of a destination. When used, they should always be placed before text. Other app components and content should reference these icons.
check
Use recognizable icons when conventions exist
close
Don’t
Don’t apply icons to some destinations and not others. Icons should be used for all destinations, or none.
link
Copy link
Link copied
Short subhead section labels can help group related destinations in the navigation drawer.
Related destinations can be grouped using short subhead section labels in the navigation drawer
link
Copy link
Link copied

### Scrim (modal only)

Modal navigation drawers use a scrim to block interaction with the rest of the app. The scrim is placed directly behind the drawer’s sheet and can be tapped or clicked to dismiss the drawer.
Scrim applied behind a modal navigation drawer
link
Copy link
Link copied

## Responsive layout

link
Copy link
Link copied
A product’s navigation component should change to suit the 
    
    window size class
    
      Window size classes are opinionated breakpoints where layouts need to change to optimize for available space, device conventions, and ergonomics.
    
      
            More on window size classes
          
   and form factor of the screen.
Modal navigation drawers can be used at any window size but are most common in 
    
    compact
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
          
   and 
    
    medium window sizes
    
      Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
    
      
            More on medium window size class
          
  .
Standard navigation drawers are best for 
    
    expanded
    
      Window widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop.
    
      
            More on expanded window size class
          
  , 
    
    large
    
      Window widths 1200dp to 1599dp, such as desktop.
    
      
            More on large window size class
          
  , and 
    
    extra-large
    
      Window widths 1600dp and larger, such as ultra-wide monitors.
    
      
            More on extra-large window size class
          
   window sizes.
Use a transition when swapping components. For example, when switching from a portrait to landscape 
    
    layout
    
      Layout is the visual arrangement of elements on the screen.
    
      
            More on layout
          
  , the 
    
    navigation rail
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails
          
   should transform into a navigation drawer.
Standard navigation drawers change size to suit the device’s screen
link
Copy link
Link copied

### Compact window size

Use modal navigation drawers in 
    
    compact window sizes
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
          
  . Or swap the drawer for a navigation bar.
On web, when the screen size is smaller than 320 
    
    CSS pixels
    
      CSS pixels are the most common unit of measurement when developing for the web.
    
      
            More on CSS pixels
          
  , swap the navigation drawer for a navigation bar to ensure 
    
    accessibility
    
      Accessible design makes products usable for people with all kinds of abilities.
    
      
            More on accessibility
          
  .
Use a modal navigation drawer on mobile screens
link
Copy link
Link copied

### Medium & expanded window sizes

Use a modal navigation drawer alone or with a navigation rail on 
    
    medium
    
      Window widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation.
    
      
            More on medium window size class
          
   and 
    
    expanded
    
      Window widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop.
    
      
            More on expanded window size class
          
   window sizes.
When a 
    
    navigation rail
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails
          
   and modal navigation drawer are used together, the drawer can repeat destinations in the navigation rail as long as the drawer offers enough visual separation between levels of the navigation hierarchy.
A standard navigation drawer can be used in single pane layouts in expanded window sizes.
Use a navigation rail on tablet screens, or also allow a drawer to open and close via a menu icon
link
Copy link
Link copied

### Large and extra-large window sizes

For web experiences on laptop and desktop devices, use either a standard navigation drawer, or a 
    
    navigation rail
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails
          
   that transitions into a modal navigation drawer.
Use a standard navigation drawer on large and desktop screens
link
Copy link
Link copied

## Behavior

link
Copy link
Link copied

### Scrolling

Navigation drawers can be vertically scrolled, independent of the rest of the screen’s content and UI. If the 
    
    list
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
          
   of navigation destinations is longer than the height of the drawer, the drawer’s contents can be scrolled within the drawer.
When a navigation drawer is scrolled, the body content should remain stationary
link
Copy link
Link copied

### Visibility

Dismissible standard drawers can be used for 
    
    layouts
    
      Layout is the visual arrangement of elements on the screen.
    
      
            More on layout
          
   that prioritize content (such as a photo gallery) or for apps where users are unlikely to switch destinations often. They should use a visible navigation 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   icon to open and close the drawer.
A standard dismissible navigation drawer is opened and closed by tapping the navigation menu icon in the app bar (1), and remains open until the menu icon is tapped again (2)
link
Copy link
Link copied
Permanently visible standard drawers allow quick navigation between unrelated destinations. They can’t be closed or dismissed by the user.
A permanently-visible standard navigation drawer on desktop
link
Copy link
Link copied

### Appearing

When a navigation drawer animates on screen, it uses an enter and exit transition pattern.
A navigation drawer animating on screen
