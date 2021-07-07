/* eslint-disable no-undef */
Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('#/favorite')
})

Scenario('Show Empty list', ({ I }) => {
  I.seeElement('#not-found')
})

Scenario('Like a Restaurant', ({ I }) => {
  I.amOnPage('#/detail/rqdv5juczeskfw1e867')
  I.seeElement('fav-button')
  I.click(locate('#favorite').first())
})
Scenario('Show Non Empty list', ({ I }) => {
  I.amOnPage('#/detail/rqdv5juczeskfw1e867')
  I.click(locate('#favorite').first())
  I.amOnPage('#/favorite')
  I.dontSeeElement('#not-found')
})
Scenario('Unlike a Restaurant', ({ I }) => {
  I.amOnPage('#/detail/rqdv5juczeskfw1e867')
  I.seeElement('fav-button')
  I.click(locate('#favorite').first())
  I.seeElement('.favorited')
  I.click(locate('#favorite').first())
  I.seeElement('.favorite')
})
