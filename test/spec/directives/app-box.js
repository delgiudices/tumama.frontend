'use strict';

describe('Directive: appBox', function () {

  // load the directive's module
  beforeEach(module('fullappfrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<app-box></app-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appBox directive');
  }));
});
