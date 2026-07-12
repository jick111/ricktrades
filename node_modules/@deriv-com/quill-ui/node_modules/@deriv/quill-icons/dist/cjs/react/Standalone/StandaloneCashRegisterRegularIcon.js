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
exports.StandaloneCashRegisterRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCashRegisterRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16.625 7.75h-7.5a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625m-7.5-1.25h7.5c1.016 0 1.875.86 1.875 1.875v1.25c0 1.055-.86 1.875-1.875 1.875H13.5v1.25h9.063c1.25 0 2.304.938 2.46 2.148l.938 6.446c0 .117.039.234.039.351V24c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 6 24v-2.656l.938-6.446a2.486 2.486 0 0 1 2.46-2.148h2.852V11.5H9.125A1.85 1.85 0 0 1 7.25 9.625v-1.25c0-1.016.82-1.875 1.875-1.875M7.25 24c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25v-1.25H7.25zm16.563-8.906c-.118-.625-.625-1.094-1.25-1.094H9.398c-.625 0-1.132.469-1.25 1.094L7.25 21.5h17.46zm-13.438.469a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m2.813.937c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938M16 18.688a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937' })));
exports.StandaloneCashRegisterRegularIcon = StandaloneCashRegisterRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCashRegisterRegularIcon);
exports.default = ForwardRef;
