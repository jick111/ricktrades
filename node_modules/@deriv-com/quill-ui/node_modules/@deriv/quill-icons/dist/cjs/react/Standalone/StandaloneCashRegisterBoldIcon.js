"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandaloneCashRegisterBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCashRegisterBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.5 6.5h8.75c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25h-3.125v1.25h8.438c1.25 0 2.304.938 2.46 2.148l.938 6.446c0 .117.039.234.039.351V24c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 6 24v-2.656l.938-6.446a2.486 2.486 0 0 1 2.46-2.148h2.227V11.5H8.5c-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25m1.25 1.875A.64.64 0 0 0 9.125 9c0 .352.273.625.625.625H16A.64.64 0 0 0 16.625 9c0-.312-.312-.625-.625-.625zM7.875 24c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-.625H7.875zm15.313-8.828a.63.63 0 0 0-.625-.547H9.398a.63.63 0 0 0-.625.547L7.875 21.5h16.21zm-12.813.39a.95.95 0 0 1 .938.938c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m2.813.938c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938M16 18.688a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937' })));
exports.StandaloneCashRegisterBoldIcon = StandaloneCashRegisterBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCashRegisterBoldIcon);
exports.default = ForwardRef;
