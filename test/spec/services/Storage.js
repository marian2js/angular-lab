'use strict';

describe('Service: Storage', function () {

  // load the controller's module
  beforeEach(module('labApp'));

  var StorageService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_StorageService_) {
    StorageService = _StorageService_;
  }));

  describe('CRUD operations', function () {
    var data = {
      name: 'fake',
      value: 'data'
    };
    var key = 'fake_data';

    beforeEach(function () {
      StorageService.set(key, data);
    });

    it('should allow to get data', function () {
      var stored = StorageService.get(key);
      expect(stored.name).toBe(data.name);
      expect(stored.value).toBe(data.value);
    });

    it('should allow contains()', function () {
      expect(StorageService.contains(key)).toBe(true);
      expect(StorageService.contains('nonexistent key')).toBe(false);
    });

    it('should allow to remove data', function () {
      expect(StorageService.contains(key)).toBe(true);
      StorageService.remove(key);
      expect(StorageService.contains(key)).toBe(false);
    });
  });
});
