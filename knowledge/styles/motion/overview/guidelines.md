<!-- Source: https://m3.material.io/styles/motion/overview/guidelines -->
<!-- Scraped: 2026-04-20T08:38:51.945Z -->

link
Copy link
Link copied
link
Copy link
Link copied

## A motion system designed for expression

May 2025
Material introduced the motion physics system with M3 Expressive. This new physics-based system makes interactions and transitions feel more alive, fluid, and natural. It represents a new motion language for Google products, and is easier to implement and customize than ever before.
The physics system is replacing the previous system based on easing and duration.
More on M3 Expressive
link
Copy link
Link copied

## Availability & resources

| Type | Link | Status |
| Implementation | MDC-Android | Available. Not yet added to components. See specs |
| Flutter | Unavailable |
| Jetpack Compose | Available |
| Web | Compatible with Compose springs. See specs |
link
Copy link
Link copied

## The basics: Motion schemes

The physics system has two preset motion schemes: expressive and standard. The motion scheme you choose defines how your product feels. While most motion in a product should use the same scheme, products can make advanced customizations to swap the scheme to emphasize key moments.
link
Copy link
Link copied
Expressive is Material’s opinionated motion scheme, and should be used for most situations, particularly hero moments and key interactions.
The expressive motion scheme overshoots the final values to add bounce
link
Copy link
Link copied
Standard feels more functional with minimal bounce, and should be used for utilitarian products.
The standard motion scheme eases into the final values
link
Copy link
Link copied
Need something other than the preset schemes? Create your own! The physics system makes it easy to create custom motion schemes beyond expressive and standard, while still leveraging theming. Schemes can be easily switched between expressive, standard, or custom as needed.
link
Copy link
Link copied

## How it works: Springs

Motion schemes use springs. A spring is a combination of three attributes which control all motion behavior: 
    
    stiffness
    
      Stiffness defines the hardness of the spring. Higher stiffness resolves the motion faster.
    
      
  , 
    
    damping
    
      Damping defines how fast the bounce wears out. Higher damping stops the bounce faster. A damping value of 1 completely removes spring bounce.
    
      
  , and 
    
    initial velocity
    
      Initial velocity defines the initial speed of the spring, which influences the total spring duration in combination with stiffness and damping.
    
      
  .
link
Copy link
Link copied
Springs are versatile. One spring can apply to many situations, such as transitions, button effects, or gestures. This makes the motion and expression feel consistent throughout the product.
Springs feel natural. Springs are designed to be predictable, like how objects move and bounce. They handle gestures, interruptions, and retargeting animations seamlessly.
All component motion is driven by two tokens: expressive fast spatial and expressive fast effects
link
Copy link
Link copied

## Spring tokens

On Jetpack Compose and MDC-Android, these springs are available as spring tokens. Use tokens to easily apply motion to any element, making all motion feel predictable and consistent across multiple platforms. See specs for how to convert springs to other platforms like Web.
link
Copy link
Link copied
There are tokens for spatial movement and effects, with three durations each: default, fast, and slow.
For example, to apply fast, spatial, expressive motion, call the "expressive" motion scheme, then use the token: md.sys.motion.spring.fast.spatial.
Notice that the "expressive" scheme isn't part of the token itself. Rather, it's called at the product level and applied to all tokens. This makes it easier to swap schemes without changing assigned tokens.
Each scheme (expressive, standard) has three speeds (fast, default, slow) for two types of movement (spatial, effects)
link
Copy link
Link copied

### Style

Spatial spring tokens are used for animations that move something on screen, for example the x and y position, rotation, size, rounded corners. This spring overshoots the final value and bounces into place.
Spatial springs apply to movement
Spatial springs apply to rotation
link
Copy link
Link copied
Effects spring tokens are used to animate properties such as color and opacity animations, where there shouldn’t be any overshoot.
Effects springs applied to opacity
Effects springs applied to color
link
Copy link
Link copied

### Speed

Spatial and effect spring tokens come in three speeds: default, fast, and slow. Most motion should use the default speed, while smaller elements may use fast and larger elements may use slow.
link
Copy link
Link copied
| Speed | Spatial example | Effects example |
| Default | Animations that partially cover the screen, such as 
    
    bottom sheet
    
      Bottom sheets show secondary content anchored to the bottom of the screen.
    
      
            More on bottom sheets
          
   and 
    
    expanded navigation rail
    
      Expanded navigation rails show text labels and an extended FAB, and can be default or modal. | Opacity of the content within a 
    
    navigation rail
    
      Navigation rails let people switch between UI views on mid-sized devices.
    
      
            More on navigation rails |
| Fast | Small components, such as 
    
    switches
    
      Switches toggle the state of an item on or off.
    
      
            More on switches
          
   and 
    
    buttons
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons | Color change of the 
    
    switch
    
      Switches toggle the state of an item on or off.
    
      
            More on switches
          
   handle |
| Slow | Full-screen animations | Full-screen content refresh |
link
Copy link
Link copied
Spatial motion in fast, default, and slow speeds
Effects motion in fast, default, and slow speeds
link
Copy link
Link copied
Spring tokens work across devices. For example, the spatial fast token will always be faster than default or slow, but the exact values of each token differ depending on if the device is a wearable, phone, or tablet. This ensures the movement feels fast in the context of the device.
link
Copy link
Link copied

## Application

link
Copy link
Link copied

### Components

On Jetpack Compose, 21 Material components use the motion physics system by default. MDC-Android support is coming soon. To add the motion physics system to other components, including custom-built components, use spring tokens. View full specs
link
Copy link
Link copied
Material components use the physics motion system to feel more expressive
link
Copy link
Link copied

## Advanced customizations

There are a few different levels for applying motion. Choose the level that applies best to your product or specific component.
link
Copy link
Link copied

### Level 1: Use a default motion scheme

The expressive and standard schemes should be sufficient for all motion needs. On Jetpack Compose, components use these schemes by default.
Switch using the expressive motion scheme
Switch using the standard motion scheme
link
Copy link
Link copied

### Level 2: Create a custom motion scheme

On Jetpack Compose, to change the default motion scheme that all components and transitions use, create a custom MotionScheme object, and return different AnimationSpec for each property of the motion scheme.
FAB menu with an extra stiff custom scheme
FAB menu with very low stiffness custom scheme
link
Copy link
Link copied

### Level 3: Swap the default motion scheme per element

Why use just one scheme when you can use multiple? On Jetpack Compose, to use one scheme for most of the product, such as expressive, but on certain elements swap it for another scheme, like standard, override the CompositionLocal for that particular composable, screen, or element.
