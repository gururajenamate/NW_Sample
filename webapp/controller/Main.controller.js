sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("userprofile.controller.Main", {
        onInit: function () {
            // var oModel = new JSONModel("../model/data.json");
			// this.getView().setModel(oModel);
        },
        onAfterRendering: function() {
            
            $.ajax({
                url: "/v2/northwind/northwind.svc/Employees?$skip=5&$top=1&$format=json",
                type: "GET",
                success: function (oResponse, textStatus, jqXHR) {
                    debugger;
                    var oModel = new sap.ui.model.json.JSONModel(oResponse.d[0]);
                    this.getView().setModel(oModel);
                }.bind(this),
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        }
    });
});
