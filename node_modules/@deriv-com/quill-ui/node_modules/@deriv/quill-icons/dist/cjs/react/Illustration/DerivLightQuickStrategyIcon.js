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
const DerivLightQuickStrategyIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 49 48', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#064E72', d: 'M24.158 0h22a2 2 0 0 1 2 2v22h-8.005a3.97 3.97 0 0 0 1.148-2.785c-.019-2.256-1.925-4.072-4.295-4.072-1.073 0-2.11.388-2.906 1.093-1.74 1.533-1.833 4.107-.222 5.764h-9.72V0M24.158 9.72v6.275c-1.657 1.61-4.23 1.518-5.764-.222a4.38 4.38 0 0 1-1.093-2.907c0-2.37 1.816-4.276 4.072-4.295 1.04 0 2.027.408 2.785 1.148' }),
    React.createElement("path", { fill: '#A8D0C8', d: 'M33.878 24c-1.61-1.657-1.518-4.23.222-5.764a4.38 4.38 0 0 1 2.906-1.093c2.37 0 4.276 1.816 4.295 4.072 0 1.04-.407 2.027-1.148 2.785h8.005v22a2 2 0 0 1-2 2h-22v-9.72a3.97 3.97 0 0 0 2.785 1.149c2.257-.019 4.072-1.926 4.072-4.295 0-1.074-.387-2.11-1.093-2.907-1.533-1.74-4.107-1.832-5.764-.222V24z' }),
    React.createElement("path", { fill: '#064E72', d: 'M24.158 48h-22a2 2 0 0 1-2-2V24h8.005a3.97 3.97 0 0 0-1.148 2.785c.019 2.256 1.926 4.072 4.295 4.072 1.074 0 2.11-.388 2.906-1.093 1.74-1.533 1.833-4.107.223-5.764h9.72v8.005c1.656-1.61 4.23-1.518 5.763.222a4.38 4.38 0 0 1 1.093 2.907c0 2.37-1.815 4.276-4.072 4.295a3.97 3.97 0 0 1-2.785-1.148z' }),
    React.createElement("path", { fill: '#A8D0C8', d: 'M.158 2a2 2 0 0 1 2-2h22v9.72a3.97 3.97 0 0 0-2.785-1.149c-2.256.019-4.072 1.926-4.072 4.295 0 1.074.388 2.11 1.093 2.907 1.534 1.74 4.107 1.832 5.764.222V24h-9.72c1.611 1.657 1.519 4.23-.222 5.764a4.38 4.38 0 0 1-2.906 1.093c-2.37 0-4.276-1.815-4.295-4.072 0-1.04.408-2.027 1.148-2.785H.158z' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightQuickStrategyIcon);
exports.default = ForwardRef;
