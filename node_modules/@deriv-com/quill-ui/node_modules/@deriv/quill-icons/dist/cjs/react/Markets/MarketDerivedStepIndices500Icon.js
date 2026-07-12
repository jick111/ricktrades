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
exports.MarketDerivedStepIndices500Icon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketDerivedStepIndices500Icon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#0AA0B0', d: 'M32 30H0v2h32zM2.5 18.6h.3l1.8 3.2c-.3.4-.4.9-.4 1.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.5-.1-.9-.4-1.3l2.1-3.3h.4c1.4 0 2.5-1.1 2.5-2.5 0-.5-.1-1-.4-1.3l2.1-3.2h.8l2.1 3.2c-.3.4-.4.9-.4 1.3 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.5-.1-1-.4-1.3l2.1-3.2h.4c1.4 0 2.5-1.1 2.5-2.5 0-.5-.2-1-.4-1.4l2-2.7h.3C30.9 5 32 3.9 32 2.5S30.9 0 29.5 0 27 1.1 27 2.5c0 .5.2 1 .5 1.4l-1.7 2.7h-.4c-1.4 0-2.5 1.1-2.5 2.5 0 .5.1 1 .4 1.3l-2.1 3.2h-.8l-2.1-3.2c.3-.4.4-.9.4-1.3 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 .5.1 1 .4 1.3L12 13.6h-.4c-1.4 0-2.5 1.1-2.5 2.5 0 .5.2 1 .4 1.4l-2.1 3.2c-.2 0-.3-.1-.5-.1h-.4l-1.8-3.1c.1-.3.3-.8.3-1.4 0-1.4-1.1-2.5-2.5-2.5S0 14.7 0 16.1s1.1 2.5 2.5 2.5' }),
    React.createElement("path", { fill: '#414652', d: 'M0 2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#fff', d: 'M6.48 3.464H3.946l-.12 1.768h.064q.08-.2.176-.36.103-.168.24-.28.135-.12.328-.184.192-.064.456-.064.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.136.329.136.744 0 .425-.144.792-.137.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688a2.2 2.2 0 0 0 .44.56q.256.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.225-.616-.224-.328 0-.544.136-.209.127-.32.256l-.984-.136.208-3.16H6.48zM9.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352' })));
exports.MarketDerivedStepIndices500Icon = MarketDerivedStepIndices500Icon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketDerivedStepIndices500Icon);
exports.default = ForwardRef;
