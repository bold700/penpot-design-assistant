<!-- Source: https://m3.material.io/components/all-buttons -->
<!-- Scraped: 2026-04-20T04:26:11.186Z -->

link
Copy link
Link copied

##### There are 10 types of buttons in Material 3.

link
Copy link
Link copied
- Button
- Toggle button
- Icon button
- Toggle icon button
- Split button
- Standard button group
- Connected button group
- Floating action button (FAB)
- Extended FAB
- FAB menu
link
Copy link
Link copied

## Choosing buttons

| Level of emphasis | Component | Rationale | Example actions |
| High emphasis: For the primary, most important, or most common action on a screen | Extended FAB, FAB, and FAB menu | The FAB and extended FAB are the largest and most visually prominent buttons. They’re designed for a page’s primary action. The extended FAB is best on large screens. The FAB menu provides multiple options. | Create ComposeNew threadNew file |
| Button (filled) | The filled button’s primary color palette makes it the most prominent button after the FAB. It’s used for final or unblocking actions in a flow. | SaveConfirmDone |
| Split button | The split button’s primary color palette and menu icon are best used for key actions with multiple options. | SendAddCreate |
| Button group | The standard button group uses color, motion, and shape to capture attention. Use it to show multiple key actions. | Back, Pause, Next |
| Medium emphasis: For important actions that don’t distract users from the main task | Button (tonal) | The tonal button has a secondary color palette, making it less visually prominent than a regular, filled button. It can be used for final or unblocking actions, or for supporting actions. | SaveConfirmDone |
| Button (elevated) | The elevated button has a secondary color palette and a shadow. Only use it when a button requires visual separation from a patterned background. | ReplyView allAdd to cartTake out of trash |
| Button (outlined) | Use an outlined button for actions that need attention but aren’t the primary action, such as “See all” or “Add to cart.” This is also the button to use for giving someone the opportunity to change their mind or escape a flow. | ReplyView allAdd to cartTake out of trash |
| Low emphasis: For optional or supplementary actions with the least amount of prominence | Connected button group | The connected button group shows multiple related options. Use it for changing the content visible on a page. | Walk, Bike, Drive |
| Button (text) | The text button has no outline or fill. It should be used for actions not essential to the user journey. | Learn moreView allChange accountTurn on |
| Icon button | The most compact and subtle type of button, icon buttons are used for optional supplementary actions such as “Bookmark” or “Star.” | Add to FavoritesPrint |
link
Copy link
Link copied

## Hierarchy

link
Copy link
Link copied
One high emphasis button
Each screen should contain a single prominent button for the primary action. This high-emphasis button commands the most attention. The arrangement of on-screen elements should clearly communicate that other buttons are less important.
Other buttons
A product can show more than one button at a time in a layout. Use different color styles to create visual hierarchy and indicate the importance of each button.
A button’s level of emphasis helps determine its appearance, typography, and placement
link
Copy link
Link copied

## Placement

link
Copy link
Link copied
Use a combination of button styles on the same screen to focus attention on a primary action, while offering alternatives.
- A filled button for a high-emphasis action
- A text button for a low-emphasis action
- An extended FAB for the highest emphasis action
link
Copy link
Link copied
check
For multiple actions, choose a higher-emphasis button for the more important action, such as a filled button next to a text button
check
When using multiple buttons, you can place an outlined button (medium emphasis) next to a filled button (high emphasis)
link
Copy link
Link copied
check
When using multiple buttons, you can place a text button (low emphasis) next to an outlined button (medium emphasis)
check
Use a filled button on its own for a single important action
link
Copy link
Link copied
close
Don’t
Avoid placing a button below another button if there's space to place them side-by-side
