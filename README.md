# React + Vite - Memory card game

This is a memory card game created to learn building React applications.

The two main components are MemoryCardBoard and Card.

Initially the Card Status was maintained in the Card component but as development of the game proceeded it became evident that the State had to be lifted the up parent component(i.e., MemoryCardBoard).

This is just a very basic version. There are more feature that can be added in the future.

Features/Improvements for future development:
1. Make sure that there are pairs for every card. Currently not every card ends up having a pair since the card numbers are randomly generated.
2. Allow for 2 players to play the game. Currently this is a single player version.
3. Create a Log component, that keeps track of the clicks.
4. Make improvements to the UI such that the card size is more appropriate and we are able to accomodate more cards on the screen.
