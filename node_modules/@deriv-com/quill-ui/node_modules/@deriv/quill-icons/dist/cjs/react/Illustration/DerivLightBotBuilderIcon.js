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
const DerivLightBotBuilderIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 48 48', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#064E72', d: 'M13.635 42.667h6.613c-.611.59-.948 1.357-.948 2.166.015 1.755 1.59 3.167 3.548 3.167.887 0 1.744-.302 2.402-.85 1.437-1.193 1.514-3.195.183-4.483h6.42c.89 0 1.61-.717 1.61-1.6l.007-4.626a3.39 3.39 0 0 0 2.3.892c1.865-.014 3.365-1.497 3.365-3.34 0-.835-.32-1.641-.903-2.26a3.39 3.39 0 0 0-4.762-.173L33.463 24h-8.03c1.33 1.289 1.254 3.29-.183 4.484a3.76 3.76 0 0 1-2.402.85c-1.957 0-3.533-1.413-3.548-3.168 0-.808.337-1.576.948-2.166h-6.613z' }),
    React.createElement("path", { fill: '#A8D0C8', fillRule: 'evenodd', d: 'M20.28 5.333c-1.331-1.288-1.255-3.29.183-4.483A3.76 3.76 0 0 1 22.864 0c1.958 0 3.533 1.412 3.548 3.167 0 .809-.336 1.577-.948 2.166h8.03v7.56a3.39 3.39 0 0 0-2.3-.893c-1.865.014-3.365 1.497-3.365 3.34 0 .835.32 1.642.903 2.26a3.39 3.39 0 0 0 4.762.174V24h-8.03c1.33 1.289 1.254 3.29-.184 4.483a3.76 3.76 0 0 1-2.401.85c-1.958 0-3.533-1.412-3.548-3.167 0-.809.336-1.576.948-2.166h-6.614v-6.226a3.39 3.39 0 0 1-4.762-.173A3.3 3.3 0 0 1 8 15.34c0-1.844 1.5-3.327 3.364-3.341.86 0 1.675.317 2.301.893v-5.96c0-.883.721-1.6 1.61-1.6z', clipRule: 'evenodd' })));
const ForwardRef = (0, react_1.forwardRef)(DerivLightBotBuilderIcon);
exports.default = ForwardRef;
