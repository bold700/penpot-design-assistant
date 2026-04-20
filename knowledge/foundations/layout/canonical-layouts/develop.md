<!-- Source: https://m3.material.io/foundations/layout/canonical-layouts/develop -->
<!-- Scraped: 2026-04-20T08:30:15.803Z -->

link
Copy link
Link copied
Use the three canonical layouts as starting points for organizing common elements in an app.Each layout considers common use cases and components to address expectations and user needs for how apps adapt across window class sizes and breakpoints.
link
Copy link
Link copied

## Resources

link
Copy link
Link copied
| Type | Resource | Status |
| Implementation | MDC-Android – Canonical layouts | Available |
|  | Flutter – Adaptive scaffold | Available |
|  | Jetpack Compose – Canonical layouts | Available |
link
Copy link
Link copied

## Takeaways

link
Copy link
Link copied
- There are three canonical layouts: list-detail, supporting pane, feed
- Each canonical layout has configurations for compact, medium, and expanded window size classes
link
Copy link
Link copied

## Layouts

link
Copy link
Link copied

### Feed

Use a feed layout to arrange content elements like cards in a configurable grid for quick, convenient viewing of a large amount of content.
Example feed layout
link
Copy link
Link copied

### List-detail

Use the list-detail layout to display explorable lists of items alongside each item’s supplementary information—the item detail. This layout divides the app window into two side-by-side panes.
Example list-detail layout
link
Copy link
Link copied

### Supporting pane

Use the supporting pane layout to organize app content into primary and secondary display areas. The primary display area occupies the majority of the app window (typically about two thirds) and contains the main content. The secondary display area is a panel that takes up the remainder of the app window and presents content that supports the main content.
Example supporting pane layout
