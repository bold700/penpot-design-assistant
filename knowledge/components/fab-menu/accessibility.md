<!-- Source: https://m3.material.io/components/fab-menu/accessibility -->
<!-- Scraped: 2026-04-20T08:07:50.303Z -->

link
Copy link
Link copied

## Use cases

link
Copy link
Link copied
People should be able to do the following using assistive technology:
- Navigate and interact with the FAB menu
- Ensure focus is correct when navigating through the menu
link
Copy link
Link copied

## Interaction & style

link
Copy link
Link copied
FAB menu elements meet the minimum target size of 48dp.
FAB menus have 48x48dp minimum width and sufficient spacing by default
link
Copy link
Link copied
When the FAB menu can scroll, make sure the items scroll behind the close button.
The close button should always be easy to access and unobstructed.
check
Allow the menu items to scroll behind the close button
close
Don’t
Don’t obstruct the close button in short screens like horizontal orientation
link
Copy link
Link copied

## Initial focus

link
Copy link
Link copied
When the FAB is selected, the FAB menu opens, and initial focus remains on the close button, which takes the place of the original FAB.
Then the focus moves from the top menu item to the bottom.
Focus lands on the close button. People can then navigate through all the items.
- Close button
- First menu item
- Second menu item
- Third menu item
link
Copy link
Link copied

## Keyboard navigation

link
Copy link
Link copied
| Keys | Actions |
| Tab | Navigate to the next interactive element |
| Space or Enter | Activate the focused button or item |
link
Copy link
Link copied

## Labeling elements

link
Copy link
Link copied

### Android

On Android, a FAB menu’s close button should include a state to tell screen readers what action will occur when it's toggled. The close button should be labeled:
- Label: Toggle menu
- Role: Button
- State: Expanded or collapsed
On Android, the close button accessibility labels should include a toggle menu label, button role, and an expanded or collapsed state
link
Copy link
Link copied
FAB menu items should be labeled:
- Label: Match the item’s UI text, such as Reply all
Label FAB menu items to match their UI text, like Reply all, and use the button role
link
Copy link
Link copied

### Web

On web, a FAB menu is a combination of a 
    
    FAB
    
      Floating action buttons (FABs) help people take primary actions.
    
      
            More on FABs
          
   and a 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   component. The FAB opens the menu. Follow the accessibility guidelines for FABs and menus.
The FAB's accessibility label should describe the menu that the FAB will open.
