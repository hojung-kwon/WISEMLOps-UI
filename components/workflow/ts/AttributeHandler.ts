class AttributeHandler {
    private useAttributes = ref(false);
    private useAttributesAlert = ref(false);

    attributesOn = () => {
        this.useAttributes.value = true;
    }

    attributesOff = () => {
        this.useAttributes.value = false;
    }

    attributesState = (): boolean => {
        if (this.useAttributes.value) {
            return true;
        } else {
            return false;
        }
    }

    warningAlertOn = () => {
        this.useAttributesAlert.value = true;
    }

    warningAlertOff = () => {
        this.useAttributesAlert.value = false;
    }

    warningAlertState = (): boolean => {
        if (this.useAttributesAlert.value) {
            return true;
        } else {
            return false;
        }
    }
}

export default AttributeHandler;