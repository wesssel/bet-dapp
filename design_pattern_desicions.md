# Design

## Intro

I created a decentralized application that stores bet slips of users. 

## App functionality

Th application has 3 pages:

**Home**

All football matches of today with odds.

When active user click on odds a toaster pops up with total possible stake, odds and potential stake.
After adding amount the user can submit. 

Page actions:
```
* On load all fixture of today are loaded
* After fixtures are loaded all odds for each fixture are loaded
* User can add bet slips to Nuxt state.
* If main account balance is more then potential stake user can submit bet slip
* After bet slip is submit message is shown
```
 
**Admin**
 
Only creator of the application can access this, all bets are shown of all users are shown.

Page actions:
```
* Client checks if current user is main account
* If user is main account show page
* Else if user is not main account redirect to home
* If user is main account all bet slips are loaded
``` 
  
**My Bets**

All bet slips of the current user are shown.

Page actions:
```
* On page load client filters betSlips only of current user
* All bet slips of current user are shown
```

## Nuxt

I used Nuxt for the frontend because of it has Webpack, State Store, Routing and Eslint included.

The Vuex store handling all data getters, mutations and actions 

## Api Football

I used [Api-Football](https://market.mashape.com/gaudinjeremy/api-football) for receiving all fixtures and odds.

## Contracts
    
I created 2 contracts, MainAccount and BetSlips
I created 1 lib, Model, this is used by BetSlips
    
## Emergency stop

The only emergency stop is to shut down the application. This will prevent users to add any data.

## Testing

I used javascript for testing the contracts. I did this for multiple reasons:

* I have experience in javascript
* The contracts are always called with truffle on frontend. Made more sense to also test this way.

## Project 

Kanban board: https://github.com/wesssel/bet-dapp/projects/1

