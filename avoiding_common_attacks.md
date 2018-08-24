# Common attacks

To avoid attacks I took measures that the frontend does a lot of checks.

### Main account balance

To be sure a bet submitted that is higher then the main account balance I check the main account balance and divide this through the total odds. 

### Nuxt

I used Nuxt pattern to make sure contract actions are only called when checked correctly. 

See: 

* `src/store/bet/index.js`
* `src/store/mainAccount/index.js`
