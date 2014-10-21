describe('Verify Angualar JS page', function() {
  beforeEach(function() {
    browser.get('https://docs.angularjs.org/api');
  });

  it('Navigate to page successfully', function() {
    

    expect(element(by.id('angularjs-api-docs')).getText()).toEqual('AngularJS API Docs');	
	});
	it('Verfiy the presence of element in Angular JS Page', function() {
	expect(element(by.id('angular-modules')).getText()).toEqual('Angular Modules');
	});
	it('Verfiy clicking a link on page and then verify presence of element on Core Module page', function() {
   element(by.css('html.ng-scope body div#wrapper section.container.main-body div.main-grid.main-body-grid div.grid-right div.ng-scope h2#-link-ng-ng-core-module-.ng-scope a')).click();
	
	expect(element(by.id('ng-core-module-')).getText()).toEqual('ng (core module)');
	});
	
})

