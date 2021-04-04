var Sport = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * Sport
     *
     * @method faker.sport.sport
     */
    self.sport = function () {
      return fake('{{sport.indoor}} {{sport.outdoor}}');
    };
  
    self.sport.schema = {
      "description": "Generates a random sports.",
      "sampleResults": ["cricket", "vallyball", "baseaball","hokey","swimming"]
    };
  
    /**
     * indoor
     *
     * @method faker.sport.indoor
     */
    self.indoor = function () {
      return faker.random.arrayElement(faker.definitions.sport.indoor);
    };
  
    self.indoor.schema = {
      "description": "Generates a indoor games name.",
      "sampleResults": ["chess","swimming","bowling"]
    };

    /**
     * outdoor
     *
     * @method faker.sport.outdoor
     */
    self.outdoor = function () {
      return faker.random.arrayElement(faker.definitions.sport.outdoor);
    };
  
    self.outdoor.schema = {
      "description": "Generates a outdoor games name.",
      "sampleResults": ["cricket","football","baseball"]
    };
}
module["exports"] = Sport;