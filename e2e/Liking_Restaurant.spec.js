/* eslint-disable no-undef */
Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('#/')
  I.seeElement('.card')
  I.click(locate('.card').first())
})

Scenario('Show Empty list', ({ I }) => {
  I.amOnPage('#/favorite')
  I.seeElement('#not-found')
})

Scenario('Like a Restaurant', ({ I }) => {
  I.seeElement('fav-button')
  I.click(locate('#favorite').first())
})
Scenario('Show Non Empty list', ({ I }) => {
  I.click(locate('#favorite').first())
  I.amOnPage('#/favorite')
  I.dontSeeElement('#not-found')
})
Scenario('Unlike a Restaurant', ({ I }) => {
  I.seeElement('fav-button')
  I.click(locate('#favorite').first())
  I.seeElement('.favorited')
  I.click(locate('#favorite').first())
  I.seeElement('.favorite')
})
