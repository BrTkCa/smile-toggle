const FeatureRules = {
    isFeatureAtive: (featureDecision) => {
        if (featureDecision.activated) {
            return true;
        }
        return false;
    },
    isFeatureNotExpired: (featureDecision) => {
        if (new Date(featureDecision.expiration) >= new Date()) {
            return true;
        }
        return false;
    },
    isGroupGranted: (featureDecision) => {
        if (featureDecision.expiration < new Date()) {
            return true;
        }
        return false;
    }
}

module.exports = FeatureRules;