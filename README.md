# DEMO / REPRODUCTION

Self-initiated sample. This is not a client site and it is not a WordPress admin session.

## Objective

Show a common responsive layout failure, the CSS that causes it, and the CSS that removes it.

## Problem

A hero with a fixed width of 1200px, content-box sizing, and a menu that does not wrap. On a narrow frame the content scrolls sideways.

## Cause

`width: 1200px` plus `box-sizing: content-box` makes the hero wider than a phone. `white-space: nowrap` keeps the menu on one line.

## Fix

`max-width: 100%`, `box-sizing: border-box`, and `flex-wrap: wrap` on the menu. The rules in `styles.css` are the ones described on the page.

## Verification

Open `index.html`. The before frame should report horizontal overflow. The after frame should report none. The case-study page itself should not scroll sideways.

## How to run

Open `index.html` in a browser, or serve this folder. GitHub Pages serves the same file.

## Tech stack

HTML, CSS, and a short measurement script.
