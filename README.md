# React Island Problem

Author: R. Brian Redd <www.rbrianredd.com>

### Problem

Given an X by X grid where each square contains a `1` (land) or `0` water, determine how many islands exist.

An island is defined as any number of contiguous land squares that are connected orthogonally adjacent (up/down/left/right, but not diagonally).

Example:
```
1 0 0 1 1
1 1 0 0 0
1 1 0 0 0
1 0 1 0 0
0 0 0 0 1
```
Contains four (4) islands.

### Solution

Iterate through the grid.  Upon "discovery" of a `1`, increment the island counter.

Then, using a deep field search, check all surrounding squares for a fresh `1`, ignoring both `0`s and visited `1`s.  If a new `1` is found, repeat the process until the entire island is discovered, then move on to the next square.

This can be done either by "sinking" the island as you explore (turning any discovered `1` into a `0`), or recording discovered squares in a separate "visited" array.  This page choses the latter.

The solution code can be found in the `Calculate.jsx` component, and involves a nested for loop (to iterate through the grid) and a recursive DFS helper function to discover the depth of each island discovered.