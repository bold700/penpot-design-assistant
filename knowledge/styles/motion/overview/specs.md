<!-- Source: https://m3.material.io/styles/motion/overview/specs -->
<!-- Scraped: 2026-04-20T08:38:46.327Z -->

link
Copy link
Link copied

## Cross-platform experiences

The motion physics system is available on Jetpack Compose and MDC-Android, and can be easily adapted to other platforms.
link
Copy link
Link copied
| Platform | Status | How to apply |
| Jetpack Compose | Available | Use built-in components and spring tokens. |
| MDC-Android | Available. Not yet added to components. | Use built-in spring tokens. |
| Web | Compatible | Use springs when possible, otherwise use curves that mimic the springs for animations without interruptions or gestures. View web conversion table |
link
Copy link
Link copied

## Tokens and specs

The spring composite tokens are used in the motion physics system. These composites combine two spring tokens (damping and stiffness) into a single token for ease of use. The easing, duration, and path tokens are used by the legacy system, so can be ignored.
link
Copy link
Link copied
Custom composite with 2 properties
Spring
Easing
Duration
Style
link
Copy link
Link copied

## Web: Convert springs to curves

link
Copy link
Link copied
| Spring | Curve |
| Expressive fast spatial | 0.42, 1.67, 0.21, 0.90. Duration =  350ms |
| Expressive default spatial | 0.38, 1.21, 0.22, 1.00. Duration =  500ms |
| Expressive slow spatial | 0.39, 1.29, 0.35, 0.98. Duration =  650ms |
| Expressive fast effects | 0.31, 0.94, 0.34, 1.00. Duration =  150ms |
| Expressive default effects | 0.34, 0.80, 0.34, 1.00. Duration =  200ms |
| Expressive slow effects | 0.34, 0.88, 0.34, 1.00. Duration =  300ms |
| Standard fast spatial | 0.27, 1.06, 0.18, 1.00. Duration =  350ms |
| Standard default spatial | 0.27, 1.06, 0.18, 1.00. Duration =  500ms |
| Standard slow spatial | 0.27, 1.06, 0.18, 1.00. Duration =  750ms |
| Standard fast effects | 0.31, 0.94, 0.34, 1.00. Duration =  150ms |
| Standard default effects | 0.34, 0.80, 0.34, 1.00. Duration =  200ms |
| Standard slow effects | 0.34, 0.88, 0.34, 1.00. Duration =  300ms |
link
Copy link
Link copied

## Easing and duration

The original easing and duration tokens are still available to use as a fallback, and are currently used for animating transitions. View easing and duration system
