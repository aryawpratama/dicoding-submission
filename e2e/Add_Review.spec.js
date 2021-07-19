/* eslint-disable no-undef */
Feature('Add Review Restaurant')

Before(({ I }) => {
  I.amOnPage('#/')
  I.seeElement('.card')
  I.click(locate('.card').first())
})
Scenario('Show modalbox button', ({ I }) => {
  I.seeElement('#add-review')
})
Scenario('Show modalbox', ({ I }) => {
  I.click(locate('#add-review').first())
  I.seeElement('#name')
  I.seeElement('#review')
  I.seeElement('#submit')
})
Scenario('Submit Review', ({ I }) => {
  I.fillField('name', 'Arya W Pratama')
  I.fillField('review', 'Ini adalah review end to end')
  I.click(locate('#submit').first())
})
