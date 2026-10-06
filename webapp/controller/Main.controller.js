sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("qst.s32.s32modelaggrgridlist.controller.Main", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("/data/oscar.json", {}, false);
            this.getView().setModel(oModel);
            debugger;
        }
    });
});