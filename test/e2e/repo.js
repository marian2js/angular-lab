'use strict';

describe('repo', function() {

  beforeEach(function () {
    browser().navigateTo('/#/repo/angular/angular.js')
  });

  it('should show correctly the 2 graphics', function(done) {
    expect(element('svg').count()).toBe(2);
    expect(element('h4:first').text()).toBe('Last year of commit activity per week');
    expect(element('h4:last').text()).toBe('Number of additions and deletions per week');
  });
});