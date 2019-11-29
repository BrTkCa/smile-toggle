const FeatureRules = require('./featureRules')

const FeatureStrategyFactory = ( featureDecisions ) => {
    return Object.keys( featureDecisions ).reduce( ( acc, key ) => {
      acc[key] = ( variant0, variant1 ) => {
        if ( FeatureRules.isFeatureAtive(featureDecisions[key]) &&
             FeatureRules.isFeatureNotExpired(featureDecisions[key]) ) {
          return variant1()
        }
        return variant0()
      }
      return acc
    }, {})
}

module.exports = FeatureStrategyFactory;