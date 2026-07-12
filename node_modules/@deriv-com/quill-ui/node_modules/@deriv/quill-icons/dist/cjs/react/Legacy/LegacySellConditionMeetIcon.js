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
exports.LegacySellConditionMeetIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacySellConditionMeetIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#5b90e0f0db3e92c32cd0f10331eb8d7e__a)' },
        React.createElement("path", { fill: '#333', d: 'M7.4 8a.6.6 0 0 1 .6.6v4.659a.6.6 0 0 1-1.024.424L6 12.707l-2.576 2.576a.6.6 0 0 1-.848 0L.717 13.424a.6.6 0 0 1 0-.848L3.293 10l-.976-.976A.6.6 0 0 1 2.741 8zM7 9H3.707l1 1-3 3L3 14.293l3-3 1 1zM13.424.717l1.859 1.859a.6.6 0 0 1 0 .848L12.707 6l.976.976A.6.6 0 0 1 13.259 8H8.6a.6.6 0 0 1-.6-.6V2.741a.6.6 0 0 1 1.024-.424l.976.976L12.576.717a.6.6 0 0 1 .848 0m-.424.99-3 3-1-1V7h3.293l-1-1 3-3z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5b90e0f0db3e92c32cd0f10331eb8d7e__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacySellConditionMeetIcon = LegacySellConditionMeetIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacySellConditionMeetIcon);
exports.default = ForwardRef;
