<!-- Source: https://m3.material.io/components/time-pickers/guidelines -->
<!-- Scraped: 2026-04-20T18:20:12.133Z -->

Dial selector time picker for a 12-hour clock

## Usage

Time pickers allow people to enter a specific time value. They’re displayed in 
    
    dialogs
    
      Dialogs provide important prompts in a user flow.
    
      
            More on dialogs
          
   and can be used to select hours, minutes, or periods of time.
They can be used for a wide range of scenarios. Common use cases include:
- Setting an alarm
- Scheduling a meeting
Time pickers are not ideal for nuanced or granular time 
    
    selection
    
      Selection lets users choose specific items to act on.
    
      
            More on selection
          
  , such as milliseconds for a stopwatch application.
check
Hour selection in a mobile calendar picker

### Time input picker

Time input pickers allow people to specify a time using keyboard numbers. This input option should be accessible from any other mobile time picker interface by tapping the keyboard icon.
Hour input with keyboard entry

### 24-hour time selection

The dial view can be changed to reflect time 
    
    selection
    
      Selection lets users choose specific items to act on.
    
      
            More on selection
          
   across 24 hours. This option is set outside of the time picker component, typically through system settings.
24-hour dial view

## Anatomy

- Label (headline)
- Time selector separator
- Input field
- Input text
- Period selector (selected)
- Period selector text (selected)
- Container
- Period selector outline
- Period selector text
- Dial selector track
- Dial label (selected)
- Text buttons
- Icon button
- Dial label (unselected)
- Clock dial
- Input text (selected)
- Input field (selected)
- Period selector text (unselected)
Like 
    
    dialogs
    
      Dialogs provide important prompts in a user flow.
    
      
            More on dialogs
          
  , the container should appear above other screen elements. To focus attention, surfaces behind the container have a temporary scrim overlay to make them less prominent.
The container includes all time picker elements

### Input selector

The input selector is a unique kind of 
    
    text field
    
      Text fields let users enter text into a UI.
    
      
            More on text fields
          
   input. It differs from typical text field inputs in that it has:
- An added highlight to call attention to the selected field
- A larger shape, size, and font
- A label below the field
Hours and minutes should have separate inputs. For people using a 12-hour clock, an AM/PM selector appears to the right of minutes. For people using a 24-hour clock, the AM/PM selector shouldn’t appear.
Input selector for a 12-hour clock

### Dial selector

Dial selectors always mimic a round watch face. Hours and minutes can be selected by tapping a number or dragging the dial selector track.
When representing a 12-hour dial, all numbers appear in the outer ring. When representing a 24-hour dial, even numbers appear in an inner ring, and odd numbers appear in an outer ring.
Dial selector for a 12-hour clock

### Text & icon buttons

Icon buttons
    
      Icon buttons help people take minor actions with one tap.
    
      
            More on icon buttons
          
   are used to switch between the input selector, represented by a keyboard, and the dial selector, represented by a clock.
Text buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
   are used to exit the 
    
    dialog
    
      Dialogs provide important prompts in a user flow.
    
      
            More on dialogs
          
   (Cancel) and save the selector input (OK).
The keyboard icon allows people to switch between the dial selector (pictured) and the input selector

### Landscape orientation

The clock dial interface adapts to a device’s orientation. In landscape mode, the stacked input and selection options are positioned side-by-side.
On mobile, the time picker can adapt to landscape orientation

## Placement

Time pickers shouldn’t be obscured by other elements.
Time pickers should change orientation or variant to ensure they aren't cropped by the edge of the screen.Time pickers are modal windows above a scrim. This puts the time pickers at the forefront of a person's view, calling attention to make a 
    
    selection
    
      Selection lets users choose specific items to act on.
    
      
            More on selection
          
   of time.
The time picker should change to fit the size of the screen so the time picker is always fully visible

## Adaptive design

Time pickers can swap between orientation or variant depending on device orientation and viewport constraints.
For example, the time picker can change to landscape orientation on larger breakpoints or when viewport height is limited, to avoid scrolling the dial presentation.
Time pickers can fallback to the 
    
    input time picker
    
      Input time pickers allow people to set a time using a keyboard. This option is accessible from any mobile time picker interface via the keyboard icon.
    
      
   when there isn’t enough vertical real estate to present the landscape orientation without scrolling.
High-density time picker displayed on mobile

### Density

Don’t apply density to the time picker dial when the viewport is constrained. Instead, use an input picker.
close
Don’t

## Behavior

There are two primary methods for selecting time with the mobile time picker. People can:
- Type in a specific value in the hour and minute fields
- Select the hour or minute field from the text input and adjust the clock dial to simultaneously change the corresponding time field above
The dial time picker supports both manual and dial input

### Appearing & disappearing

Like other kinds of 
    
    dialogs
    
      Dialogs provide important prompts in a user flow.
    
      
            More on dialogs
          
  , time pickers use an enter and exit transition pattern to appear on the screen.
To exit a time picker, the input can either be confirmed (OK) or dismissed (Cancel). Interacting outside of the dialog will also dismiss the time picker. Unless one of these actions is taken, a time picker will continue to retain focus.
OK confirms the entry and closes the dialog

### Toggle between dial & input

Tapping the keyboard icon on a mobile time picker switches the view to the 
    
    input picker
    
      Input time pickers allow people to set a time using a keyboard. This option is accessible from any mobile time picker interface via the keyboard icon.
    
      
  .
The keyboard icon in the lower left toggles between the input picker and the dial picker

### Scrolling

Time pickers should avoid scrolling, and swap component orientation or variant based on device orientation or viewport size.
Time pickers don’t scroll with elements outside of the modal window, such as the background.
Time pickers shouldn’t scroll
