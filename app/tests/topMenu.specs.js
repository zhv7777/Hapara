describe('.all()', function() {
    // A simple test to verify the method all exists
    it('should exist', function() {
      expect(topMenuOptions.all).toBeDefined();
    });

    // A test to verify that calling all() returns the array of users we hard-coded above
    it('should return list of menu options', function() {
      expect(topMenuOptions.all()).toEqual(topMenuOptionsList);
    });
  });
