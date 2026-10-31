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

## Small paid work / 소규모 유료 의뢰 안내

MODERUN은 **모바일 CSS·반응형 오류 수정**, **웹사이트 QA**, **CSV 데이터 자동화**의 범위가 명확한 소규모 원격 작업을 받습니다. 국내는 계좌이체, 해외는 당사자·플랫폼이 허용하는 코인 정산을 협의합니다. 처음부터 비밀번호나 고객 개인정보를 보내지 마세요.

- [작업 메뉴·가격·의뢰 절차 (한국어 / English)](SERVICES_KR_EN.md)
- **문의:** Discord `hoomhx` (작업 종류, 공개 URL/비식별 샘플, 일정, 예산)

이 저장소는 자체 제작 데모이며 실제 고객 납품 실적으로 소개하지 않습니다.
