sap.ui.define(["./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "../model/formatter"],
    function (BaseController, JSONModel, History, formatter) {
        "use strict";
        return BaseController.extend("tirsan.fioriegitim.controller.NewRecord",
            {
                formatter: formatter, /* =========================================================== */ /* lifecycle methods */ /* =========================================================== */ /** * Called when the worklist controller is instantiated. * @public */
                onInit: function () { },
            });
    });

