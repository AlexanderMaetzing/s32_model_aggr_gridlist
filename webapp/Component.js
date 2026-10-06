sap.ui.define([
    "sap/ui/core/UIComponent",
    "qst/s32/s32modelaggrgridlist/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("qst.s32.s32modelaggrgridlist.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});