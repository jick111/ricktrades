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
const LabelPairedChartCandlestickSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.875 5.063v9.625c0 .738.574 1.312 1.313 1.312h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.188A2.16 2.16 0 0 1 0 14.688V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m7.875 0v1.339c.492.11.875.547.875 1.067v2.187c0 .547-.383.985-.875 1.094v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V10.75A1.09 1.09 0 0 1 7 9.656V7.47c0-.52.355-.957.875-1.067V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438M4.813 5.5a.47.47 0 0 1 .437.438v1.339c.492.11.875.547.875 1.067v3.062c0 .547-.383.985-.875 1.094v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a1.09 1.09 0 0 1-.875-1.094V8.344c0-.52.355-.957.875-1.067V5.938a.45.45 0 0 1 .438-.438M8.75 7.469c0-.11-.11-.219-.219-.219h-.437a.216.216 0 0 0-.219.219v2.187c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219zm2.844 2.406a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219v-1.312c0-.11-.11-.219-.219-.219zM11.375 9V7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v1.339c.492.11.875.547.875 1.067v1.312c0 .547-.383.985-.875 1.094v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a1.09 1.09 0 0 1-.875-1.094v-1.312c0-.52.355-.957.875-1.067zm-6.344-.875h-.437a.216.216 0 0 0-.219.219v3.062c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219V8.344c0-.11-.11-.219-.219-.219' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '10a70c9e666daa14e985a7f3631b54ca__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartCandlestickSmRegularIcon);
exports.default = ForwardRef;
