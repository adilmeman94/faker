/**
 *
 * @namespace faker.mobile
 */
var Mobile = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * mobile
     *
     * @method faker.mobile.mobile
     */
    self.mobile = function () {
      return fake('{{mobile.manufacturer}} {{mobile.model}}');
    };
  
    self.mobile.schema = {
      "description": "Generates a random mobile.",
      "sampleResults": ["Oppo Reno3", "Vivo Y53", "Samsung M30", "Lenovo Z6pro", "Xiaomi Readmi9Prime"]
    };
  
    /**
     * manufacturer
     *
     * @method faker.mobile.manufacturer
     */
    self.manufacturer = function () {
      return faker.random.arrayElement(faker.definitions.mobile.manufacturer);
    };
  
    self.manufacturer.schema = {
      "description": "Generates a manufacturer name.",
      "sampleResults": ["Oppo", "Vivo", "Samsung", "Lenovo", "Xiaomi"]
    };
  
  
    /**
     * model
     *
     * @method faker.mobile.model
     */
    self.model = function () {
      return faker.random.arrayElement(faker.definitions.mobile.model);
    };
  
    self.model.schema = {
      "description": "Generates a mobile model.",
      "sampleResults": ["Reno3", "Y53", "M30", "Z6pro", "Readmi9Prime"]
    };
  
    
  };
  
  module["exports"] = Mobile;
  
