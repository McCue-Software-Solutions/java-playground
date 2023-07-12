(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["ace-theme-dreamweaver"],{

/***/ "./node_modules/ace-builds/src-noconflict/theme-dreamweaver.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ace-builds/src-noconflict/theme-dreamweaver.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/theme/dreamweaver-css",["require","exports","module"], function(require, exports, module){module.exports = ".ace-dreamweaver .ace_gutter {\n  background: #e8e8e8;\n  color: #333;\n}\n\n.ace-dreamweaver .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-dreamweaver {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-dreamweaver .ace_fold {\n    background-color: #757AD8;\n}\n\n.ace-dreamweaver .ace_cursor {\n  color: black;\n}\n        \n.ace-dreamweaver .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-dreamweaver .ace_storage,\n.ace-dreamweaver .ace_keyword {\n  color: blue;\n}\n\n.ace-dreamweaver .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-dreamweaver .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-dreamweaver .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-dreamweaver .ace_invalid {\n  background-color: rgb(153, 0, 0);\n  color: white;\n}\n\n.ace-dreamweaver .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-dreamweaver .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-dreamweaver .ace_support.ace_type,\n.ace-dreamweaver .ace_support.ace_class {\n  color: #009;\n}\n\n.ace-dreamweaver .ace_support.ace_php_tag {\n  color: #f00;\n}\n\n.ace-dreamweaver .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-dreamweaver .ace_string {\n  color: #00F;\n}\n\n.ace-dreamweaver .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-dreamweaver .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-dreamweaver .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-dreamweaver .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-dreamweaver .ace_variable {\n  color: #06F\n}\n\n.ace-dreamweaver .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-dreamweaver .ace_entity.ace_name.ace_function {\n  color: #00F;\n}\n\n\n.ace-dreamweaver .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-dreamweaver .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-dreamweaver .ace_gutter-active-line {\n  background-color : #DCDCDC;\n}\n\n.ace-dreamweaver .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-dreamweaver .ace_meta.ace_tag {\n  color:#009;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_anchor {\n  color:#060;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_form {\n  color:#F90;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_image {\n  color:#909;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_script {\n  color:#900;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_style {\n  color:#909;\n}\n\n.ace-dreamweaver .ace_meta.ace_tag.ace_table {\n  color:#099;\n}\n\n.ace-dreamweaver .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-dreamweaver .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\n}\n\n.ace-dreamweaver .ace_indent-guide-active {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC\") right repeat-y;\n} \n";

});

ace.define("ace/theme/dreamweaver",["require","exports","module","ace/theme/dreamweaver-css","ace/lib/dom"], function(require, exports, module){exports.isDark = false;
exports.cssClass = "ace-dreamweaver";
exports.cssText = require("./dreamweaver-css");
var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    ace.require(["ace/theme/dreamweaver"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLXRoZW1lLWRyZWFtd2VhdmVyLTc2YmFhMmZkZTM1YjI5NmFlMjg3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDBHQUEwRyxnREFBZ0Qsd0JBQXdCLGdCQUFnQixHQUFHLHdDQUF3QyxlQUFlLHdCQUF3QixHQUFHLHNCQUFzQiw4QkFBOEIsaUJBQWlCLEdBQUcsZ0NBQWdDLGdDQUFnQyxHQUFHLGtDQUFrQyxpQkFBaUIsR0FBRyw2Q0FBNkMsOEJBQThCLEdBQUcsbUVBQW1FLGdCQUFnQixHQUFHLGdEQUFnRCw0QkFBNEIsR0FBRyxpREFBaUQsNEJBQTRCLEdBQUcsZ0RBQWdELDJCQUEyQixHQUFHLG1DQUFtQyxxQ0FBcUMsaUJBQWlCLEdBQUcsZ0RBQWdELDRCQUE0QixHQUFHLGdEQUFnRCwyQkFBMkIsR0FBRyxzRkFBc0YsZ0JBQWdCLEdBQUcsK0NBQStDLGdCQUFnQixHQUFHLGdEQUFnRCw4QkFBOEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLEdBQUcsbUNBQW1DLDZCQUE2QixHQUFHLDJDQUEyQyw0QkFBNEIsR0FBRyxtREFBbUQsOEJBQThCLEdBQUcsZ0RBQWdELDBCQUEwQixHQUFHLG9DQUFvQyxrQkFBa0Isa0NBQWtDLDZCQUE2QixHQUFHLHdEQUF3RCxnQkFBZ0IsR0FBRyxxQ0FBcUMsMkJBQTJCLEdBQUcsZ0NBQWdDLDJCQUEyQixHQUFHLHVEQUF1RCxtQ0FBbUMsR0FBRyxrREFBa0QsaUNBQWlDLEdBQUcsbURBQW1ELG1DQUFtQyxHQUFHLHFEQUFxRCwwQkFBMEIseUNBQXlDLEdBQUcseURBQXlELG9DQUFvQyxHQUFHLDhDQUE4QywrQkFBK0IsR0FBRywyREFBMkQsbUNBQW1DLHlDQUF5QyxHQUFHLHdDQUF3QyxlQUFlLEdBQUcsbURBQW1ELGVBQWUsR0FBRyxpREFBaUQsZUFBZSxHQUFHLGtEQUFrRCxlQUFlLEdBQUcsbURBQW1ELGVBQWUsR0FBRyxrREFBa0QsZUFBZSxHQUFHLGtEQUFrRCxlQUFlLEdBQUcsNENBQTRDLDRCQUE0Qix3Q0FBd0MscUNBQXFDLGtJQUFrSSxHQUFHLCtDQUErQyxxQ0FBcUMsOE5BQThOLElBQUk7O0FBRXp1SCxDQUFDOztBQUVELGdKQUFnSjtBQUNoSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLGtCQUFrQjtBQUNuQjtBQUNBLDRCQUE0QixLQUF1RDtBQUNuRjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3VpLy4vbm9kZV9tb2R1bGVzL2FjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtZHJlYW13ZWF2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYWNlLmRlZmluZShcImFjZS90aGVtZS9kcmVhbXdlYXZlci1jc3NcIixbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCJtb2R1bGVcIl0sIGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSl7bW9kdWxlLmV4cG9ydHMgPSBcIi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9ndXR0ZXIge1xcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfcHJpbnQtbWFyZ2luIHtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9mb2xkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1N0FEODtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX2N1cnNvciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbiAgICAgICAgXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX2ludmlzaWJsZSB7XFxuICBjb2xvcjogcmdiKDE5MSwgMTkxLCAxOTEpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2Vfc3RvcmFnZSxcXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2Vfa2V5d29yZCB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX2NvbnN0YW50LmFjZV9idWlsZGluIHtcXG4gIGNvbG9yOiByZ2IoODgsIDcyLCAyNDYpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfY29uc3RhbnQuYWNlX2xhbmd1YWdlIHtcXG4gIGNvbG9yOiByZ2IoODgsIDkyLCAyNDYpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfY29uc3RhbnQuYWNlX2xpYnJhcnkge1xcbiAgY29sb3I6IHJnYig2LCAxNTAsIDE0KTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX2ludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9zdXBwb3J0LmFjZV9mdW5jdGlvbiB7XFxuICBjb2xvcjogcmdiKDYwLCA3NiwgMTE0KTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX3N1cHBvcnQuYWNlX2NvbnN0YW50IHtcXG4gIGNvbG9yOiByZ2IoNiwgMTUwLCAxNCk7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9zdXBwb3J0LmFjZV90eXBlLFxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9zdXBwb3J0LmFjZV9jbGFzcyB7XFxuICBjb2xvcjogIzAwOTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX3N1cHBvcnQuYWNlX3BocF90YWcge1xcbiAgY29sb3I6ICNmMDA7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9rZXl3b3JkLmFjZV9vcGVyYXRvciB7XFxuICBjb2xvcjogcmdiKDEwNCwgMTE4LCAxMzUpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2Vfc3RyaW5nIHtcXG4gIGNvbG9yOiAjMDBGO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfY29tbWVudCB7XFxuICBjb2xvcjogcmdiKDc2LCAxMzYsIDEwNyk7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9jb21tZW50LmFjZV9kb2Mge1xcbiAgY29sb3I6IHJnYigwLCAxMDIsIDI1NSk7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9jb21tZW50LmFjZV9kb2MuYWNlX3RhZyB7XFxuICBjb2xvcjogcmdiKDEyOCwgMTU5LCAxOTEpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfY29uc3RhbnQuYWNlX251bWVyaWMge1xcbiAgY29sb3I6IHJnYigwLCAwLCAyMDUpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfdmFyaWFibGUge1xcbiAgY29sb3I6ICMwNkZcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX3htbC1wZSB7XFxuICBjb2xvcjogcmdiKDEwNCwgMTA0LCA5MSk7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9lbnRpdHkuYWNlX25hbWUuYWNlX2Z1bmN0aW9uIHtcXG4gIGNvbG9yOiAjMDBGO1xcbn1cXG5cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfaGVhZGluZyB7XFxuICBjb2xvcjogcmdiKDEyLCA3LCAyNTUpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfbGlzdCB7XFxuICBjb2xvcjpyZ2IoMTg1LCA2LCAxNDQpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfbWFya2VyLWxheWVyIC5hY2Vfc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxODEsIDIxMywgMjU1KTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX21hcmtlci1sYXllciAuYWNlX3N0ZXAge1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MiwgMjU1LCAwKTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX21hcmtlci1sYXllciAuYWNlX3N0YWNrIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNjQsIDIyOSwgMTAxKTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX21hcmtlci1sYXllciAuYWNlX2JyYWNrZXQge1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAtMXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfbWFya2VyLWxheWVyIC5hY2VfYWN0aXZlLWxpbmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX2d1dHRlci1hY3RpdmUtbGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yIDogI0RDRENEQztcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX21hcmtlci1sYXllciAuYWNlX3NlbGVjdGVkLXdvcmQge1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyNTApO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfbWV0YS5hY2VfdGFnIHtcXG4gIGNvbG9yOiMwMDk7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9tZXRhLmFjZV90YWcuYWNlX2FuY2hvciB7XFxuICBjb2xvcjojMDYwO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfbWV0YS5hY2VfdGFnLmFjZV9mb3JtIHtcXG4gIGNvbG9yOiNGOTA7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9tZXRhLmFjZV90YWcuYWNlX2ltYWdlIHtcXG4gIGNvbG9yOiM5MDk7XFxufVxcblxcbi5hY2UtZHJlYW13ZWF2ZXIgLmFjZV9tZXRhLmFjZV90YWcuYWNlX3NjcmlwdCB7XFxuICBjb2xvcjojOTAwO1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfbWV0YS5hY2VfdGFnLmFjZV9zdHlsZSB7XFxuICBjb2xvcjojOTA5O1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfbWV0YS5hY2VfdGFnLmFjZV90YWJsZSB7XFxuICBjb2xvcjojMDk5O1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2Vfc3RyaW5nLmFjZV9yZWdleCB7XFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMClcXG59XFxuXFxuLmFjZS1kcmVhbXdlYXZlciAuYWNlX2luZGVudC1ndWlkZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQ0NBWUFBQUNaZ2JZbkFBQUFFMGxFUVZRSW1XUDQvLy8vZjRiTGx5Ly9Cd0FtVmdkMS93MTEvZ0FBQUFCSlJVNUVya0pnZ2c9PVxcXCIpIHJpZ2h0IHJlcGVhdC15O1xcbn1cXG5cXG4uYWNlLWRyZWFtd2VhdmVyIC5hY2VfaW5kZW50LWd1aWRlLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQ0NBWUFBQUNaZ2JZbkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBSUdOSVVrMEFBSG9sQUFDQWd3QUErZjhBQUlEcEFBQjFNQUFBNm1BQUFEcVlBQUFYYjVKZnhVWUFBQUFaU1VSQlZIamFZdmovLy85L2hpdkt5djhCQUFBQS8vOERBQ0xxQmhidmsrL2VBQUFBQUVsRlRrU3VRbUNDXFxcIikgcmlnaHQgcmVwZWF0LXk7XFxufSBcXG5cIjtcblxufSk7XG5cbmFjZS5kZWZpbmUoXCJhY2UvdGhlbWUvZHJlYW13ZWF2ZXJcIixbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCJtb2R1bGVcIixcImFjZS90aGVtZS9kcmVhbXdlYXZlci1jc3NcIixcImFjZS9saWIvZG9tXCJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe2V4cG9ydHMuaXNEYXJrID0gZmFsc2U7XG5leHBvcnRzLmNzc0NsYXNzID0gXCJhY2UtZHJlYW13ZWF2ZXJcIjtcbmV4cG9ydHMuY3NzVGV4dCA9IHJlcXVpcmUoXCIuL2RyZWFtd2VhdmVyLWNzc1wiKTtcbnZhciBkb20gPSByZXF1aXJlKFwiLi4vbGliL2RvbVwiKTtcbmRvbS5pbXBvcnRDc3NTdHJpbmcoZXhwb3J0cy5jc3NUZXh0LCBleHBvcnRzLmNzc0NsYXNzLCBmYWxzZSk7XG5cbn0pOyAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjZS5yZXF1aXJlKFtcImFjZS90aGVtZS9kcmVhbXdlYXZlclwiXSwgZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==