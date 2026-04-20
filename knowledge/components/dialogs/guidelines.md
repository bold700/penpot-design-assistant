<!-- Source: https://m3.material.io/components/dialogs/guidelines -->
<!-- Scraped: 2026-04-20T18:09:05.671Z -->

A basic dialog

## Usage

A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
Dialogs are purposefully interruptive, so they should be used sparingly. A less disruptive alternative is to use a dropdown 
    
    menu
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
  , which provides options without interrupting a user’s experience.
There are two variants of dialogs:
- Basic dialog
- Full-screen dialog
check
Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement
close
Don’t
Don’t use dialogs for low- or medium-priority information. Instead use a snackbar, which can be dismissed or disappear automatically.

### Similar components

Snackbars
    
      Snackbars show short updates about app processes at the bottom of the screen.
    
      
            More on snackbars
          
   are also designed to show important messages.
Choose the right component based on the importance of the message. This component messaging strategy helps avoid overusing dialogs.
Snackbars can disappear automatically
| Component | Importance | Action needed |
| Snackbar | Low importance | Optional: Snackbars may not have a 
    
    button
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
  , and can disappear automatically |
| Dialog | High importance | Required: Dialogs block the main content until an action is confirmed |

## Anatomy

- Container
- Icon (optional)
- Headline (optional)
- Supporting text
- Divider (optional)
- Buttons label text
- Scrim
- Header region
- Icon (close affordance)
- Button label text

### Container and scrim

Dialog containers appear above other screen elements and hold the dialog’s headline, text, 
    
    buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
  , and 
    
    list
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
          
   items.
To focus attention on the dialog, surfaces behind the container are scrimmed with a temporary overlay to make them less prominent.
Basic dialogs appear over a background scrim
A dialog’s purpose should be communicated by its headline and buttons or actionable items.
Headlines should:
- Contain a brief, clear statement or question
- Avoid apologies (“Sorry for the interruption”), alarm (“Warning!”), or ambiguity (“Are you sure?”)
check
This dialog title poses a specific question, concisely explains what’s involved in the request, and provides clear actions
close
Don’t
Don’t use dialog titles that pose an ambiguous question
Headlines should always be succinct. They can wrap to a second line if necessary, and be truncated.
In full-screen dialogs, long headlines or headlines of variable lengths (such as translations), can be placed in the content area instead of the app bar.
exclamation
Caution
Avoid placing long headlines in a full-screen dialog’s app bar (1), as the truncated text may lead to misunderstanding
check
Find ways to shorten app bar text, and place longer headlines into the content area (1) of a full-screen dialog

### Buttons

Dialog actions are most often represented as 
    
    buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
   and allow users to confirm, dismiss, or acknowledge something.
Buttons are aligned to the trailing edge of the dialog for easier interaction. The confirmation button is always closest to the edge.
Button alignment responds automatically for right-to-left languages, where the confirmation button is aligned to the left edge.
check
Disable confirming actions (1) until a choice is made. Dismissive actions are never disabled.
close
Don’t
Don’t place dismissive actions (1) to the right of confirming actions. Instead, place them to the left of confirming actions.
check
A single action may be provided only if it’s an acknowledgement
close
Don’t
Avoid presenting people with unclear choices. Cancel doesn't make sense here because no clear action is proposed.
Dialogs should contain a maximum of two actions.
- If a single action is provided, it must be an acknowledgement action
- If two actions are provided, one must be a confirming action, and the other a dismissing action
check
Display two text buttons next to one another
exclamation
Caution
Stacked buttons accommodate longer button text, but take up more room. Confirming actions appear above dismissive actions.
Providing a third action, such as Learn more, is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished.
Rather than adding a third action, an inline expansion can display more information. If more extensive information is needed, provide it prior to entering the dialog.
exclamation
Caution
The Learn more action (1) navigates away from this dialog, potentially leaving it in an indeterminate state
Basic dialogs interrupt users with urgent information, details, or actions. Common use cases for basic dialogs include alerts, quick 
    
    selection
    
      Selection lets users choose specific items to act on.
    
      
            More on selection
          
  , and confirmation.
Basic dialogs require a person to take action before it will close
Basic dialogs can give people the ability to provide confirmation of a choice before committing to it
Basic dialogs most often appear as alerts or 
    
    lists
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
          
  , but can have a variety of 
    
    layouts
    
      Layout is the visual arrangement of elements on the screen.
    
      
            More on layout
          
   and component combinations, including lists, 
    
    date pickers
    
      Date pickers let people select a date, or a range of dates.
    
      
            More on date pickers
          
  , and 
    
    time pickers
    
      Time pickers help users select and set a specific time.
    
      
            More on time pickers
          
  .
Date picker dialogs allow people to tap a date, then confirm it by tapping OK
Time picker dialogs allow people to move the clock hand and then confirm by tapping OK
Full-screen dialogs fill the entire screen, containing actions that require a series of tasks to complete. One example is creating a calendar entry with the event title, date, location, and time.
Because they take up the entire screen, full-screen dialogs are the only dialogs over which other dialogs can appear.
Use a container transform pattern to transition a 
    
    FAB
    
      Floating action buttons (FABs) help people take primary actions.
    
      
            More on FABs
          
   into a full-screen dialog.
Full-screen dialogs contain actions that require a series of tasks to complete
When a full-screen dialog is closed without being saved, a basic dialog appears in front of it to confirm 
    
    selections
    
      Selection lets users choose specific items to act on.
    
      
            More on selection
          
   should be discarded without saving changes.
A basic modal dialog appears when a full-screen dialog is closed without being saved
Full-screen dialogs may be used for content or tasks that meet any of these criteria:
- Dialogs that include components which require keyboard 
    
    input
    
      Inputs are devices that provide interactive control of an app. Common inputs are a mouse, keyboard, and touchpad.
    
      
  , such as form fields
- When changes aren’t saved instantly
- When components within the dialog open additional dialogs
Full-screen dialogs are for 
    
    compact window sizes
    
      Window widths smaller than 600dp, such as a phone in portrait orientation.
    
      
            More on compact window size class
          
   only, like mobile devices. For medium and 
    
    expanded window sizes
    
      Window widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop.
    
      
            More on expanded window size class
          
  , use a basic dialog.

### Saving selections

To save a selection in a full-screen dialog, use Save.  The close icon or dismissive action, such as Cancel or Back, should close the dialog.

### Confirmation

The confirmation action should be clear about what happens next, like Send or Create. Avoid using vague terms like Done, OK, or Close. Only trigger an additional basic dialog if the action fails. Don’t 
    
    disable
    
      A disabled state communicates an inoperable component or element.
    
      
            More on disabled state
          
   the confirmation button.
check
A Create button is clear that the event will be created
close
Don’t
Don’t trigger a basic dialog when the confirming action is selected

### Dismissing

When someone dismisses a full-screen dialog, a basic dialog should appear to confirm that they want to discard the unsaved changes.
check
Use a basic dialog to confirm that the user wants to discard unsaved changes
close
Don’t
Don’t use the confirming action to dismiss the full-screen dialog

### Error messages

Errors about the dialog fields should always appear inline where they occur. Some components like 
    
    text fields
    
      Text fields let users enter text into a UI.
    
      
            More on text fields
          
   have built-in error messaging, while others like 
    
    checkboxes
    
      Checkboxes let users select one or more items from a list, or turn an item on or off.
    
      
            More on checkboxes
          
   and 
    
    radio buttons
    
      Radio buttons let people select one option from a set of options.
    
      
            More on radio buttons
          
   need error messages to be added next to the fields.General errors such as network issues preventing saving or submitting should appear in a basic dialog when the confirming action fails.Error messages should clearly but briefly explain the source of the error and how to fix it. Show all errors on the page at once so people can fix everything before trying again.
check
Error messages related to the fields should be displayed inline
exclamation
Caution
Errors unrelated to the fields can be displayed in a basic dialog

### Dialog windows

Launching a full-screen dialog temporarily resets the app’s perceived elevation, allowing simple 
    
    menus
    
      Menus display a list of choices on a temporary surface.
    
      
            More on menus
          
   or dialogs to appear above the full-screen dialog. They cover the screen and don’t appear as a floating modal window.

### Navigation

Because full-screen dialogs can only be completed, dismissed, or closed, the close “X” icon button should be the only navigation option in the 
    
    app bar
    
      App bars display information and actions at the top of a screen.
    
      
            More on app bars
          
  .

## Adaptive design

Dialogs can swap variants as the 
    
    window size class
    
      Window size classes are opinionated breakpoints where layouts need to change to optimize for available space, device conventions, and ergonomics.
    
      
            More on window size classes
          
   changes. For example, a 
    
    full-screen dialog
    
      Full-screen dialogs fill the entire screen, displaying actions that require a series of tasks to complete. They're often used for creating a calendar entry.
    
      
            More on full-screen dialogs
          
   can change into a 
    
    basic dialog
    
      Basic dialogs interrupt users with urgent information, details, or actions. They're often used for alerts, quick selection, or confirmation. 
    
      
            More on basic dialogs
          
   at larger breakpoints.
- Full-screen dialog on mobile
- Dialog on a tablet

### Medium window size

Basic dialogs appear in a center position by default.Their position can be overridden to provide a more ergonomic experience.
Dialog custom positioned on the right side of the screen

### Expanded window size

Dialogs on 
    
    expanded window sizes
    
      Window widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop.
    
      
            More on expanded window size class
          
  , like desktop, are modal windows above a scrim. This puts the dialog at the forefront of a person's view, calling attention to the action prompted in the dialog.
Desktop dialogs call attention to the required action
Basic dialogs can be custom-positioned anywhere on larger screens, respecting 
    
    margins
    
      Margins are the spaces between the edge of a nested element and its parent element, such as the space between a button's label text and the edge of its container.
    
      
            More on margins
          
   to prevent edge collision.
Custom placement area for basic dialogs that respects a 56dp margin from the edges of the screen

## Behavior


### Appearing

Dialogs appear without warning, requiring users to stop their current task. They should be used sparingly, as not every choice or setting warrants interruption.
Dialogs use an enter and exit transition pattern to appear on screen.
A dialog appears with an enter and exit transition

### Position

Dialogs retain focus until dismissed or an action has been taken, such as choosing a setting. They shouldn’t be obscured by other elements or appear partially on screen, with the exception of full-screen dialogs.
Dialogs shouldn’t be obscured by other elements except for full-screen dialogs

### Scrolling

Most dialog content should avoid scrolling. Even when scrolling is required, the dialog title is pinned at the top, with 
    
    buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
   pinned at the bottom. This ensures selected content remains visible alongside the title and buttons, even upon scroll.
Dialogs don’t scroll with elements outside of the dialog, such as the background.
When viewing a scrollable list of options, the dialog title and buttons remain fixed
