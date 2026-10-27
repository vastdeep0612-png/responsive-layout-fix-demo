# SELF-INITIATED DEMO

This is not a client site and it is not a WordPress admin session.

## Objective

Show three layout faults, the CSS that causes them, and the CSS that removes them at 375px, 768px, and 1440px.

## Problem

A copied section has a 1200px hero, a menu that does not wrap, a button placed on top of the heading, and an 80px extra margin on the middle card.

## Cause

`width: 1200px` with `box-sizing: content-box`, `white-space: nowrap`, `position: absolute` on the button, and `margin-left: 80px` on the second card.

## Fix

`max-width: 100%`, `box-sizing: border-box`, a wrapping menu, the button back in normal flow, and one consistent card gap.

## Verification

Open `index.html`. The before frames should show overflow at 375px, overlap at 375px, and uneven spacing at 768px. The after frames should clear all three. The page itself should not scroll sideways. The walkthrough button steps through those checks for about 75 seconds. There is no separate video file.

## How to run

Open `index.html` in a browser, or serve this folder. GitHub Pages serves the same file.

## Responsive web design checklist

This self-initiated demo illustrates concrete layout faults. For a Korean-language checklist covering navigation, tap targets, form usability, and responsive UX, read [MODERUN's mobile UX design note](https://1oohyun.store/moderun-preview/guide-mobile-ux.html?utm_source=github&utm_medium=readme&utm_campaign=responsive_demo) and [MODERUN's website overview](https://1oohyun.store/moderun-preview/?utm_source=github&utm_medium=readme&utm_campaign=responsive_demo). This is not a client case study.
