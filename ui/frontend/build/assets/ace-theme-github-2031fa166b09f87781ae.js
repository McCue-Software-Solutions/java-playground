(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["ace-theme-github"],{

/***/ "./node_modules/ace-builds/src-noconflict/theme-github.js":
/*!****************************************************************!*\
  !*** ./node_modules/ace-builds/src-noconflict/theme-github.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/theme/github-css",["require","exports","module"], function(require, exports, module){module.exports = "/* CSS style content from github's default pygments highlighter template.\n   Cursor and selection styles from textmate.css. */\n.ace-github .ace_gutter {\n  background: #e8e8e8;\n  color: #AAA;\n}\n\n.ace-github  {\n  background: #fff;\n  color: #000;\n}\n\n.ace-github .ace_keyword {\n  font-weight: bold;\n}\n\n.ace-github .ace_string {\n  color: #D14;\n}\n\n.ace-github .ace_variable.ace_class {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_numeric {\n  color: #099;\n}\n\n.ace-github .ace_constant.ace_buildin {\n  color: #0086B3;\n}\n\n.ace-github .ace_support.ace_function {\n  color: #0086B3;\n}\n\n.ace-github .ace_comment {\n  color: #998;\n  font-style: italic;\n}\n\n.ace-github .ace_variable.ace_language  {\n  color: #0086B3;\n}\n\n.ace-github .ace_paren {\n  font-weight: bold;\n}\n\n.ace-github .ace_boolean {\n  font-weight: bold;\n}\n\n.ace-github .ace_string.ace_regexp {\n  color: #009926;\n  font-weight: normal;\n}\n\n.ace-github .ace_variable.ace_instance {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_language {\n  font-weight: bold;\n}\n\n.ace-github .ace_cursor {\n  color: black;\n}\n\n.ace-github.ace_focus .ace_marker-layer .ace_active-line {\n  background: rgb(255, 255, 204);\n}\n.ace-github .ace_marker-layer .ace_active-line {\n  background: rgb(245, 245, 245);\n}\n\n.ace-github .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-github.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n/* bold keywords cause cursor issues for some fonts */\n/* this disables bold style for editor and keeps for static highlighter */\n.ace-github.ace_nobold .ace_line > span {\n    font-weight: normal !important;\n}\n\n.ace-github .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-github .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-github .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-github .ace_gutter-active-line {\n    background-color : rgba(0, 0, 0, 0.07);\n}\n\n.ace-github .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-github .ace_invisible {\n  color: #BFBFBF\n}\n\n.ace-github .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-github .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\n}\n\n.ace-github .ace_indent-guide-active {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC\") right repeat-y;\n}\n";

});

ace.define("ace/theme/github",["require","exports","module","ace/theme/github-css","ace/lib/dom"], function(require, exports, module){exports.isDark = false;
exports.cssClass = "ace-github";
exports.cssText = require("./github-css");
var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    ace.require(["ace/theme/github"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLXRoZW1lLWdpdGh1Yi0yMDMxZmExNjZiMDlmODc3ODFhZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxR0FBcUcsNEtBQTRLLHdCQUF3QixnQkFBZ0IsR0FBRyxrQkFBa0IscUJBQXFCLGdCQUFnQixHQUFHLDhCQUE4QixzQkFBc0IsR0FBRyw2QkFBNkIsZ0JBQWdCLEdBQUcseUNBQXlDLGdCQUFnQixHQUFHLDJDQUEyQyxnQkFBZ0IsR0FBRywyQ0FBMkMsbUJBQW1CLEdBQUcsMkNBQTJDLG1CQUFtQixHQUFHLDhCQUE4QixnQkFBZ0IsdUJBQXVCLEdBQUcsNkNBQTZDLG1CQUFtQixHQUFHLDRCQUE0QixzQkFBc0IsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsd0NBQXdDLG1CQUFtQix3QkFBd0IsR0FBRyw0Q0FBNEMsZ0JBQWdCLEdBQUcsNENBQTRDLHNCQUFzQixHQUFHLDZCQUE2QixpQkFBaUIsR0FBRyw4REFBOEQsbUNBQW1DLEdBQUcsa0RBQWtELG1DQUFtQyxHQUFHLGtEQUFrRCxtQ0FBbUMsR0FBRywwREFBMEQsa0NBQWtDLEdBQUcsK0tBQStLLHFDQUFxQyxHQUFHLDZDQUE2QyxpQ0FBaUMsR0FBRyw4Q0FBOEMsbUNBQW1DLEdBQUcsZ0RBQWdELDBCQUEwQix5Q0FBeUMsR0FBRyx5Q0FBeUMsNkNBQTZDLEdBQUcsc0RBQXNELG1DQUFtQyx5Q0FBeUMsR0FBRyxnQ0FBZ0MscUJBQXFCLG1DQUFtQyxlQUFlLHdCQUF3QixHQUFHLG1DQUFtQyxxQ0FBcUMsa0lBQWtJLEdBQUcsMENBQTBDLHFDQUFxQyw4TkFBOE4sR0FBRzs7QUFFNzVGLENBQUM7O0FBRUQsc0lBQXNJO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsa0JBQWtCO0FBQ25CO0FBQ0EsNEJBQTRCLEtBQXVEO0FBQ25GO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWkvLi9ub2RlX21vZHVsZXMvYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1naXRodWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYWNlLmRlZmluZShcImFjZS90aGVtZS9naXRodWItY3NzXCIsW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwibW9kdWxlXCJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe21vZHVsZS5leHBvcnRzID0gXCIvKiBDU1Mgc3R5bGUgY29udGVudCBmcm9tIGdpdGh1YidzIGRlZmF1bHQgcHlnbWVudHMgaGlnaGxpZ2h0ZXIgdGVtcGxhdGUuXFxuICAgQ3Vyc29yIGFuZCBzZWxlY3Rpb24gc3R5bGVzIGZyb20gdGV4dG1hdGUuY3NzLiAqL1xcbi5hY2UtZ2l0aHViIC5hY2VfZ3V0dGVyIHtcXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XFxuICBjb2xvcjogI0FBQTtcXG59XFxuXFxuLmFjZS1naXRodWIgIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV9rZXl3b3JkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX3N0cmluZyB7XFxuICBjb2xvcjogI0QxNDtcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV92YXJpYWJsZS5hY2VfY2xhc3Mge1xcbiAgY29sb3I6IHRlYWw7XFxufVxcblxcbi5hY2UtZ2l0aHViIC5hY2VfY29uc3RhbnQuYWNlX251bWVyaWMge1xcbiAgY29sb3I6ICMwOTk7XFxufVxcblxcbi5hY2UtZ2l0aHViIC5hY2VfY29uc3RhbnQuYWNlX2J1aWxkaW4ge1xcbiAgY29sb3I6ICMwMDg2QjM7XFxufVxcblxcbi5hY2UtZ2l0aHViIC5hY2Vfc3VwcG9ydC5hY2VfZnVuY3Rpb24ge1xcbiAgY29sb3I6ICMwMDg2QjM7XFxufVxcblxcbi5hY2UtZ2l0aHViIC5hY2VfY29tbWVudCB7XFxuICBjb2xvcjogIzk5ODtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV92YXJpYWJsZS5hY2VfbGFuZ3VhZ2UgIHtcXG4gIGNvbG9yOiAjMDA4NkIzO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX3BhcmVuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX2Jvb2xlYW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hY2UtZ2l0aHViIC5hY2Vfc3RyaW5nLmFjZV9yZWdleHAge1xcbiAgY29sb3I6ICMwMDk5MjY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX3ZhcmlhYmxlLmFjZV9pbnN0YW5jZSB7XFxuICBjb2xvcjogdGVhbDtcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV9jb25zdGFudC5hY2VfbGFuZ3VhZ2Uge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hY2UtZ2l0aHViIC5hY2VfY3Vyc29yIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFjZS1naXRodWIuYWNlX2ZvY3VzIC5hY2VfbWFya2VyLWxheWVyIC5hY2VfYWN0aXZlLWxpbmUge1xcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyMDQpO1xcbn1cXG4uYWNlLWdpdGh1YiAuYWNlX21hcmtlci1sYXllciAuYWNlX2FjdGl2ZS1saW5lIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogcmdiKDE4MSwgMjEzLCAyNTUpO1xcbn1cXG5cXG4uYWNlLWdpdGh1Yi5hY2VfbXVsdGlzZWxlY3QgLmFjZV9zZWxlY3Rpb24uYWNlX3N0YXJ0IHtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMHB4IHdoaXRlO1xcbn1cXG4vKiBib2xkIGtleXdvcmRzIGNhdXNlIGN1cnNvciBpc3N1ZXMgZm9yIHNvbWUgZm9udHMgKi9cXG4vKiB0aGlzIGRpc2FibGVzIGJvbGQgc3R5bGUgZm9yIGVkaXRvciBhbmQga2VlcHMgZm9yIHN0YXRpYyBoaWdobGlnaHRlciAqL1xcbi5hY2UtZ2l0aHViLmFjZV9ub2JvbGQgLmFjZV9saW5lID4gc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zdGVwIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTIsIDI1NSwgMCk7XFxufVxcblxcbi5hY2UtZ2l0aHViIC5hY2VfbWFya2VyLWxheWVyIC5hY2Vfc3RhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiKDE2NCwgMjI5LCAxMDEpO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX21hcmtlci1sYXllciAuYWNlX2JyYWNrZXQge1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAtMXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX2d1dHRlci1hY3RpdmUtbGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX21hcmtlci1sYXllciAuYWNlX3NlbGVjdGVkLXdvcmQge1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyNTApO1xcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX2ludmlzaWJsZSB7XFxuICBjb2xvcjogI0JGQkZCRlxcbn1cXG5cXG4uYWNlLWdpdGh1YiAuYWNlX3ByaW50LW1hcmdpbiB7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV9pbmRlbnQtZ3VpZGUge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUNDQVlBQUFDWmdiWW5BQUFBRTBsRVFWUUltV1A0Ly8vL2Y0YkxseS8vQndBbVZnZDEvdzExL2dBQUFBQkpSVTVFcmtKZ2dnPT1cXFwiKSByaWdodCByZXBlYXQteTtcXG59XFxuXFxuLmFjZS1naXRodWIgLmFjZV9pbmRlbnQtZ3VpZGUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFDQ0FZQUFBQ1pnYlluQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFJR05JVWswQUFIb2xBQUNBZ3dBQStmOEFBSURwQUFCMU1BQUE2bUFBQURxWUFBQVhiNUpmeFVZQUFBQVpTVVJCVkhqYVl2ai8vLzkvaGl2S3l2OEJBQUFBLy84REFDTHFCaGJ2aysvZUFBQUFBRWxGVGtTdVFtQ0NcXFwiKSByaWdodCByZXBlYXQteTtcXG59XFxuXCI7XG5cbn0pO1xuXG5hY2UuZGVmaW5lKFwiYWNlL3RoZW1lL2dpdGh1YlwiLFtcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIm1vZHVsZVwiLFwiYWNlL3RoZW1lL2dpdGh1Yi1jc3NcIixcImFjZS9saWIvZG9tXCJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe2V4cG9ydHMuaXNEYXJrID0gZmFsc2U7XG5leHBvcnRzLmNzc0NsYXNzID0gXCJhY2UtZ2l0aHViXCI7XG5leHBvcnRzLmNzc1RleHQgPSByZXF1aXJlKFwiLi9naXRodWItY3NzXCIpO1xudmFyIGRvbSA9IHJlcXVpcmUoXCIuLi9saWIvZG9tXCIpO1xuZG9tLmltcG9ydENzc1N0cmluZyhleHBvcnRzLmNzc1RleHQsIGV4cG9ydHMuY3NzQ2xhc3MsIGZhbHNlKTtcblxufSk7ICAgICAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNlLnJlcXVpcmUoW1wiYWNlL3RoZW1lL2dpdGh1YlwiXSwgZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==