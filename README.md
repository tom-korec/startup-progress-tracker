# Startup progress tracker

## Start

`npm run dev`

## Live demo
https://startup-progress-tracker.vercel.app/

## Description

I have used create T3 stack app to create this project.

I have used React, Typescript and Tailwindcss to create this project.

There are mocked data as there is no form to create new stages and steps.

Users can reopen steps, but if the step is in finished stage and there were completed steps in the next stage, then modal with confirmation is shown. After confirmation, the step is reopened and all the steps in the next stages are set to not completed.

I wanted to also create a switch, which would enable editing of the stages and steps, but I did not have enough time to do it.

## Todos

- [] Editing stages and steps
- [] Tests
