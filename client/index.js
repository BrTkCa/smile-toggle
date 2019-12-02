const FeatureDecisions = require('./FeaturesDecisions.json')
const FeatureManager = require('smile-toggle')(FeatureDecisions)

class HelloFeatureStrategy {
    constructor() {
        FeatureManager.shouldShowUserHomePage(
            this.variant0ForHomePage,
            this.variant1ForHomePage
        )
        FeatureManager.shouldShowUserProfilePage(
            this.variant0ForProfilePage,
            this.variant1ForProfilePage
        )
        FeatureManager.exampleOfExpiratedFeature(
            this.variant0ForExpirationExample,
            this.variant1ForExpirationExample
        )
    }

    variant0ForHomePage() {
        console.log('Default behavior kept for home page')
    }

    variant1ForHomePage() {
        console.log('Changed the component behavior home page')
    }

    variant0ForProfilePage() {
        console.log('Default behavior kept profile page')
    }

    variant1ForProfilePage() {
        console.log('Changed the component behavior profile page')
    }

    variant0ForExpirationExample() {
        console.log('Feature expired')
    }

    variant1ForExpirationExample() {
        console.log('Feature not expired')
    }
}

new HelloFeatureStrategy();