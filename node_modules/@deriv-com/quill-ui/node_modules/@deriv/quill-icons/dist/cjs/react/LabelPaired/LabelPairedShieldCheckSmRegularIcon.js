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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedShieldCheckSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.645 4.79-4.84 2.05c-.301.11-.52.41-.492.738 0 2.57 1.066 7.11 5.332 9.16.218.11.464.11.683 0 4.266-2.05 5.332-6.59 5.36-9.16 0-.328-.22-.601-.52-.738l-4.84-2.05a.75.75 0 0 0-.683 0m1.039-.821 4.812 2.05c.602.274 1.066.848 1.066 1.56-.027 2.734-1.148 7.683-5.851 9.952a1.68 1.68 0 0 1-1.45 0C1.56 15.261.439 10.313.439 7.578.41 6.868.875 6.293 1.477 6.02l4.84-2.051a1.7 1.7 0 0 1 1.367 0M7 8.78c-.383 0-.656.301-.656.656 0 .383.273.657.656.657a.65.65 0 0 0 .656-.656c0-.356-.3-.657-.656-.657m1.531.656c0 .711-.465 1.286-1.094 1.477v2.024a.45.45 0 0 1-.437.437.43.43 0 0 1-.437-.437v-2.024a1.5 1.5 0 0 1-1.094-1.476c0-.82.683-1.532 1.531-1.532.82 0 1.531.711 1.531 1.532' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '83f8bb0be246ab4f14d35caec30c5511__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedShieldCheckSmRegularIcon);
exports.default = ForwardRef;
