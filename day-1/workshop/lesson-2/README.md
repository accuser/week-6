# Week 6 Day 1 - HTTP

## Lesson 2 - App, Refactored

- [Source Code](index.js)

## Separate Concerns

We can only test what we can access, and that means we need to export testable
units (objects, classes, functions, etc.) from modules. To improve the previous
example, we can separate the source into two parts: an [app](app.js) and a
[server](server.js).

