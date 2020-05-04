/**
/**
/**
 *
 * @namespace faker.Hobbies
 */
function Hobbies(faker) {
    var f = faker.fake,
        Helpers = faker.helpers;

    this.outdoorActivities = function() {
        return faker.random.arrayElement(
            faker.definitions.hobbies.outdoorActivities
        );
    };
    this.indoorActivities = function() {
        return faker.random.arrayElement(
            faker.definitions.hobbies.indoorActivities
        );
    };
}
module.exports = Hobbies;